import React from "react";
import { SectionHeader } from "../components/common/SectionHeader";
import { ContactInfo, ContactForm } from "../components/contact/ContactForm";

export function ContactPage() {
  return (
    <div className="page-enter bg-dark-1 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              label="Get In Touch"
              title="Let's Build Your"
              goldTitle="Global Market Presence"
              desc="Whether you're a manufacturer ready to go global, or a business looking for trusted worldwide suppliers — contact us today and we'll support you every step of the way."
            />
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
