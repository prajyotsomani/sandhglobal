import React from "react";
import { SectionHeader } from "../components/common/SectionHeader";

const sections = [
  {
    title: "Information you provide",
    content: [
      "You may choose to share information such as your name, company, email address, phone number, business role, and inquiry when contacting S&H Global Limited by email, phone, or WhatsApp.",
      "The inquiry form on this website currently displays a confirmation in your browser but does not transmit or save the information you enter. Please contact us directly using the email or phone links if you need to send an inquiry."
    ]
  },
  {
    title: "How information is used",
    content: [
      "Information you send directly to us is used to respond to your inquiry, communicate about our services, and consider or manage a business relationship."
    ]
  },
  {
    title: "Third-party services",
    content: [
      "When you use an email, telephone, or WhatsApp link, your communication is handled by the service you choose. Those providers may process information according to their own privacy policies and terms. This website does not control their practices."
    ]
  },
  {
    title: "Cookies and technical information",
    content: [
      "The website application does not currently use analytics or advertising trackers or set analytics cookies. The hosting provider may process technical information, such as server request logs, to deliver and protect the website."
    ]
  },
  {
    title: "Retention and security",
    content: [
      "Information sent to us directly is retained for as long as needed to respond, manage the related business relationship, and meet applicable requirements. The website itself does not store the information entered into its inquiry form."
    ]
  },
  {
    title: "Your choices",
    content: [
      "You can choose what information to include when contacting us. You may contact us to ask about personal information you have shared with us or request its correction or deletion, subject to applicable requirements."
    ]
  },
  {
    title: "Changes to this policy",
    content: [
      "This policy may be updated as the website or our practices change. The date below indicates when this page was last updated."
    ]
  }
];

export function PrivacyPolicyPage() {
  return (
    <div className="page-enter bg-dark-1 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Legal"
          title="Privacy"
          goldTitle="Policy"
          desc="How S&H Global Limited handles information shared through this website and direct communications."
        />

        <p className="text-xs text-muted mb-10">Last updated: 9 October 2026</p>

        <div className="flex flex-col gap-9">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-base md:text-lg font-semibold text-off-white mb-3">{section.title}</h2>
              <div className="flex flex-col gap-3">
                {section.content.map((paragraph) => (
                  <p key={paragraph} className="text-sm text-off-white/70 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 border-t border-white/10 pt-8">
          <h2 className="text-base md:text-lg font-semibold text-off-white mb-3">Contact</h2>
          <p className="text-sm text-off-white/70 leading-relaxed">
            For privacy questions, contact S&H Global Limited at{" "}
            <a href="mailto:info@sandhgloballtd.co.nz" className="text-gold hover:underline">
              info@sandhgloballtd.co.nz
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}