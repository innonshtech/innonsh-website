import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, GraduationCap, BookOpen, Users, Baby, ChevronDown, Check } from 'lucide-react';

const SLIDES = [
  {
    icon: '👶📱',
    title: 'Smart Attendance Tracking',
    description: "Real-time attendance monitoring for students and staff. Parents get instant notifications about their child's presence."
  },
  {
    icon: '👨‍👩‍👧💬',
    title: 'Parent Communication Hub',
    description: 'Stay connected with parents through announcements, daily reports, and photo sharing of classroom activities.'
  },
  {
    icon: '📊🎨',
    title: 'Child Development Reports',
    description: 'Track developmental milestones, activities, and progress with comprehensive reporting for parents and teachers.'
  },
  {
    icon: '💳✨',
    title: 'Simple Fee Management',
    description: 'Automated fee collection, payment reminders, and receipt generation. Parents can pay online anytime.'
  }
];

const ROLES = [
  {
    id: 'admin',
    name: 'Administrator',
    desc: 'Full system management',
    colorClass: 'bg-orange-50 text-orange-600',
    icon: GraduationCap
  },
  {
    id: 'teacher',
    name: 'Teacher',
    desc: 'Manage classes & students',
    colorClass: 'bg-purple-50 text-purple-600',
    icon: BookOpen
  },
  {
    id: 'parent',
    name: 'Parent',
    desc: 'Track child progress',
    colorClass: 'bg-blue-50 text-blue-600',
    icon: Users
  },
  {
    id: 'student',
    name: 'Student',
    desc: 'View schedule & results',
    colorClass: 'bg-green-50 text-green-600',
    icon: Baby
  }
];

export default function TinyStepsLogin() {
  const [role, setRole] = useState('admin');
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Dynamically manage document title to match live site exactly
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Innonsh TinySteps | School Management System";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  // Auto-scroll carousel slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${role} with username/email: ${email}`);
  };

  const selectedRoleObj = ROLES.find(r => r.id === role) || ROLES[0];
  const SelectedIcon = selectedRoleObj.icon;

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row text-gray-800 font-sans antialiased">
      {/* LEFT PANEL: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-10 md:p-16 min-h-screen bg-white">
        {/* Back Link & Logo */}
        <div className="flex items-center justify-between">
          <Link to="/tinysteps" className="flex items-center gap-2.5 group">
            <img 
              src="https://tinysteps.innonsh.com/ICON.png" 
              alt="TinySteps Logo" 
              className="w-12 h-12 rounded-xl object-contain shadow-sm border border-gray-100 group-hover:scale-105 transition-transform"
              onError={(e) => {
                // Fallback image source if the main one fails
                e.target.src = '/tab_logo.png';
              }}
            />
            <div className="font-serif text-[1.45rem] font-semibold tracking-tight text-gray-800">
              Innonsh <span className="text-[#ff6b00]">TinySteps</span>
            </div>
          </Link>
        </div>

        {/* Form Body */}
        <div className="max-w-[420px] w-full mx-auto my-12">
          <div className="mb-8">
            <h1 className="text-[2rem] font-bold tracking-tight mb-2 text-gray-800">Welcome Back!</h1>
            <p className="text-sm text-gray-500">Use your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role Selector */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Your Role
              </label>
              <button
                type="button"
                onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                className="w-full h-12 bg-white border border-gray-300 rounded-xl px-4 flex items-center justify-between text-sm text-gray-800 hover:border-[#ff6b00]/40 focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/25 focus:border-[#ff6b00] transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${selectedRoleObj.colorClass}`}>
                    <SelectedIcon size={18} />
                  </div>
                  <span className="font-semibold text-gray-700">{selectedRoleObj.id}</span>
                </div>
                <ChevronDown size={16} className={`text-gray-400 transition-transform ${isRoleDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isRoleDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsRoleDropdownOpen(false)} />
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 py-1.5">
                    {ROLES.map((r) => {
                      const IconComponent = r.icon;
                      const isActive = role === r.id;
                      return (
                        <button
                          key={r.id}
                          type="button"
                          onClick={() => {
                            setRole(r.id);
                            setIsRoleDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                            isActive ? 'bg-[#ff6b00]/5' : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${r.colorClass}`}>
                            <IconComponent size={18} />
                          </div>
                          <div className="flex-1">
                            <div className={`text-sm font-semibold ${isActive ? 'text-[#ff6b00]' : 'text-gray-800'}`}>
                              {r.name}
                            </div>
                            <div className="text-xs text-gray-400">{r.desc}</div>
                          </div>
                          {isActive && (
                            <div className="w-2.5 h-2.5 bg-[#ff6b00] rounded-full ml-auto" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Username/Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username or email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <User size={18} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-12 pl-11 pr-4 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/25 focus:border-[#ff6b00] placeholder-gray-300 hover:border-[#ff6b00]/40 transition-all text-gray-800 font-medium"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full h-12 pl-11 pr-11 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6b00]/25 focus:border-[#ff6b00] placeholder-gray-300 hover:border-[#ff6b00]/40 transition-all text-gray-800 font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-[#ff6b00] border-gray-300 focus:ring-[#ff6b00] accent-[#ff6b00]"
                />
                <span className="text-gray-500 font-medium text-sm">Remember me</span>
              </label>
              <a href="/forgot-password" className="font-semibold text-sm text-[#ff6b00] hover:text-[#e66000] transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#ff6b00] to-[#ff8533] hover:from-[#ff8533] hover:to-[#e66000] text-white font-medium rounded-lg text-sm shadow-md shadow-[#ff6b00]/10 hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Log In
            </button>
          </form>
        </div>

        {/* Footer Support */}
        <div className="text-center text-sm text-gray-500 font-medium">
          Don't have an account?{' '}
          <Link to="/tinysteps#contact" className="text-[#ff6b00] font-bold hover:underline">
            Contact Company
          </Link>
        </div>
      </div>

      {/* RIGHT PANEL: Slide Showcase */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 relative overflow-hidden items-center justify-center p-12">
        {/* Soft Background Blobs */}
        <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-purple-200/50 filter blur-[60px] opacity-70 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-rose-200/50 filter blur-[60px] opacity-60" />
        <div className="absolute top-1/2 left-10 w-36 h-36 rounded-full bg-orange-100/50 filter blur-[50px] opacity-75" />

        {/* Visual Content Wrapper */}
        <div className="max-w-[440px] w-full text-center relative z-10 flex flex-col items-center">
          {/* Slides Content */}
          <div className="min-h-[360px] flex flex-col justify-center items-center relative w-full">
            {SLIDES.map((slide, idx) => {
              const isActive = activeSlide === idx;
              return (
                <div
                  key={idx}
                  className={`transition-all duration-700 ease-in-out flex flex-col items-center absolute ${
                    isActive
                      ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                      : 'opacity-0 translate-y-6 scale-95 pointer-events-none'
                  }`}
                  style={{ width: '100%' }}
                >
                  {/* Floating emojis matching layout */}
                  <div className="flex gap-4 mb-8 select-none animate-bounce" style={{ animationDuration: '3s' }}>
                    <span className="text-8xl filter drop-shadow-sm">{slide.icon.slice(0, 2)}</span>
                    <span className="text-8xl filter drop-shadow-sm">{slide.icon.slice(2)}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-800 leading-tight mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[380px]">
                    {slide.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex justify-center items-center gap-3 mt-8 select-none">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === idx ? 'w-8 bg-[#ff6b00]' : 'w-2.5 bg-orange-200 hover:bg-[#ff6b00]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
