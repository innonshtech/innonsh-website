import { useEffect, useRef, useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Upload, X, CheckCircle2, AlertCircle, Building } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { client } from '../sanity/client';

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
  const containerRef = useRef(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applyModalJob, setApplyModalJob] = useState(null);
  
  // Application Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    domainsInterested: '',
    coverNote: '',
    honeypot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }

    // Fetch jobs from Sanity
    if (import.meta.env.VITE_SANITY_PROJECT_ID) {
      setLoading(true);
      client.fetch(`*[_type == "jobPosition" && isOpen == true] | order(title asc)`)
        .then((data) => {
          if (data) {
            setJobs(data);
          }
        })
        .catch((err) => {
          console.warn("Failed to fetch jobs from Sanity:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Simple GSAP animations for entries - triggers whenever jobs change
    const reveals = containerRef.current.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
      gsap.killTweensOf(el);
      gsap.set(el, { opacity: 1, y: 0 });
    });
  }, [jobs]);

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Form Submit Handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitSuccess(false);

    // Form validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError('Please enter a valid email address.');
      return;
    }

    const cleanedPhone = formData.phone.trim();
    if (!/^\d{10}$/.test(cleanedPhone)) {
      setSubmitError('Phone number must be exactly 10 digits.');
      return;
    }

    if (!formData.experience.trim()) {
      setSubmitError('Experience details are required.');
      return;
    }

    if (!formData.domainsInterested) {
      setSubmitError('Please select a domain you are interested in.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      jobId: applyModalJob._id,
      jobTitle: applyModalJob.title,
      name: formData.name,
      email: formData.email,
      phone: cleanedPhone,
      experience: formData.experience,
      domainsInterested: formData.domainsInterested,
      coverNote: formData.coverNote,
      honeypot: formData.honeypot
    };

    let serverUrl = import.meta.env.VITE_API_URL || '';
    if (serverUrl.includes(':5001')) {
      serverUrl = serverUrl.replace(':5001', ':5000');
    }

    try {
      const response = await fetch(`${serverUrl}/api/careers/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong submitting your application.');
      }

      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        domainsInterested: '',
        coverNote: '',
        honeypot: ''
      });
    } catch (err) {
      console.error("Submission Error:", err);
      setSubmitError(err.message || 'Server error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openApplyModal = (job) => {
    setApplyModalJob(job);
    // Lock background scroll
    document.body.classList.add('modal-open');
    if (window.lenis) window.lenis.stop();
  };

  const closeApplyModal = () => {
    setApplyModalJob(null);
    setSubmitSuccess(false);
    setSubmitError('');
    // Unlock scroll
    document.body.classList.remove('modal-open');
    if (window.lenis) window.lenis.start();
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#050507] pt-28 lg:pt-36 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-grid-fine mask-radial opacity-40"></div>
      <div className="orb" style={{ top: '-10%', left: '25%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(167,139,250,0.18), transparent 70%)' }}></div>
      <div className="orb" style={{ bottom: '15%', right: '-15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(34,211,238,0.12), transparent 70%)' }}></div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8 pb-24">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="reveal chip mb-6 mx-auto"><span className="chip-dot"></span> Careers</div>
          <h1 className="reveal display text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-[-0.035em] leading-[1.02] max-w-3xl mx-auto">
            Build the systems that <span className="serif-italic text-white/85">scale</span> tomorrow.
          </h1>
          <p className="reveal text-[17px] text-white/55 mt-6 max-w-xl mx-auto leading-relaxed">
            Join Innonsh. We create enterprise-grade ERPs, design state-of-the-art Web platforms, and ship production-ready AI solutions.
          </p>
        </div>

        {/* Roles List */}
        <div className="space-y-6">
          <h2 className="reveal text-[12px] font-semibold uppercase tracking-[0.25em] text-white/40 mb-8 pb-4 border-b border-white/[0.06]">
            Open Positions ({jobs.length})
          </h2>

          {loading ? (
            <div className="reveal flex flex-col justify-center items-center py-20 text-center">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full border border-white/5"></div>
                <div className="absolute inset-0 rounded-full border-t border-violet-400 animate-spin"></div>
              </div>
              <p className="text-sm text-white/40 mt-4 tracking-wider">Loading positions...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="reveal glass rounded-2xl p-12 text-center text-white/50 border border-white/[0.06]">
              <Briefcase className="mx-auto mb-4 text-white/30" size={36} />
              <p className="text-lg">There are no hirings for now.</p>
              <p className="text-sm mt-1 text-white/40">Check back later or send an open application to info@innonsh.com</p>
            </div>
          ) : (
            jobs.map((job) => {
              const isExpanded = selectedJob?._id === job._id;
              
              return (
                <div 
                  key={job._id}
                  className="reveal gradient-border rounded-2xl p-6 lg:p-8 cursor-default group transition-all"
                  style={{ '--glow': 'rgba(167,139,250,0.15)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2.5">
                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-white/60 font-medium">
                          {job.department}
                        </span>
                      </div>
                      <h3 className="display text-2xl font-semibold text-white group-hover:text-violet-300 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-3 text-[13.5px] text-white/50">
                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-white/40" /> {job.location}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <span className="flex items-center gap-1.5"><Clock size={14} className="text-white/40" /> {job.type}</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setSelectedJob(isExpanded ? null : job)}
                      className="btn-ghost shrink-0 !py-2.5 !px-5 text-[13px] flex items-center gap-1.5 self-start sm:self-auto"
                    >
                      {isExpanded ? 'Hide Details' : 'View Details'}
                      <ArrowRight size={14} className={`transition-transform ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-0.5'}`} />
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-8 pt-8 border-t border-white/[0.06] animate-fadeIn">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-[11px] uppercase tracking-wider text-white/40 mb-3">Role Overview</h4>
                          <p className="text-[15px] text-white/70 leading-relaxed max-w-3xl">
                            {job.description}
                          </p>
                        </div>

                        {job.requirements && job.requirements.length > 0 && (
                          <div>
                            <h4 className="text-[11px] uppercase tracking-wider text-white/40 mb-3">Requirements</h4>
                            <ul className="list-inside space-y-2 text-[14.5px] text-white/85">
                              {job.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0"></span>
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {job.responsibilities && job.responsibilities.length > 0 && (
                          <div>
                            <h4 className="text-[11px] uppercase tracking-wider text-white/40 mb-3">Responsibilities</h4>
                            <ul className="list-inside space-y-2 text-[14.5px] text-white/85">
                              {job.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="pt-4 flex">
                          <button 
                            onClick={() => openApplyModal(job)}
                            className="btn-primary !py-3.5 !px-7 text-[13.5px] font-semibold"
                          >
                            Apply For This Role
                            <ArrowRight size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Application Form Modal */}
      {applyModalJob && (
        <div className="modal-backdrop" onClick={(e) => e.target.classList.contains('modal-backdrop') && closeApplyModal()} style={{ opacity: 1 }}>
          <div className="modal-panel-card max-w-xl w-full" style={{ opacity: 1, transform: 'none', maxHeight: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column' }}>
            <button onClick={closeApplyModal} className="modal-close" aria-label="Close Modal">&times;</button>
            
            <div className="modal-content" style={{ overflowY: 'auto', flex: 1, paddingBottom: '40px' }}>
              {submitSuccess ? (
                <div className="text-center py-10 animate-scaleUp">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/20 grid place-items-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="display text-2xl font-semibold text-white mb-2">Application Submitted!</h3>
                  <p className="text-[14.5px] text-white/55 max-w-xs mx-auto leading-relaxed">
                    Thank you for applying. We have forwarded your resume to our official hiring team and will get back to you shortly.
                  </p>
                  <button onClick={closeApplyModal} className="btn-ghost !py-3 !px-6 text-[13.5px] mt-8">
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="shrink-0 w-11 h-11 rounded-xl grid place-items-center bg-violet-500/10 border border-violet-400/20">
                      <Building size={20} className="text-violet-300" />
                    </div>
                    <div>
                      <h3 className="display text-xl font-semibold text-white">Apply for Position</h3>
                      <p className="text-sm text-white/55 mt-0.5">{applyModalJob.title} · {applyModalJob.department}</p>
                    </div>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4 pt-4 border-t border-white/[0.06]">
                    {/* Zod validations errors */}
                    {submitError && (
                      <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-[13.5px] flex items-center gap-2">
                        <AlertCircle size={16} className="shrink-0" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-white/45 mb-1.5 block">Full Name *</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Jane Doe" 
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-400/50" 
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-white/45 mb-1.5 block">Email Address *</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="jane@example.com" 
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-400/50" 
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-white/45 mb-1.5 block">Phone Number (10 Digits) *</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 9876543210" 
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-400/50" 
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-white/45 mb-1.5 block">Experience *</label>
                        <input 
                          type="text" 
                          name="experience"
                          required
                          value={formData.experience}
                          onChange={handleInputChange}
                          placeholder="e.g. 3.5 Years" 
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-400/50" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-white/45 mb-1.5 block">Domains Interested *</label>
                      <select
                        name="domainsInterested"
                        required
                        value={formData.domainsInterested}
                        onChange={handleInputChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-400/50 appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 16px center',
                          backgroundSize: '16px'
                        }}
                      >
                        <option value="" disabled className="bg-[#151518]">Select another interested domain...</option>
                        <option value="Web Development" className="bg-[#151518]">Web Development</option>
                        <option value="Mobile App Development" className="bg-[#151518]">Mobile App Development</option>
                        <option value="UI/UX Design" className="bg-[#151518]">UI/UX Design</option>
                        <option value="QA & Testing" className="bg-[#151518]">QA & Testing</option>
                        <option value="DevOps & Cloud" className="bg-[#151518]">DevOps & Cloud</option>
                        <option value="Project Management" className="bg-[#151518]">Project Management</option>
                        <option value="None" className="bg-[#151518]">None (Only this role)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-white/45 mb-1.5 block">Cover Note / Intro</label>
                      <textarea 
                        name="coverNote"
                        value={formData.coverNote}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Briefly state why you're a good fit..." 
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-400/50 resize-none" 
                      />
                    </div>

                    {/* Honeypot spam protection */}
                    <input 
                      type="text" 
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      className="hidden"
                    />

                    {/* Bold & prominent email instruction block */}
                    <div className="p-5 rounded-xl border border-dashed border-violet-500/30 bg-violet-500/5 text-center my-6">
                      <p className="text-white text-base font-bold tracking-wide">
                        Please send your mail/resume to <a href="mailto:info@innonsh.com" className="text-violet-300 hover:text-violet-100 underline transition-colors">info@innonsh.com</a>
                      </p>
                      <p className="text-[11.5px] text-white/40 mt-1.5">
                        Please submit this form to apply, and attach your resume in the email.
                      </p>
                    </div>

                    <div className="pt-4 flex gap-3">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-primary !py-3 !px-6 text-[13.5px] flex-1 justify-center disabled:opacity-50"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </button>
                      <button 
                        type="button" 
                        onClick={closeApplyModal}
                        className="btn-ghost !py-3 !px-5 text-[13.5px]"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
