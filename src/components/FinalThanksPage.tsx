import React, { useEffect, useState } from 'react';
import { Check, Phone, Mail, Shield, Star, Award, Home } from 'lucide-react';

function FinalThanksPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Check className="w-4 h-4" />
              Quote Request Received!
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="max-w-4xl mx-auto px-6 py-8">
          <div className={`text-center mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Thanks for requesting your quote!
            </h1>
            
            <div className={`bg-green-100 rounded-2xl p-6 mb-8 border border-green-200 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-green-600 rounded-full p-2">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-green-800">We've got your info, and we're already reviewing it.</span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              👉 Andrew will give you a call shortly to go over your project, answer your questions, and set up your <span className="text-blue-600 font-semibold">free 3D design preview</span>.
            </p>
          </div>

          {/* Main Content */}
          <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                In the meantime, feel free to:
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Call Option */}
              <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center border border-blue-200 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Call us if you'd like to chat sooner</h3>
                <a 
                  href="tel:6155550123" 
                  className="inline-flex items-center gap-2 text-blue-600 font-bold text-2xl hover:text-blue-700 transition-colors duration-200"
                >
                  <Phone className="w-6 h-6" />
                  (615) 555-0123
                </a>
              </div>

              {/* Email Option */}
              <div className={`bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 text-center border border-green-200 transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                <div className="bg-green-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Check your email</h3>
                <p className="text-green-700 font-medium">We'll send over a quick confirmation</p>
              </div>
            </div>

            {/* Promise Statement */}
            <div className={`bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <h3 className="text-2xl font-bold mb-4">Our Promise to You</h3>
              <p className="text-xl leading-relaxed">
                We're local, veteran-owned, and proud to deliver the kind of honest, detailed quotes you deserve. 
                <br />
                <span className="font-bold">No surprises. No pressure. Just real answers.</span>
              </p>
            </div>
          </div>

          {/* Trust Footer */}
          <div className={`text-center transition-all duration-700 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-gray-700">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>Veteran-Owned</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-blue-600" />
                  <span>Family-Operated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>Local Nashville Business</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span>5-Star Rated</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className={`mt-16 pb-8 text-center text-gray-500 transition-all duration-700 delay-900 ${
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

export default FinalThanksPage;