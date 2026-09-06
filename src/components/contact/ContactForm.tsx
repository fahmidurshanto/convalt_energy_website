'use client';

import React, { useState } from 'react';
import { contactFormSchema, ContactFormData } from '@/lib/validation';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          formattedErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(formattedErrors);
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
        <p className="text-slate-300 text-sm">
          Thank you for reaching out to Convalt Energy. Our team will review your inquiry and respond promptly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-6">
      {/* Honeypot anti-spam input hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
          Full Name <span className="text-amber-400">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-500 transition-colors"
          placeholder="Jane Doe"
        />
        {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
          Email Address <span className="text-amber-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-500 transition-colors"
          placeholder="jane@company.com"
        />
        {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
          Company / Organization
        </label>
        <input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-500 transition-colors"
          placeholder="Clean Power Corp"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
          Message <span className="text-amber-400">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-500 transition-colors"
          placeholder="Tell us about your project or inquiry..."
        />
        {errors.message && <p className="text-rose-400 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base transition-colors shadow-lg shadow-amber-500/20"
      >
        Send Message
      </button>
    </form>
  );
}
