import AnimatedSection from "@/components/ui/AnimatedSection";

const providers = [
  { name: "OpenAI", description: "GPT-4o, o3, o4-mini" },
  { name: "Anthropic", description: "Claude Opus 4, Sonnet 4.5, Haiku 4" },
  { name: "Google", description: "Gemini 2.5 Pro, Flash 2.5" },
  { name: "Meta", description: "Llama 4 Scout, Llama 4 Maverick" },
  { name: "Mistral", description: "Mistral Large 3, Codestral 2" },
  { name: "xAI", description: "Grok 3, Grok 3 Mini" },
  { name: "DeepSeek", description: "DeepSeek R2, V3-0324" },
  { name: "Qwen", description: "QwQ-32B, Qwen2.5-Max" },
  { name: "ByteDance", description: "Seedance 2.0, Doubao-Pro" },
  { name: "Runway", description: "Gen-4 Turbo, Gen-4 Image" },
  { name: "ElevenLabs", description: "Turbo v2.5, Flash v2.5" },
  { name: "Stability AI", description: "SD 3.5 Ultra, SDXL Turbo" },
  { name: "Cohere", description: "Command R+, Embed v3" },
  { name: "Perplexity", description: "Sonar Pro, Sonar Reasoning" },
  { name: "Together AI", description: "70B+ open-source models" },
  { name: "Fireworks AI", description: "FireFunction v2, fast LLMs" },
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
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#f2ede7] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#f2ede7] to-transparent pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="marquee-track flex gap-4 whitespace-nowrap">
            {doubled.map((provider, i) => (
              <div
                key={`${provider.name}-${i}`}
                className="flex-shrink-0 border border-[#e8e2d9] bg-white rounded-xl px-5 py-4 min-w-[180px] shadow-sm"
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
          New models added daily &mdash; always up to date with the frontier.
        </p>
      </div>
    </section>
  );
}
