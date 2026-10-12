import React, { useState } from "react";
import { CONTACT_ITEMS, USER_ROLES } from "../../data/contactData";

export function ContactInfo() {
  const getIcon = (type) => {
    switch (type) {
      case "chat":
        return <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />;
      case "phone":
        return <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16z" />;
      case "email":
        return (
          <>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </>
        );
      case "web":
        return (
          <>
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </>
        );
      case "location":
      default:
        return (
          <>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {CONTACT_ITEMS.map((item) => (
        <div key={item.label} className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {getIcon(item.type)}
            </svg>
          </div>
          <div>
            <strong className="block text-xs uppercase tracking-wider text-gold font-bold">{item.label}</strong>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-off-white hover:text-gold transition-colors">
                {item.val}
              </a>
            ) : (
              <span className="text-sm text-off-white">{item.val}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", role: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("The inquiry could not be sent.");
      }

      setStatus({ type: "success", message: "Your message has been sent successfully." });
      setForm({ name: "", company: "", email: "", phone: "", role: "", message: "" });
    } catch (error) {
      console.error("Inquiry submission failed:", error);
      setStatus({
        type: "error",
        message: "Something went wrong while sending the message. Please try again or contact us directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-dark-2 border border-gold/20 rounded-2xl p-6 md:p-8 shadow-2xl">
      <h3 className="text-xl font-bold text-off-white mb-6">Send Us a Message</h3>

      {status.type === "success" ? (
        <div className="text-center py-12 px-4 border border-gold bg-gold/5 rounded-xl">
          <div className="text-4xl text-gold mb-3">✓</div>
          <h3 className="text-lg font-bold text-off-white mb-1">Message Sent!</h3>
          <p className="text-xs text-muted">We will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-off-white/80">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-dark-1 border border-gold/25 rounded-md px-3.5 py-2.5 text-sm text-off-white outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-off-white/80">Company</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company name"
                className="bg-dark-1 border border-gold/25 rounded-md px-3.5 py-2.5 text-sm text-off-white outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-off-white/80">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="bg-dark-1 border border-gold/25 rounded-md px-3.5 py-2.5 text-sm text-off-white outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-off-white/80">Phone / WhatsApp</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 or +64..."
              className="bg-dark-1 border border-gold/25 rounded-md px-3.5 py-2.5 text-sm text-off-white outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-off-white/80">I Am A</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="bg-dark-1 border border-gold/25 rounded-md px-3.5 py-2.5 text-sm text-off-white outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
            >
              <option value="">Select your role</option>
              {USER_ROLES.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-off-white/80">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your products, requirements or inquiry..."
              rows={4}
              required
              className="bg-dark-1 border border-gold/25 rounded-md px-3.5 py-2.5 text-sm text-off-white outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-y"
            />
          </div>

          {status.type === "error" && (
            <p className="text-xs text-red-400">{status.message}</p>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="mt-2 bg-gold-gradient text-black font-bold text-xs uppercase tracking-widest py-3 px-6 rounded-md hover:brightness-110 hover:-translate-y-0.5 transition-all shadow-md shadow-gold/20 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Send Inquiry →"}
          </button>
        </form>
      )}
    </div>
  );
}
