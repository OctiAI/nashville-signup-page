import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Phone, Download, Shield, Star } from 'lucide-react';

function HomePage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    
    // Add fade out animation before navigation
    setIsVisible(false);
    setTimeout(() => {
      navigate('/thanks');
    }, 300);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className={`pt-8 pb-4 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Trusted by 500+ Nashville Homeowners
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="max-w-4xl mx-auto px-6 py-8">
          <div className={`text-center mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get Your <span className="text-blue-600">Free Guide:</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-gray-700 font-semibold leading-tight">
                Before You Renovate… Read This{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">
                  Brutally Honest Cost Breakdown
                </span>
              </span>
              <br />
              <span className="text-xl md:text-2xl text-gray-600 font-medium mt-2 block">
                (Nashville Edition)
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              👉 How to renovate with <span className="text-blue-600 font-semibold">confidence</span> and avoid costly surprises.
            </p>
          </div>

          {/* Value Proposition */}
          <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Thinking about updating your kitchen or bath?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  <strong className="text-gray-900">Don't go in blind.</strong> This free guide breaks down:
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'What renovations really cost in Nashville',
                    'Where most homeowners accidentally overspend',
                    'How to avoid the traps that could cost you thousands'
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-3 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                      <div className="bg-green-100 rounded-full p-1 mt-1">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <Phone className="w-5 h-5" />
                  <span>Prefer to talk it through? Call us at (615) 555-0123</span>
                </div>
              </div>

              {/* Form */}
              <div className={`bg-gradient-to-b from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="text-center mb-6">
                  <Download className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Fill out your info below, and we'll send it right to your inbox.
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white transform focus:scale-[1.02]"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white transform focus:scale-[1.02]"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white transform focus:scale-[1.02]"
                      placeholder="(615) 555-0123"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                  >
                    Get My Free Cost Guide
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md border border-gray-100">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-700 font-medium">
                🔥 No spam. No sales pressure. Just the honest answers you've been looking for.
              </span>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className={`mt-16 pb-8 text-center text-gray-500 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-sm">
            © 2025 Nashville Premier Home Design. Your privacy is protected.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;