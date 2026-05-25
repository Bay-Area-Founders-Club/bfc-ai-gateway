import AnimatedSection from "@/components/ui/AnimatedSection";

const providers = [
  { name: "OpenAI", description: "GPT-4o, o3, o4-mini" },
  { name: "Anthropic", description: "Claude 4 Opus, Sonnet, Haiku" },
  { name: "Google", description: "Gemini 2.5 Pro, Flash" },
  { name: "Meta", description: "Llama 4 Scout, Maverick" },
  { name: "Mistral", description: "Large, Codestral, Nemo" },
  { name: "xAI", description: "Grok 3, Grok Vision" },
  { name: "Cohere", description: "Command R+, Embed" },
  { name: "Stability AI", description: "SD3, SDXL, Video" },
  { name: "ByteDance", description: "Seedance, Doubao" },
  { name: "Runway", description: "Gen-4 Video, Image" },
  { name: "ElevenLabs", description: "Voice, TTS, STS" },
  { name: "Perplexity", description: "Sonar Pro, Online" },
  { name: "Together AI", description: "Open-source models" },
  { name: "Fireworks", description: "Fast inference" },
  { name: "DeepSeek", description: "R2, V3-0324" },
  { name: "Qwen", description: "QwQ-32B, Qwen2.5" },
];

const doubled = [...providers, ...providers];

export default function ModelGrid() {
  return (
    <section id="models" className="py-24 bg-[#f2ede7] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <p className="text-xs font-semibold text-[#c9922a] tracking-widest uppercase mb-3">
            Supported Models
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
            Every frontier model, one endpoint
          </h2>
          <p className="text-[#777] max-w-xl mx-auto">
            From text and code to image, video, and audio generation — access
            the full stack of AI capabilities through a single unified API.
          </p>
        </AnimatedSection>
      </div>

      {/* Marquee strip */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#f2ede7] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#f2ede7] to-transparent pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="marquee-track flex gap-4 whitespace-nowrap">
            {doubled.map((provider, i) => (
              <div
                key={`${provider.name}-${i}`}
                className="flex-shrink-0 border border-[#e8e2d9] bg-white rounded-xl px-5 py-4 min-w-[160px] shadow-sm"
              >
                <div className="text-sm font-semibold text-[#1a1a1a] mb-0.5">
                  {provider.name}
                </div>
                <div className="text-xs text-[#aaa]">{provider.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 text-center">
        <p className="text-xs text-[#bbb] tracking-wide">
          New models added weekly &mdash; always up to date with the frontier.
        </p>
      </div>
    </section>
  );
}
