"use client";

import { useState } from "react";
import NodeDot from "./NodeDot";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    tier: "Title Sponsor",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert("Please fill in required fields.");
      return;
    }
    
    setStatus("submitting");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Something went wrong. Please try again.");
        setStatus("idle");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please check your connection and try again.");
      setStatus("idle");
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      tier: "Title Sponsor",
      message: "",
    });
    setStatus("idle");
  };

  return (
    <section id="contact" className="paper-section py-24 scroll-mt-16 relative">
      <div className="max-w-[1440px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-16 relative">
        <NodeDot className="-ml-[52px] mt-2" />
        
        {/* Form */}
        <div className="md:col-span-7">
          <h2 className="font-headline-lg text-headline-lg text-root-ink mb-12">
            Partnership Inquiry
          </h2>
          
          {status === "success" ? (
            <div className="border-2 border-signal-green p-8 text-center bg-white space-y-6 animate-fade-in">
              <span className="material-symbols-outlined text-6xl text-signal-green animate-bounce">
                check_circle
              </span>
              <h3 className="font-headline-md text-root-ink font-bold">Proposal Submitted!</h3>
              <p className="font-body-md text-root-ink/80 max-w-md mx-auto">
                Thank you for reaching out. Our sponsorship team will review your requirements and get back to you with a custom proposal in 24 hours.
              </p>
              <button
                onClick={resetForm}
                className="bg-root-ink text-white px-8 py-3 font-data-label text-data-label font-bold hover:bg-signal-green hover:text-root-ink transition-colors uppercase tracking-wider"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-data-label text-data-label text-root-ink/60 uppercase block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-transparent border border-mist focus:border-signal-green p-4 rounded-none outline-none text-root-ink font-body-md"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-data-label text-data-label text-root-ink/60 uppercase block">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-transparent border border-mist focus:border-signal-green p-4 rounded-none outline-none text-root-ink font-body-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-data-label text-data-label text-root-ink/60 uppercase block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border border-mist focus:border-signal-green p-4 rounded-none outline-none text-root-ink font-body-md"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-data-label text-data-label text-root-ink/60 uppercase block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border border-mist focus:border-signal-green p-4 rounded-none outline-none text-root-ink font-body-md"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-data-label text-data-label text-root-ink/60 uppercase block">
                  Sponsorship Tier Preference
                </label>
                <div className="relative">
                  <select
                    value={formData.tier}
                    onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                    className="w-full bg-transparent border border-mist focus:border-signal-green p-4 rounded-none outline-none text-root-ink font-body-md appearance-none cursor-pointer"
                  >
                    <option>Title Sponsor</option>
                    <option>Platinum</option>
                    <option>Gold</option>
                    <option>Silver / Bronze</option>
                    <option>Custom Partner</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-root-ink/60">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-data-label text-data-label text-root-ink/60 uppercase block">
                  Message / Requirements
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border border-mist focus:border-signal-green p-4 rounded-none outline-none text-root-ink font-body-md"
                  rows={4}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className={`bg-root-ink text-white px-12 py-4 font-data-label text-data-label font-bold hover:bg-root-ink/90 transition-all uppercase tracking-widest ${
                  status === "submitting" ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {status === "submitting" ? "Submitting..." : "Submit Proposal"}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="md:col-span-5 bg-root-ink p-12 text-white flex flex-col justify-between">
          <div>
            <h3 className="font-headline-md text-headline-md mb-8 font-bold">
              Direct Outreach
            </h3>
            
            <div className="space-y-12">
              <div className="group">
                <p className="font-data-label text-data-label text-signal-green uppercase mb-2 tracking-wider">Convener</p>
                <p className="font-headline-md text-headline-md font-semibold">Prof. Akash J. Gupta</p>
                <p className="font-body-md text-on-surface-variant mt-2 hover:text-signal-green transition-colors duration-200">
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </p>
              </div>
              
              <div className="group">
                <p className="font-data-label text-data-label text-signal-green uppercase mb-2 tracking-wider">Student Lead</p>
                <p className="font-headline-md text-headline-md font-semibold">Sponsorship Head</p>
                <p className="font-body-md text-on-surface-variant mt-2 hover:text-signal-green transition-colors duration-200">
                  <a href="mailto:sponsor@itechroots.org">sponsor@itechroots.org</a>
                </p>
              </div>
              
              <div>
                <p className="font-data-label text-data-label text-signal-green uppercase mb-2 tracking-wider">Address</p>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  Dept. of IT, YCCE Campus,<br />
                  Wanadongri, Hingna Road,<br />
                  Nagpur - 441110
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 flex gap-6">
            <a
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-signal-green hover:text-root-ink hover:border-signal-green transition-all duration-300"
              href="#"
              aria-label="Website"
            >
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            
            <a
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-signal-green hover:text-root-ink hover:border-signal-green transition-all duration-300"
              href="mailto:sponsor@itechroots.org"
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-lg">alternate_email</span>
            </a>
            
            <a
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-signal-green hover:text-root-ink hover:border-signal-green transition-all duration-300"
              href="#"
              aria-label="Share"
            >
              <span className="material-symbols-outlined text-lg">share</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
