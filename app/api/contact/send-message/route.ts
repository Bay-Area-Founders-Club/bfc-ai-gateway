import { NextRequest, NextResponse } from 'next/server';
import https from 'https';

// api.bayareafoundersclub.com uses a self-signed cert — disable SSL verification for this internal call
const agent = new https.Agent({ rejectUnauthorized: false });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const url = `${process.env.API_BASE_URL}/api/contact/send-message`;
    const payload = JSON.stringify(body);

    const data = await new Promise<{ status: number; body: unknown }>((resolve, reject) => {
      const parsed = new URL(url);
      const options = {
        hostname: parsed.hostname,
        port: parsed.port || 443,
        path: parsed.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload),
        },
        agent,
      };

      const req = https.request(options, (res) => {
        let raw = '';
        res.on('data', (chunk) => (raw += chunk));
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode ?? 500, body: JSON.parse(raw) });
          } catch {
            resolve({ status: res.statusCode ?? 500, body: raw });
          }
        });
      });

      req.on('error', reject);
      req.write(payload);
      req.end();
    });

    return NextResponse.json(data.body, { status: data.status });
  } catch {
    return NextResponse.json(
      { detail: 'Failed to send contact message' },
      { status: 500 }
    );
  }
}
