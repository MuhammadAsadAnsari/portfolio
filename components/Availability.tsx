"use client";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

export default function Availability() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    body: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
      return;
    }

    // Create mailto link
    const mailtoLink = `mailto:muhammadasaad561@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${formData.subject}`)}&body=${encodeURIComponent(`Hello Asad,

I'm reaching out through your portfolio contact form.

From: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.body}

---
Sent from your portfolio website`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setSubmitStatus('success');
    setFormData({ email: '', subject: '', body: '' });
    
    setTimeout(() => {
      setSubmitStatus('');
    }, 5000);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 scroll-mt-20">
      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          Get in <span className="text-purple-400">Touch</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 mt-6 sm:mt-8">
        {/* Left Side - Availability Status */}
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 backdrop-blur-sm border border-slate-500/30 shadow-2xl shadow-slate-500/20">
          <div className="text-center space-y-5 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">✅ Available for Work</h3>
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium text-sm sm:text-base">Open to Opportunities</span>
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">💼 Freelance Projects</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Available for exciting freelance projects in web development, mobile apps, and full-stack solutions. Ready to bring your ideas to life with modern technologies.
                </p>
              </div>
              
              <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">🌍 Remote Opportunities</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Seeking full-time remote positions with companies that value innovation, growth, and meaningful impact through technology.
                </p>
              </div>

              <div className="bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20">
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">🤝 Startup Collaborations</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Open to collaborating with startups and early-stage companies looking to build scalable, user-focused digital products.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 backdrop-blur-sm border border-indigo-500/30 shadow-2xl shadow-indigo-500/20">
          <div className="space-y-5 sm:space-y-6">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">📬 Send Me a Message</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                Ready to discuss your project? Fill out the form below and I'll get back to you!
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-white mb-1.5 sm:mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-md sm:rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-white mb-1.5 sm:mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-md sm:rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Body */}
              <div>
                <label htmlFor="body" className="block text-xs sm:text-sm font-medium text-white mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="body"
                  name="body"
                  value={formData.body}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-md sm:rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project, idea, or just say hello!"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-md sm:rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-105"
              >
                📧 Open Email Client
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-center text-green-400 text-xs sm:text-sm bg-green-400/10 rounded-md sm:rounded-lg p-2.5 sm:p-3 border border-green-400/20">
                  ✓ Email client opened! Please click "Send" in your email app to deliver the message.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-center text-red-400 text-xs sm:text-sm bg-red-400/10 rounded-md sm:rounded-lg p-2.5 sm:p-3 border border-red-400/20">
                  ✗ Please check your email format and try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
