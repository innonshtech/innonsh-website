import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LeadCapture = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    service: '',
    companyName: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Innonsh SprintOS',
    'Innonsh ClinicPro',
    'Innonsh WorkGrid',
    'Innonsh TinySteps',
    'Salon Management ERP',
    'Innonsh LeadGen'
  ];

  useEffect(() => {
    const reveals = sectionRef.current.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
      let delay = 0;
      if (el.classList.contains('reveal-delay-1')) delay = 0.08;
      if (el.classList.contains('reveal-delay-2')) delay = 0.16;
      if (el.classList.contains('reveal-delay-3')) delay = 0.24;
      if (el.classList.contains('reveal-delay-4')) delay = 0.32;
      if (el.classList.contains('reveal-delay-5')) delay = 0.40;
      
      gsap.fromTo(el, 
        { opacity: 0, y: 28 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.9, 
          delay: delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectService = (service) => {
    setFormData(prev => ({ ...prev, service }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.service) {
      setErrorMessage('Please select a service.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to connect to the server.');
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative w-full py-24 bg-[#050507] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="orb" style={{top: 0, left: '10%', width: '540px', height: '540px', background: 'radial-gradient(circle, rgba(139,92,246,0.3), transparent 60%)'}}></div>
        <div className="orb" style={{bottom: 0, right: '10%', width: '540px', height: '540px', background: 'radial-gradient(circle, rgba(34,211,238,0.2), transparent 60%)'}}></div>
        <div className="absolute inset-0 bg-grid mask-radial opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Side - Text */}
          <div className="text-left">
            <div className="reveal chip mb-7"><span className="chip-dot"></span> Let's build</div>
            <h2 className="reveal reveal-delay-1 display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[0.98]">
              Build the <span className="serif-italic glow-accent pr-2">future</span><br/>with Innonsh.
            </h2>
            <p className="reveal reveal-delay-2 mt-7 text-[17px] lg:text-[19px] text-white/65 max-w-xl leading-relaxed">
              Tell us about your business. We'll come back within 24 hours with a clear path forward no decks, no fluff.
            </p>
            <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-3">
              <a href="mailto:info@innonsh.com" className="btn-primary magnetic !py-4 !px-7 text-base">
                Start a project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a href="#" className="btn-ghost !py-4 !px-7 text-base">Book a 30-min intro call</a>
            </div>

            <div className="reveal reveal-delay-4 mt-14 flex items-center gap-8 text-[13px] text-white/45">
              <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>Accepting new projects · 2026</div>
              <div className="hidden sm:block">·</div>
              <div className="hidden sm:block">Avg. response: 4 hours</div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="reveal reveal-delay-5 w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/50">
          {status === 'success' ? (
            <div className="text-center py-16 animate-fade-in">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold mb-4">Request Received</h3>
              <p className="text-white/60 text-lg">Our experts will review your requirements and reach out to you shortly.</p>
              <button 
                onClick={() => { setStatus('idle'); setFormData({service: '', companyName: '', name: '', email: '', phone: '', message: '', honeypot: ''}); }}
                className="mt-8 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Honeypot */}
              <input type="text" name="honeypot" className="hidden" value={formData.honeypot} onChange={handleChange} tabIndex="-1" autoComplete="off" />

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-4">What can we help you with? <span className="text-violet-400">*</span></label>
                <div className="flex flex-wrap gap-3">
                  {services.map(srv => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => handleSelectService(srv)}
                      className={`px-4 py-2 rounded-full text-sm transition-all duration-300 border ${formData.service === srv ? 'bg-violet-600 border-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]' : 'bg-transparent border-white/20 text-white/60 hover:border-white/40 hover:text-white'}`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Name */}
                <div className="relative group">
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="block w-full px-4 pt-6 pb-2 bg-black/20 border border-white/10 rounded-xl focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300 text-white placeholder-transparent peer outline-none"
                    placeholder="Company Name"
                  />
                  <label htmlFor="companyName" className="absolute left-4 top-2 text-xs text-white/50 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-violet-400">
                    Company Name <span className="text-violet-400">*</span>
                  </label>
                </div>

                {/* Full Name */}
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-4 pt-6 pb-2 bg-black/20 border border-white/10 rounded-xl focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300 text-white placeholder-transparent peer outline-none"
                    placeholder="Full Name"
                  />
                  <label htmlFor="name" className="absolute left-4 top-2 text-xs text-white/50 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-violet-400">
                    Full Name <span className="text-violet-400">*</span>
                  </label>
                </div>

                {/* Email */}
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 pt-6 pb-2 bg-black/20 border border-white/10 rounded-xl focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300 text-white placeholder-transparent peer outline-none"
                    placeholder="Email Address"
                  />
                  <label htmlFor="email" className="absolute left-4 top-2 text-xs text-white/50 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-violet-400">
                    Email Address <span className="text-violet-400">*</span>
                  </label>
                </div>

                {/* Phone */}
                <div className="relative group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full px-4 pt-6 pb-2 bg-black/20 border border-white/10 rounded-xl focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300 text-white placeholder-transparent peer outline-none"
                    placeholder="Phone Number"
                  />
                  <label htmlFor="phone" className="absolute left-4 top-2 text-xs text-white/50 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-violet-400">
                    Phone Number
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full px-4 pt-6 pb-2 bg-black/20 border border-white/10 rounded-xl focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-300 text-white placeholder-transparent peer outline-none resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
                <label htmlFor="message" className="absolute left-4 top-2 text-xs text-white/50 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-violet-400">
                  Project Details <span className="text-violet-400">*</span>
                </label>
              </div>

              {errorMessage && (
                <div className="text-rose-400 text-sm bg-rose-500/10 px-4 py-3 rounded-lg border border-rose-500/20">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full relative group overflow-hidden rounded-xl p-[1px]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-cyan-500 to-violet-600 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-[#050507] px-8 py-3 rounded-xl transition-all duration-300 group-hover:bg-opacity-0">
                  <span className="relative z-10 text-white font-semibold text-base flex items-center justify-center gap-2">
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : 'Submit Inquiry'}
                  </span>
                </div>
              </button>

            </form>
          )}
        </div>
      </div>
      </div>
    </section>
  );
};

export default LeadCapture;
