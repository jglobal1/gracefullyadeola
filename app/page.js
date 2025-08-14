"use client";

import { useState, useEffect } from 'react';
import { Heart, MapPin, Clock, Gift, Calendar, Users, MessageCircle, Phone, Map } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Pre-defined animation values to avoid hydration mismatch
  const heartAnimations = [
    { left: "4.77%", delay: "3.46s", duration: "8.67s" },
    { left: "67.77%", delay: "4.67s", duration: "8.82s" },
    { left: "5.40%", delay: "3.74s", duration: "9.35s" },
    { left: "68.91%", delay: "1.11s", duration: "11.74s" },
    { left: "39.79%", delay: "1.40s", duration: "10.26s" },
    { left: "87.50%", delay: "4.14s", duration: "8.63s" },
    { left: "53.49%", delay: "3.81s", duration: "9.81s" },
    { left: "14.22%", delay: "0.01s", duration: "9.10s" },
    { left: "22.27%", delay: "0.02s", duration: "11.92s" },
    { left: "42.32%", delay: "1.29s", duration: "11.26s" },
    { left: "49.12%", delay: "0.63s", duration: "11.53s" },
    { left: "32.44%", delay: "2.58s", duration: "10.28s" }
  ];

  const sparkleAnimations = [
    { left: "46.31%", top: "85.50%", delay: "1.69s", duration: "3.92s" },
    { left: "40.31%", top: "77.41%", delay: "0.38s", duration: "2.37s" },
    { left: "44.23%", top: "3.25%", delay: "0.84s", duration: "2.67s" },
    { left: "11.38%", top: "77.87%", delay: "1.10s", duration: "2.11s" },
    { left: "21.50%", top: "96.98%", delay: "0.00s", duration: "3.49s" },
    { left: "20.09%", top: "81.92%", delay: "0.62s", duration: "2.33s" },
    { left: "60.01%", top: "36.06%", delay: "1.87s", duration: "2.50s" },
    { left: "24.94%", top: "1.22%", delay: "0.86s", duration: "3.03s" },
    { left: "96.83%", top: "52.91%", delay: "1.94s", duration: "3.72s" },
    { left: "1.88%", top: "80.85%", delay: "2.35s", duration: "3.38s" },
    { left: "27.27%", top: "91.43%", delay: "2.75s", duration: "3.09s" },
    { left: "87.24%", top: "39.36%", delay: "0.11s", duration: "2.92s" },
    { left: "82.18%", top: "31.22%", delay: "0.96s", duration: "2.00s" },
    { left: "14.73%", top: "86.69%", delay: "2.73s", duration: "3.87s" },
    { left: "90.17%", top: "57.37%", delay: "2.63s", duration: "2.98s" },
    { left: "15.81%", top: "95.18%", delay: "1.01s", duration: "3.99s" },
    { left: "65.21%", top: "97.98%", delay: "0.10s", duration: "3.64s" },
    { left: "58.02%", top: "92.83%", delay: "0.02s", duration: "2.81s" },
    { left: "82.77%", top: "23.76%", delay: "1.88s", duration: "2.10s" },
    { left: "28.41%", top: "38.52%", delay: "2.53s", duration: "3.45s" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check which sections are visible
      const sections = document.querySelectorAll('section');
      const newVisibleSections = new Set();
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible) {
          newVisibleSections.add(index);
        }
      });
      
      setVisibleSections(newVisibleSections);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const weddingDate = new Date('2025-11-22T00:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const whatsappNumber = "+2349057123589";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;

  const sendPrayerMessage = () => {
    const message = "Hello! I would like to send my prayers and wishes for Adejumoke & Olaoluwa's wedding. 🙏💕";
    window.open(`${whatsappLink}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const sendGiftConfirmation = () => {
    const message = "Hello! I have sent a cash gift for Adejumoke & Olaoluwa's wedding and would like to confirm. 💝";
    window.open(`${whatsappLink}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Wedding Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/wedding-video.gif" 
            alt="Wedding Celebration" 
            className="w-full h-full object-cover object-center"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40"></div>
        
        {/* Animated floating hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {heartAnimations.map((animation, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: animation.left,
                animationDelay: animation.delay,
                animationDuration: animation.duration,
                top: '100%'
              }}
            >
              <Heart className="w-4 h-4 md:w-6 md:h-6 text-pink-300/60 fill-current" />
            </div>
          ))}
        </div>
        
        {/* Sparkle effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {sparkleAnimations.map((animation, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-sparkle"
              style={{
                left: animation.left,
                top: animation.top,
                animationDelay: animation.delay,
                animationDuration: animation.duration
              }}
            />
          ))}
        </div>
        
        <div className={`relative z-10 text-center px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Animated tag */}
          <div className="mb-6 animate-fadeInDown" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex items-center gap-2 text-white text-sm font-medium mb-4 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/30 hover:bg-white/30 transition-all duration-300">
              <Heart className="w-4 h-4 fill-current animate-pulse" />
              #GracefullyAdeola'25
            </div>
          </div>
          
          {/* Main title with enhanced animations */}
          <div className="animate-fadeInUp" style={{ animationDelay: '1s' }}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
              <span className="block text-pink-200 animate-slideInLeft" style={{ animationDelay: '1.2s' }}>Adejumoke</span>
              <div className="flex justify-center items-center my-4 md:my-6 lg:my-8 animate-bounce" style={{ animationDelay: '1.5s' }}>
                <img src="/ring.png" alt="Wedding Rings" className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 object-contain drop-shadow-lg" />
              </div>
              <span className="block text-sky-200 animate-slideInRight" style={{ animationDelay: '1.8s' }}>&</span>
              <span className="block text-sky-200 animate-slideInRight" style={{ animationDelay: '2.1s' }}>Olaoluwa</span>
            </h1>
          </div>
          
          {/* Date with animation */}
          <div className="flex items-center justify-center gap-4 text-white mb-8 animate-fadeInUp" style={{ animationDelay: '2.4s' }}>
            <Calendar className="w-5 h-5 text-pink-300 animate-pulse" />
            <span className="text-lg sm:text-xl font-medium drop-shadow-lg">November 22, 2025</span>
          </div>
          
          {/* Enhanced countdown with glassmorphism */}
          {countdown.days > 0 || countdown.hours > 0 || countdown.minutes > 0 || countdown.seconds > 0 ? (
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto shadow-2xl border border-white/20 animate-fadeInUp" style={{ animationDelay: '2.7s' }}>
              <div className="text-white mb-4 text-lg font-medium">Countdown to our special day</div>
              <div className="grid grid-cols-4 gap-3 sm:gap-4">
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-pink-200 transition-colors duration-300">{countdown.days}</div>
                  <div className="text-xs sm:text-sm text-pink-200">Days</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-sky-200 transition-colors duration-300">{countdown.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs sm:text-sm text-sky-200">Hours</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-pink-200 transition-colors duration-300">{countdown.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs sm:text-sm text-pink-200">Minutes</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-sky-200 transition-colors duration-300">{countdown.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs sm:text-sm text-sky-200">Seconds</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 max-w-md mx-auto shadow-2xl border border-white/20 animate-fadeInUp" style={{ animationDelay: '2.7s' }}>
              <div className="text-4xl sm:text-5xl font-bold text-white animate-bounce">🎉</div>
              <div className="text-white font-medium">Today is the day!</div>
            </div>
          )}
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50">
        {/* Animated floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-pink-300/30 to-sky-300/30 rounded-full animate-float"
              style={{
                left: `${(i * 5) % 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${15 + i * 3}s`,
                top: '100%'
              }}
            />
          ))}
        </div>

        {/* Corner floral decorations with enhanced animations */}
        <div className="absolute top-0 left-0 w-40 h-40 md:w-56 md:h-56 opacity-90 animate-fadeInDown" style={{ animationDelay: '0.5s' }}>
          <img src="/flower-love-story.png" alt="" className="w-full h-full object-contain animate-float" style={{ animationDuration: '20s' }} />
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 md:w-56 md:h-56 opacity-90 transform scale-x-[-1] animate-fadeInDown" style={{ animationDelay: '1s' }}>
          <img src="/flower-love-story.png" alt="" className="w-full h-full object-contain animate-float" style={{ animationDuration: '25s' }} />
        </div>
        <div className="absolute bottom-0 left-0 w-40 h-40 md:w-56 md:h-56 opacity-90 transform scale-y-[-1] animate-fadeInUp" style={{ animationDelay: '1.5s' }}>
          <img src="/flower-love-story.png" alt="" className="w-full h-full object-contain animate-float" style={{ animationDuration: '22s' }} />
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 md:w-56 md:h-56 opacity-90 transform scale-x-[-1] scale-y-[-1] animate-fadeInUp" style={{ animationDelay: '2s' }}>
          <img src="/flower-love-story.png" alt="" className="w-full h-full object-contain animate-float" style={{ animationDuration: '18s' }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/50 relative hover:scale-105 transition-all duration-1000 ${visibleSections.has(1) ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ animationDelay: '0.8s' }}>
            {/* Translucent rectangle background */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-md rounded-3xl"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-3xl animate-shimmer"></div>
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 font-light animate-slideInLeft" style={{ animationDelay: '1.2s' }}>
              To one of the most memorable days of our lives, we are excited to celebrate our love with our family and friends. Your presence will be a great blessing as we tie the knot on this joyful day.
            </p>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light animate-slideInRight" style={{ animationDelay: '1.5s' }}>
              We look forward to sharing this special day with you.
            </p>
            <div className="mt-8 flex justify-center animate-fadeInUp" style={{ animationDelay: '1.8s' }}>
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-6 h-6 text-sky-400 fill-current animate-pulse-glow hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${i * 0.3}s` }} />
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 md:w-56 md:h-56 opacity-20">
          <img src="/flower-event.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 md:w-56 md:h-56 opacity-20 transform scale-x-[-1]">
          <img src="/flower-event.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-0 left-0 w-40 h-40 md:w-56 md:h-56 opacity-20 transform scale-y-[-1]">
          <img src="/flower-event.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 md:w-56 md:h-56 opacity-20 transform scale-x-[-1] scale-y-[-1]">
          <img src="/flower-event.png" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className={`text-4xl md:text-5xl font-bold text-navy-900 text-center mb-16 font-serif transition-all duration-1000 ${visibleSections.has(2) ? 'animate-fadeInDown opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.5s' }}>EVENT DETAILS</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Church Ceremony */}
            <div className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 relative hover:scale-105 transition-all duration-1000 ${visibleSections.has(2) ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ animationDelay: '0.8s' }}>
              {/* Rectangle background element */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-md rounded-3xl"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-3xl animate-shimmer"></div>
              
              {/* Balloons positioned in upper right */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 animate-bounce" style={{ animationDelay: '1.5s' }}>
                <img src="/ballon-event.png" alt="" className="w-16 h-16 md:w-20 md:h-20 opacity-80" />
                </div>
              
              {/* White flowers at bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-10 animate-fadeInUp" style={{ animationDelay: '2s' }}>
                <img src="/flower-event.png" alt="" className="w-full h-16 md:h-20 opacity-20 object-cover" />
              </div>
              
              <div className="relative z-30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-navy-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-navy-900 font-serif">CHURCH LOCATION</h3>
                    <p className="text-sm md:text-base text-gray-600">The Sacred Union</p>
                  </div>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-navy-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm md:text-base font-semibold text-gray-900">TACN Sabo District</p>
                      <p className="text-sm md:text-base text-gray-600">Bida, Niger State</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-navy-600" />
                    <p className="text-sm md:text-base text-gray-900 font-semibold">10:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reception */}
            <div className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 relative hover:scale-105 transition-all duration-1000 ${visibleSections.has(2) ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ animationDelay: '1.1s' }}>
              {/* Rectangle background element */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-md rounded-3xl"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-3xl animate-shimmer"></div>
              
              {/* Balloons positioned in upper right */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 animate-bounce" style={{ animationDelay: '1.8s' }}>
                <img src="/ballon-event.png" alt="" className="w-16 h-16 md:w-20 md:h-20 opacity-80" />
                </div>
              
              {/* White flowers at bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-10 animate-fadeInUp" style={{ animationDelay: '2.3s' }}>
                <img src="/flower-event.png" alt="" className="w-full h-16 md:h-20 opacity-20 object-cover" />
              </div>
              
              <div className="relative z-30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-navy-600 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-navy-900 font-serif">RECEPTION</h3>
                    <p className="text-sm md:text-base text-gray-600">Celebration & Joy</p>
                  </div>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-navy-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm md:text-base font-semibold text-gray-900">ASUP Hall</p>
                      <p className="text-sm md:text-base text-gray-600">Federal Polytechnic Bida, Niger State</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-navy-600" />
                    <p className="text-sm md:text-base text-gray-900 font-semibold">12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Map */}
          <div className={`bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-1000 ${visibleSections.has(2) ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ animationDelay: '1.4s' }}>
            <div className="flex items-center gap-4 mb-6 animate-slideInLeft" style={{ animationDelay: '1.6s' }}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-pulse-glow">
                <Map className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-900">Find Us</h3>
                <p className="text-gray-600">Interactive Map Location</p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.123456789!2d6.0123456!3d9.0876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBida%2C%20Niger%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890123"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Location - Bida, Niger State"
              ></iframe>
            </div>
            
            <div className="mt-4 text-center animate-fadeInUp" style={{ animationDelay: '1.8s' }}>
              <a
                href="https://maps.google.com/?q=Bida,Niger+State,Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg animate-pulse-glow"
              >
                <MapPin className="w-5 h-5" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Color Code */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-navy-900/20 to-sky-400/20 rounded-full animate-float"
              style={{
                left: `${(i * 7) % 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${18 + i * 2}s`,
                top: '100%'
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className={`text-3xl font-bold text-navy-900 mb-8 transition-all duration-1000 ${visibleSections.has(3) ? 'animate-fadeInDown opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.3s' }}>Dress Code</h3>
          <div className="flex justify-center items-center gap-8">
            <div className="text-center animate-slideInLeft" style={{ animationDelay: '0.6s' }}>
              <div className="w-20 h-20 bg-navy-900 rounded-full mx-auto mb-3 shadow-lg animate-pulse-glow hover:scale-110 transition-transform duration-300"></div>
              <p className="font-semibold text-gray-900">Navy Blue</p>
            </div>
            <div className="text-2xl text-gray-400 animate-bounce" style={{ animationDelay: '0.9s' }}>&</div>
            <div className="text-center animate-slideInRight" style={{ animationDelay: '1.2s' }}>
              <div className="w-20 h-20 bg-sky-400 rounded-full mx-auto mb-3 shadow-lg animate-pulse-glow hover:scale-110 transition-transform duration-300"></div>
              <p className="font-semibold text-gray-900">Sky Blue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 md:w-56 md:h-56 opacity-20">
          <img src="/flower-event.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 md:w-56 md:h-56 opacity-20 transform scale-x-[-1]">
          <img src="/flower-event.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-0 left-0 w-40 h-40 md:w-56 md:h-56 opacity-20 transform scale-y-[-1]">
          <img src="/flower-event.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 md:w-56 md:h-56 opacity-20 transform scale-x-[-1] scale-y-[-1]">
          <img src="/flower-event.png" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className={`text-4xl md:text-5xl font-bold text-navy-900 mb-8 font-serif transition-all duration-1000 ${visibleSections.has(4) ? 'animate-fadeInDown opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.6s' }}>CASH GIFT</h2>
          
          <div className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 relative hover:scale-105 transition-all duration-1000 ${visibleSections.has(4) ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ animationDelay: '0.9s' }}>
            {/* Rectangle background element */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-md rounded-3xl"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-3xl animate-shimmer"></div>
            
            {/* White flowers at bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-10 animate-fadeInUp" style={{ animationDelay: '2.5s' }}>
              <img src="/flower-event.png" alt="" className="w-full h-16 md:h-20 opacity-20 object-cover" />
            </div>
            
            <div className="relative z-30">
              <div className="flex justify-center mb-8 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-sky-100 rounded-full flex items-center justify-center animate-pulse-glow hover:scale-110 transition-transform duration-300">
                  <Gift className="w-8 h-8 md:w-10 md:h-10 text-sky-600 animate-bounce" style={{ animationDelay: '1.5s' }} />
                </div>
              </div>
              
              <div className="space-y-6 text-lg mb-8">
                <div>
                  <p className="text-gray-600 text-sm md:text-base font-medium">Account Name</p>
                  <p className="font-bold text-navy-900 text-lg md:text-xl mt-1">ADEDOKUN SUSSNNAH</p>
              </div>
              
              <div>
                  <p className="text-gray-600 text-sm md:text-base font-medium">Account No</p>
                  <p className="font-bold text-navy-900 text-lg md:text-xl tracking-wider mt-1">7042945688</p>
              </div>
              
              <div>
                  <p className="text-gray-600 text-sm md:text-base font-medium">Bank</p>
                  <p className="font-bold text-navy-900 text-lg md:text-xl mt-1">OPAY</p>
                </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <p className="text-green-800 font-semibold mb-4">
                  💝 Thank you for your generous gift!
              </p>
              <p className="text-green-700 mb-4">
                  Your love and support mean the world to us. We are truly blessed to have you in our lives and look forward to celebrating this special day with you.
                </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Section - NO ANIMATIONS as requested */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src="/bride-groom.png" alt="Bride and Groom" className="w-full h-full object-cover" />
        </div>
        
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 text-center px-4 w-full">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-12 font-serif bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full inline-block">OUR TOAST</h2>
          
          {/* Central content card */}
          <div className="max-w-5xl mx-auto px-2 md:px-4">
            <div className="relative">
              {/* Main rectangle background */}
              <img src="/bride-groom-inner.png" alt="" className="w-full h-auto rounded-3xl shadow-xl min-h-[400px] md:min-h-[500px] lg:min-h-[600px]" />
              
              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
                {/* Poem */}
                <div className="text-sm md:text-lg lg:text-xl leading-relaxed space-y-1 md:space-y-2 lg:space-y-4 text-navy-900 font-medium text-center max-w-sm md:max-w-md lg:max-w-lg">
              <p>He wrote our story, line by line,</p>
              <p>A love designed by the Divine.</p>
              <p>With faith our anchor, hope our song,</p>
              <p>In Christ, we know we both belong.</p>
              
                  <div className="my-4 md:my-6 lg:my-8">
                    <p>With every breath, with every prayer,</p>
                    <p>God's love will keep us in His care.</p>
                  </div>
              </div>
              
                {/* Line demarcation */}
                <div className="my-4 md:my-6 lg:my-8 flex justify-center">
                  <div className="w-24 md:w-32 h-px bg-navy-900/50"></div>
            </div>
            
                {/* Bible verse */}
                <div className="text-navy-900 text-center max-w-sm md:max-w-md lg:max-w-lg">
                  <p className="text-sm md:text-lg lg:text-xl font-semibold italic leading-tight">
                "Therefore what God has joined together, let no one separate"
              </p>
                  <p className="text-xs md:text-base lg:text-lg mt-1 md:mt-2 font-medium">Mark 10:9</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiries Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-300/40 to-pink-300/40 rounded-full animate-float"
              style={{
                left: `${(i * 8) % 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${12 + i * 2}s`,
                top: '100%'
              }}
            />
          ))}
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-16 h-16 opacity-30 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="w-full h-full bg-purple-300 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-20 right-20 w-12 h-12 opacity-40 animate-bounce" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full bg-pink-300 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-20 left-20 w-14 h-14 opacity-35 animate-bounce" style={{ animationDelay: '1.5s' }}>
          <div className="w-full h-full bg-sky-300 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className={`text-4xl md:text-5xl font-bold text-navy-900 mb-8 transition-all duration-1000 ${visibleSections.has(6) ? 'animate-fadeInDown opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.3s' }}>Enquiries</h2>
          
          <div className={`bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-100/50 hover:scale-105 transition-all duration-1000 ${visibleSections.has(6) ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ animationDelay: '0.6s' }}>
            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-3xl animate-shimmer"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-8 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
                <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center animate-pulse-glow hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MessageCircle className="w-12 h-12 text-purple-600 animate-bounce" style={{ animationDelay: '1.2s' }} />
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 animate-slideInLeft" style={{ animationDelay: '1.5s' }}>
                For any questions or inquiries about our special day, please feel free to contact us. We're here to help make your experience perfect! 💕
              </p>
              
              <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '1.8s' }}>
                {/* Mrs Oluwabunmi Contact Card */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slideInLeft" style={{ animationDelay: '2.1s' }}>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center animate-pulse-glow">
                      <Phone className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-gray-800 text-lg">+2349032259418</p>
                      <p className="text-purple-600 font-medium">Mrs Oluwabunmi</p>
                    </div>
                  </div>
                </div>
                
                {/* Mr. Johnson Contact Card */}
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-6 border border-sky-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slideInRight" style={{ animationDelay: '2.4s' }}>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center animate-pulse-glow">
                      <Phone className="w-6 h-6 text-sky-600" />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-gray-800 text-lg">+2349057123589</p>
                      <p className="text-sky-600 font-medium">Mr. Johnson</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative hearts */}
              <div className="flex justify-center gap-3 mt-8 animate-fadeInUp" style={{ animationDelay: '2.7s' }}>
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-5 h-5 text-purple-400 fill-current animate-pulse-glow" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 relative bg-gradient-to-br from-navy-900 via-sky-800 to-blue-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-white animate-fadeInDown" style={{ animationDelay: '0.3s' }}>GracefullyAdeola</h3>
          <p className="text-sky-200 mb-6 font-medium animate-fadeInUp" style={{ animationDelay: '0.6s' }}>November 22, 2025</p>
          <div className="flex justify-center gap-2 mb-6 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
            {[...Array(7)].map((_, i) => (
              <Heart key={i} className="w-5 h-5 text-pink-300 fill-current animate-pulse-glow hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
          <p className="text-sky-200 font-medium animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
            With love and gratitude for your presence on our special day
          </p>
        </div>
      </footer>
    </div>
  );
}
