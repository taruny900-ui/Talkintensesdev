"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
// Import the logo directly from the same folder to make it visible
import logoImg from "./talk-in-tenses-logo.png";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* Header */}
      <header className={`bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg bg-white' : ''}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              {/* Planet Logo */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 logo-cutout logo-pulse">
                <Image 
                  src={logoImg} 
                  alt="Talk in Tenses Planet" 
                  width={48} 
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold gradient-text">Talk in Tenses</span>
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#features" className="text-gray-600 hover:text-pink-600 font-medium transition-all duration-300 relative group">
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-space-yellow-orange group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-pink-600 font-medium transition-all duration-300 relative group">
                How It Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-space-yellow-orange group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-gray-600 hover:text-pink-600 font-medium transition-all duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-space-yellow-orange group-hover:w-full transition-all duration-300"></span>
              </a>
              <button className="bg-space-yellow-orange hover:bg-space-yellow-orange-dark text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-space-yellow-orange/50">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Updated to a cute light pink theme */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-200 via-rose-50 to-pink-100 min-h-[90vh] flex items-center">
        {/* Floating Stars Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-star text-2xl text-space-yellow-orange opacity-60" style={{ top: '10%', left: '10%', animationDelay: '0s' }}>⭐</div>
          <div className="floating-star text-xl text-space-yellow-orange opacity-50" style={{ top: '20%', right: '15%', animationDelay: '1s' }}>⭐</div>
          <div className="floating-star text-lg text-space-yellow-orange opacity-40" style={{ top: '60%', left: '5%', animationDelay: '2s' }}>⭐</div>
          <div className="floating-star text-xl text-space-yellow-orange opacity-55" style={{ top: '70%', right: '10%', animationDelay: '1.5s' }}>⭐</div>
          <div className="floating-star text-lg text-space-yellow-orange opacity-45" style={{ top: '40%', right: '30%', animationDelay: '0.5s' }}>⭐</div>
          <div className="floating-star text-2xl text-space-yellow-orange opacity-50" style={{ bottom: '15%', left: '20%', animationDelay: '2.5s' }}>⭐</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in">
              <div className="inline-block mb-4 px-4 py-2 bg-space-yellow-orange/10 rounded-full border-2 border-space-yellow-orange/30">
                <span className="text-space-yellow-orange-dark font-bold text-sm">🚀 Start Your Learning Journey Today!</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                Learn & Play with
                <span className="block gradient-text mt-2">Talk in Tenses!</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Make learning fun and exciting for your kids! Join thousands of children on an educational adventure through space. 🌟
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="btn-primary group relative overflow-hidden">
                  <span className="relative z-10">Start Learning Free</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-space-yellow-orange-dark to-space-yellow-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </button>
                <button className="btn-secondary">
                  <span className="flex items-center gap-2">
                    <span>▶</span> Watch Demo
                  </span>
                </button>
              </div>
              <div className="mt-12 flex gap-8 justify-center md:justify-start text-center">
                <div className="group">
                  <div className="text-4xl md:text-5xl font-bold stat-number mb-2 group-hover:scale-110 transition-transform duration-300">50K+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Kids</div>
                </div>
                <div className="group">
                  <div className="text-4xl md:text-5xl font-bold stat-number mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
                  <div className="text-sm text-gray-600 font-medium">Fun Lessons</div>
                </div>
                <div className="group">
                  <div className="text-4xl md:text-5xl font-bold stat-number mb-2 group-hover:scale-110 transition-transform duration-300">4.9★</div>
                  <div className="text-sm text-gray-600 font-medium">Parent Rating</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center animate-slide-in-up">
              <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-space-yellow-orange/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative planet-rotate">
                  <Image 
                    src={logoImg} 
                    alt="Talk in Tenses Planet" 
                    width={400} 
                    height={400}
                    className="object-contain glow-effect"
                  />
                </div>
                <div className="absolute -top-8 -right-8 bg-space-yellow-orange rounded-full w-20 h-20 flex items-center justify-center text-4xl star-float shadow-lg">
                  ⭐
                </div>
                <div className="absolute -bottom-6 -left-6 bg-space-yellow-orange rounded-full w-24 h-24 flex items-center justify-center text-5xl star-float-delayed shadow-lg">
                  ⭐
                </div>
                <div className="absolute top-1/2 -right-12 bg-pink-400 rounded-full w-16 h-16 flex items-center justify-center text-3xl star-float opacity-80">
                  ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 right-0 section-divider"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-5xl">💫</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Why Kids Love Us!
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fun, engaging, and educational - the perfect combination for your child's learning journey through the cosmos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🎮", title: "Gamified Learning", desc: "Turn education into an exciting game with points, badges, and rewards!", gradient: "from-space-yellow-orange to-space-yellow-orange-dark" },
              { icon: "🎨", title: "Creative Activities", desc: "Interactive lessons that spark creativity and imagination in every child.", gradient: "from-pink-400 to-rose-500" },
              { icon: "🏆", title: "Track Progress", desc: "Watch your child grow with detailed progress reports and achievements.", gradient: "from-space-yellow-orange to-space-yellow-orange-dark" },
              { icon: "👨‍👩‍👧‍👦", title: "Safe & Kid-Friendly", desc: "A completely safe environment designed specifically for children.", gradient: "from-pink-400 to-rose-500" },
              { icon: "📱", title: "Learn Anywhere", desc: "Access lessons on any device - phone, tablet, or computer!", gradient: "from-space-yellow-orange to-space-yellow-orange-dark" },
              { icon: "🌟", title: "Daily Challenges", desc: "New exciting challenges every day to keep learning fresh and fun!", gradient: "from-pink-400 to-rose-500" },
            ].map((feature, index) => (
              <div 
                key={index}
                className="card-feature card-hover text-center group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="text-7xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Updated to light pink/rose gradient */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-pink-100 via-white to-rose-50 relative">
        <div className="absolute top-0 left-0 right-0 section-divider"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-5xl">🚀</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Start your cosmic learning adventure in just three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-space-yellow-orange via-pink-400 to-space-yellow-orange opacity-30"></div>
            
            {[
              { step: "1", icon: "👤", title: "Create Account", desc: "Sign up in seconds with just an email. It's free and takes less than a minute!", hoverBorder: "group-hover:border-space-yellow-orange", bgColor: "from-space-yellow-orange to-space-yellow-orange-dark" },
              { step: "2", icon: "🎯", title: "Choose Your Path", desc: "Select from hundreds of fun lessons tailored to your child's age and interests.", hoverBorder: "group-hover:border-pink-400", bgColor: "from-pink-400 to-rose-500" },
              { step: "3", icon: "🎉", title: "Start Learning", desc: "Begin the adventure! Watch your child learn, grow, and have fun every step of the way.", hoverBorder: "group-hover:border-space-yellow-orange", bgColor: "from-space-yellow-orange to-space-yellow-orange-dark" },
            ].map((item, index) => (
              <div 
                key={index}
                className="relative text-center group"
              >
                <div className={`relative z-10 bg-white rounded-3xl p-8 shadow-xl card-hover border-4 border-transparent ${item.hoverBorder} transition-all duration-500`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${item.bgColor} text-white text-2xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.step}
                  </div>
                  <div className="text-6xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Updated to cute vibrant pinks */}
      <section className="py-24 bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-space-yellow-orange/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8 flex justify-center animate-bounce-slow">
            <div className="relative">
              <div className="absolute inset-0 bg-space-yellow-orange/30 rounded-full blur-2xl"></div>
              <Image 
                src={logoImg} 
                alt="Talk in Tenses Planet" 
                width={150} 
                height={150}
                className="object-contain relative z-10 glow-effect"
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Start the Adventure?
          </h2>
          <p className="text-xl md:text-2xl text-pink-100 mb-10 leading-relaxed">
            Join thousands of happy families making learning fun! Start your free trial today - no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-pink-600 hover:bg-pink-50 font-bold py-5 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-white/50 group relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-space-yellow-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">
                Get Started for Free
                <span className="group-hover:translate-x-1 transition-transform">🚀</span>
              </span>
            </button>
            <button className="bg-transparent border-3 border-white text-white hover:bg-white/10 font-bold py-5 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              Learn More
            </button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-pink-100">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative">
        <div className="absolute top-0 left-0 right-0 section-divider"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Image 
                    src={logoImg} 
                    alt="Talk in Tenses Planet" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-bold">Talk in Tenses</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Making learning fun and accessible for every child. Join us on this cosmic educational journey!
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-space-yellow-orange rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <span className="text-lg">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-space-yellow-orange rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <span className="text-lg">🐦</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-space-yellow-orange rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <span className="text-lg">📷</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-space-yellow-orange">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#features" className="hover:text-space-yellow-orange transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Features
                </a></li>
                <li><a href="#" className="hover:text-space-yellow-orange transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Pricing
                </a></li>
                <li><a href="#" className="hover:text-space-yellow-orange transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  For Parents
                </a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-space-yellow-orange">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-space-yellow-orange transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  About Us
                </a></li>
                <li><a href="#" className="hover:text-space-yellow-orange transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Blog
                </a></li>
                <li><a href="#" className="hover:text-space-yellow-orange transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Contact
                </a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-space-yellow-orange">Legal</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-space-yellow-orange transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Privacy
                </a></li>
                <li><a href="#" className="hover:text-space-yellow-orange transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Terms
                </a></li>
                <li><a href="#" className="hover:text-space-yellow-orange transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Safety
                </a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2026 Talk in Tenses. Made with <span className="text-space-yellow-orange">💫</span> for kids everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}