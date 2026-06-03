"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { config } from "@/lib/config";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/contact/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error();

      toast.success("Your message has been sent!");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/bay-area-founders-club",
      label: "LinkedIn",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      href: "https://x.com/BFC_Global",
      label: "X (Twitter)",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 4l16 16M4 20L20 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  const inputClass =
    "w-full bg-white border border-[#ede9e0] rounded-lg px-4 py-3 text-[#1a1a1a] text-sm placeholder:text-[#aaa] focus:outline-none focus:border-[#c9922a] transition-colors";

  return (
    <section id="contact" className="py-24 bg-[#f9f7f4]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center border border-[#c9922a]/40 rounded-full px-5 py-1.5 mb-7">
            <span className="text-xs font-semibold text-[#c9922a] tracking-widest uppercase">
              Contact
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a1a] leading-tight mb-4">
            Get in <span className="text-[#c9922a]">Touch</span>
          </h2>
          <p className="text-[#888] max-w-xl mx-auto text-base">
            Founders, investors, and partners — tell us how you&apos;d like to
            collaborate. We&apos;ll connect you with the right person.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: contact info */}
          <AnimatedSection direction="left" className="flex flex-col gap-8 lg:pt-4">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-[#c9922a] tracking-widest uppercase">
                Reach us directly
              </p>
              <a
                href={`mailto:${config.contactEmail}`}
                className="text-[#1a1a1a] text-lg font-medium hover:text-[#c9922a] transition-colors"
              >
                {config.contactEmail}
              </a>
              <p className="text-[#777] text-base">385 Homer Ave</p>
              <p className="text-[#777] text-base">Palo Alto, CA 94301</p>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ede9e0] bg-white text-[#c9922a] hover:border-[#c9922a] hover:bg-[#fdf5e6] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection direction="right">
            <div className="bg-white rounded-2xl border border-[#ede9e0] p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#c9922a] hover:bg-[#e8b84b] disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold rounded-lg px-7 py-3.5 text-sm tracking-wide shadow-lg hover:shadow-[0_0_24px_rgba(201,146,42,0.4)] transition-all duration-200"
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
