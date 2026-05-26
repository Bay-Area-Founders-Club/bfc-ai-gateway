import Image from "next/image";
import { config } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-[#e8e2d9] bg-[#f2ede7]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <a
              href={config.bfcMainSite}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity inline-block"
            >
              <Image
                src="/bfc_logo_c.png"
                alt="Bay Area Founders Club"
                width={130}
                height={34}
                className="h-7 w-auto"
              />
            </a>
            <p className="text-xs text-[#999] max-w-xs leading-relaxed">
              The #1 AI-native startup community in Silicon Valley.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <a
              href={config.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#888] hover:text-[#c9922a] transition-colors"
            >
              Documentation
            </a>
            <a
              href={`mailto:${config.contactEmail}`}
              className="text-sm text-[#888] hover:text-[#c9922a] transition-colors"
            >
              Contact
            </a>
            <a
              href={config.bfcMainSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#888] hover:text-[#c9922a] transition-colors"
            >
              BFC Main Site
            </a>
            <a
              href="https://linktr.ee/bayareafoundersclub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[#888] hover:text-[#c9922a] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.89 1.052.89h6.15c.527 0 .973-.373 1.052-.89 0-.162 0-.323-.08-.486L13.2 9.932h2.588l-3.87-4.245 3.87-4.163H13.2l2.697-2.855H8.103L10.8 1.524H8.183L4.312 5.687l3.87 4.245H5.594l2.36 5.134zM12 22.276c-1.294 0-2.346-1.052-2.346-2.346S10.706 17.584 12 17.584s2.346 1.052 2.346 2.346S13.294 22.276 12 22.276z"/>
              </svg>
              Social
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#ddd8d0] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#aaa]">
            © {new Date().getFullYear()} BFC AI Gateway · A Bay Area Founders Club Product
          </p>
          <p className="text-xs text-[#bbb]">
            Built for founders who shape markets — not follow them.
          </p>
        </div>
      </div>
    </footer>
  );
}
