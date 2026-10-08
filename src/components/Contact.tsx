import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Clock, MapPin, Building2 } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface ContactProps {
  profile: ProfileData;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Software Engineering Collaboration',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const templates = [
    { label: 'Accenture / Tech Chat', subject: 'Connecting & Tech Discussion', text: 'Hi Sakshi, saw your profile as a Software Engineer at Accenture and would love to connect...' },
    { label: 'Full-Stack Project', subject: 'Technical Project Collaboration', text: 'Hi Sakshi, I was impressed by your work on PulseFlow & React projects and wanted to reach out regarding a collaboration...' },
    { label: 'Mentorship & Meetup', subject: 'Engineering Networking', text: 'Hi Sakshi, congratulations on your graduation and joining Accenture! Would love to chat about software engineering...' }
  ];

  const handleApplyTemplate = (tmpl: typeof templates[0]) => {
    setFormState({
      ...formState,
      subject: tmpl.subject,
      message: tmpl.text
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Get In Touch
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white max-w-xl">
            Let’s connect, discuss technology, or collaborate on software.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Links, Availability, Status (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Whether you want to discuss full-stack development, modern web technologies, or share ideas, I am always glad to connect with fellow engineers and industry professionals.
            </p>

            {/* Direct Email Card with 1-click Copy */}
            <div className="p-5 rounded-2xl bg-slate-50/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Primary Inbox
              </div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline font-semibold truncate transition-colors"
                >
                  {profile.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-700 transition-all shrink-0 active:scale-95 shadow-2xs"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-[11px] text-slate-500">
                Usually responsive within 24 hours.
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="p-5 rounded-2xl bg-slate-50/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Professional Presence
              </div>
              
              <div className="space-y-2">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all group shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        GitHub
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Repositories, personal projects & code commits
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">github.com/sakshichoudhary</span>
                </a>

                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all group shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 transition-colors" />
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        LinkedIn
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Professional network, Accenture profile & connections
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">linkedin.com/in/sakshichoudhary</span>
                </a>
              </div>
            </div>

            {/* Current Operational Status */}
            <div className="p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/70 space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300 font-medium">
                <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Software Engineer at Accenture</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>India · IST (UTC+5:30)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-50/80 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                    Message Sent
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, {formState.name}! I have received your message regarding &ldquo;{formState.subject}&rdquo; and will get back to you shortly.
                  </p>
                  <div className="pt-4 flex items-center justify-center gap-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: '', email: '', subject: 'Software Engineering Collaboration', message: '' });
                      }}
                      className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors shadow-2xs"
                    >
                      Send Another Note
                    </button>
                    <a
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(formState.message)}`}
                      className="px-4 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Open in Email App
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Send a Direct Message
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Templates:
                    </span>
                  </div>

                  {/* Template quick-fills */}
                  <div className="flex flex-wrap gap-2">
                    {templates.map((tmpl) => (
                      <button
                        type="button"
                        key={tmpl.label}
                        onClick={() => handleApplyTemplate(tmpl)}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-2xs"
                      >
                        {tmpl.label}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        Your Name <span className="text-blue-600 dark:text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors shadow-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        Email Address <span className="text-blue-600 dark:text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors shadow-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Message <span className="text-blue-600 dark:text-blue-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share your message or inquiry here..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors resize-none shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-600/15 active:scale-[0.99]"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="text-center">
                    <a
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(formState.subject || 'Engineering Note')}&body=${encodeURIComponent(formState.message || '')}`}
                      className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors underline"
                    >
                      Or open in your default mail application
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
