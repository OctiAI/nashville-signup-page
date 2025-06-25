import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Phone, Home, Shield, Star, Award } from 'lucide-react';

function ThanksPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote form submitted:', formData);
    navigate('/thanks2');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-8 pb-4">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Check className="w-4 h-4" />
              Guide Sent Successfully!
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-green-600">✅ Thanks</span> for grabbing your guide!
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              👉 Your cost guide is on its way—now let's take the next step and <span className="text-blue-600 font-semibold">get your real numbers</span>.
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Content */}
              <div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  The guide gives you a great starting point.
                </p>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  But if you want to know what it'll <strong className="text-gray-900">really cost</strong> for your kitchen or bathroom, fill out the form below.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'We\'ll give you a Super Mega Giga Detailed Quote™—no surprises, no hidden fees, just a clear, honest price.',
                    'Includes a free 3D design preview so you can see your space before you commit.',
                    'Andrew (my son) will personally review your info and give you a call to walk through it—no pressure, just answers.'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-1 mt-1 flex-shrink-0">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {index === 0 ? (
                          <>
                            We'll give you a <strong className="font-bold">Super Mega Giga Detailed Quote™</strong>—no surprises, no hidden fees, just a clear, honest price.
                          </>
                        ) : (
                          item
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Kitchen/Bath Preview Image Placeholder */}
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-8 text-center border border-blue-200 mb-8">
                  <Home className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-blue-800 font-medium">Beautiful Kitchen & Bath Transformations</p>
                  <p className="text-blue-600 text-sm">See your space in 3D before you commit</p>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-gradient-to-b from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white"
                      placeholder="(615) 555-0123"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                      Address (so we can prep the quote) *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white"
                      placeholder="Enter your address"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white"
                    >
                      <option value="">Select project type</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="bathroom">Bathroom</option>
                      <option value="both">Both</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                      Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="ready-now">Ready now</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="just-exploring">Just exploring</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell us about your project (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white resize-none"
                      placeholder="Tell us about your vision, budget, or any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl text-lg"
                  >
                    Get My Free Quote & 3D Design
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-blue-200 text-center">
                  <p className="text-gray-600 mb-3">Or skip the form and just call us direct:</p>
                  <a 
                    href="tel:6155550123" 
                    className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:text-blue-700 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    (615) 555-0123
                  </a>
                  <p className="text-sm text-gray-500 mt-2">We'll take care of you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Footer */}
          <div className="text-center">
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
        <footer className="mt-16 pb-8 text-center text-gray-500">
          <p className="text-sm">
            © 2025 Nashville Premier Home Design. Your privacy is protected.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default ThanksPage;