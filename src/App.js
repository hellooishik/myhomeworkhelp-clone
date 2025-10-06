import React, { useState } from 'react';
import { Star, Clock, Shield, DollarSign, CheckCircle, MessageSquare, Users, Award, ChevronDown, ChevronUp, Menu, X, BookOpen, FileText, TrendingUp, GraduationCap, Brain, Target, Sparkles, Calendar, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Header Component
  const Header = () => (
    <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer flex-shrink-0" onClick={() => navigateTo('home')}>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-blue-600">My Home</div>
                <div className="text-xs font-bold text-red-500">WorkHelp</div>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="flex space-x-8 flex-1 justify-center">
            <button onClick={() => navigateTo('prices')} className={`text-base font-medium transition whitespace-nowrap ${currentPage === 'prices' ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>Prices</button>
            <button onClick={() => navigateTo('writers')} className={`text-base font-medium transition whitespace-nowrap ${currentPage === 'writers' ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>Our Writers</button>
            <button onClick={() => navigateTo('how-it-works')} className={`text-base font-medium transition whitespace-nowrap ${currentPage === 'how-it-works' ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>How It Works</button>
            <button onClick={() => navigateTo('reviews')} className={`text-base font-medium transition whitespace-nowrap ${currentPage === 'reviews' ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>Reviews</button>
            <button onClick={() => navigateTo('blog')} className={`text-base font-medium transition whitespace-nowrap ${currentPage === 'blog' ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>Blog</button>
            <button onClick={() => navigateTo('faq')} className={`text-base font-medium transition whitespace-nowrap ${currentPage === 'faq' ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>FAQ</button>
          </nav>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <button className="text-gray-700 border-2 border-gray-300 px-6 py-2.5 rounded-lg hover:bg-gray-50 transition text-sm font-semibold whitespace-nowrap">
              Get Free Quote
            </button>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition text-sm font-semibold shadow-md whitespace-nowrap">
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-3">
            <button onClick={() => navigateTo('prices')} className="block w-full text-left text-gray-700">Prices</button>
            <button onClick={() => navigateTo('writers')} className="block w-full text-left text-gray-700">Our Writers</button>
            <button onClick={() => navigateTo('how-it-works')} className="block w-full text-left text-gray-700">How It Works</button>
            <button onClick={() => navigateTo('reviews')} className="block w-full text-left text-gray-700">Reviews</button>
            <button onClick={() => navigateTo('blog')} className="block w-full text-left text-gray-700">Blog</button>
            <button onClick={() => navigateTo('faq')} className="block w-full text-left text-gray-700">FAQ</button>
            <div className="pt-4 border-t space-y-2">
              <button className="block w-full text-left border px-4 py-2 rounded-lg">Get Free Quote</button>
              <button className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg">Order Now</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">MyHomeworkHelp</h3>
            <p className="text-gray-400 text-sm">Expert homework help available 24/7 for students worldwide.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Essay Writing</a></li>
              <li><a href="#" className="hover:text-white transition">Research Papers</a></li>
              <li><a href="#" className="hover:text-white transition">Math Help</a></li>
              <li><a href="#" className="hover:text-white transition">Science Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><button onClick={() => navigateTo('writers')} className="hover:text-white transition">Our Experts</button></li>
              <li><a href="#" className="hover:text-white transition">Guarantees</a></li>
              <li><button onClick={() => navigateTo('reviews')} className="hover:text-white transition">Reviews</button></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><button onClick={() => navigateTo('faq')} className="hover:text-white transition">FAQ</button></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 MyHomeworkHelp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  // HOME PAGE
  const HomePage = () => (
    <>
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Boost Your Grades with Online Homework Help
              </h1>
              <p className="text-base text-gray-700 mb-6">
                Ease your homework burden with our reliable online homework help service. Say goodbye to deadlines and stress while our{' '}
                <span className="text-blue-600 font-medium cursor-pointer">subject experts</span> handle your assignments{' '}
                <span className="text-blue-600 font-medium cursor-pointer">effortlessly</span>.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800 rounded-xl p-5 text-center text-white">
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-xs text-gray-300">Human-Written Content</div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-5 text-center text-white">
                  <div className="text-3xl font-bold mb-1">25K+</div>
                  <div className="text-xs text-gray-300">Happy Students</div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-5 text-center text-white">
                  <div className="text-3xl font-bold mb-1">95%</div>
                  <div className="text-xs text-gray-300">On-Time Delivery</div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-5 text-white">
                  <div className="flex items-center justify-center gap-1 mb-1.5">
                    <span className="text-xs font-semibold">sitejabber</span>
                    <span className="text-lg font-bold">4.8</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 text-orange-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs font-semibold">Trustpilot</span>
                    <span className="text-lg font-bold">4.2</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 text-green-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-5">
                <h3 className="text-base font-bold mb-3 flex items-center gap-2">
                  📚 Tell Us About Your Assignment*
                </h3>
                
                <form className="space-y-3">
                  <div>
                    <textarea
                      className="w-full border border-gray-300 rounded-lg p-2.5 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows="3"
                      placeholder="Provide detailed instructions, citation style requirements, and attach any relevant files below."
                    ></textarea>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5">
                        👤 Name*
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g. John Smith"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-semibold mb-1.5">
                        📧 Email Address*
                      </label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5">
                        📅 Assignment Deadline*
                      </label>
                      <div className="text-xs text-gray-500 mb-1">When Do You Need This?</div>
                      <input
                        type="date"
                        className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-semibold mb-1.5">
                        💰 Your Budget*
                      </label>
                      <div className="text-xs text-gray-500 mb-1">Expected Budget Range</div>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g $50"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                  >
                    Get My Free Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Behind the Scenes: How We Deliver A+ Results
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our 24-hour live dashboard shows real assignments moving through our expert workflow - from initial order to quality review and on-time delivery
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
            Get Instant Homework Help in 3 Easy Steps
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Step 1</h3>
              <p className="text-gray-600 text-sm">
                Share your assignment details and what you need help with
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Step 2</h3>
              <p className="text-gray-600 text-sm">
                Get connected with a qualified expert in your subject area
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Step 3</h3>
              <p className="text-gray-600 text-sm">
                Pay securely and receive completed assignment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hire Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Hire the Best Homework Helpers: Do My Homework Online
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-8">
            Connect with our highly skilled professionals who are ready to deliver superior online homework help and college homework help.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            I want my homework done
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
            24/7 Homework Help: Your Benefits
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            MyHomeworkHelp provides a seamless connection between students and subject experts.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition">
              <Clock className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold mb-2">24/7 Availability</h3>
              <p className="text-gray-600 text-sm">
                Get instant homework help anytime. Our experts are always available to assist you.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition">
              <Shield className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold mb-2">100% Original Work</h3>
              <p className="text-gray-600 text-sm">
                Every assignment completed from scratch with plagiarism detection. No AI content.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition">
              <MessageSquare className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold mb-2">Direct Communication</h3>
              <p className="text-gray-600 text-sm">
                Chat directly with your expert through our secure platform.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition">
              <DollarSign className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold mb-2">Money-Back Guarantee</h3>
              <p className="text-gray-600 text-sm">
                We stand behind our work with a full money-back guarantee.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition">
              <Users className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold mb-2">Expert PhD Writers</h3>
              <p className="text-gray-600 text-sm">
                Work with qualified professionals holding advanced degrees.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition">
              <Award className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold mb-2">Top Grades Guarantee</h3>
              <p className="text-gray-600 text-sm">
                Our experts deliver A+ quality work that meets academic standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
            What Customers Say About Our Service
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Read verified reviews from students who used our service
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Professional experts and support. MyHomeworkHelp provided excellent assistance.
              </p>
              <p className="font-semibold text-gray-900 text-sm">Sarah M.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Great paper, expert nailed this assignment. Citations were perfectly sourced.
              </p>
              <p className="font-semibold text-gray-900 text-sm">Michael T.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button onClick={() => navigateTo('reviews')} className="text-blue-600 font-semibold hover:text-blue-700">
              Read All Reviews →
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Expert Homework Help?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of students who trust us for their academic success
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
            Get Started Now
          </button>
        </div>
      </section>
    </>
  );

  // PRICES PAGE
  const PricesPage = () => (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Affordable Homework Help Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent, fair pricing with no hidden fees.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold mb-4">How our pricing works</h3>
              <p className="text-gray-600 mb-4 text-sm">Simple, fair, and transparent</p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Free quotes before you order</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">One-time payment - no subscriptions</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Split payments available</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">15% service fee included</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-700 text-sm">
                Prices start at <span className="font-bold text-lg text-blue-600">$15.99/page</span>
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
              <h3 className="text-xl font-bold mb-4">Free with every order</h3>
              <p className="text-gray-600 mb-4 text-sm">Standard features at no cost</p>
              <ul className="space-y-3">
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited revisions</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Plagiarism report</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Direct chat with expert</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">24/7 customer support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );

  // WRITERS PAGE (simplified version)
  const WritersPage = () => (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Writers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with highly qualified professionals.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">2000+</div>
              <div className="text-gray-700">Expert Writers</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">PhD</div>
              <div className="text-gray-700">Advanced Degrees</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-700">Success Rate</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-700">Subjects Covered</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  // HOW IT WORKS PAGE (simplified)
  const HowItWorksPage = () => (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How Our Service Works
          </h1>
          <p className="text-xl text-gray-600">
            Get expert help in three simple steps
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h2 className="text-3xl font-bold mb-4">Submit Your Assignment</h2>
              <p className="text-gray-600">
                Fill out our form with your assignment details.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h2 className="text-3xl font-bold mb-4">Expert Gets to Work</h2>
              <p className="text-gray-600">
                We match you with a qualified expert who begins immediately.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h2 className="text-3xl font-bold mb-4">Review & Download</h2>
              <p className="text-gray-600">
                Receive your completed work and request revisions if needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  // REVIEWS PAGE (simplified)
  const ReviewsPage = () => (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Student Reviews & Testimonials
          </h1>
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center mb-2">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <span className="text-3xl font-bold">4.8/5</span>
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', text: 'Professional experts and outstanding support!' },
              { name: 'Michael T.', text: 'Great paper, expert nailed this assignment.' },
              { name: 'Emma W.', text: 'My experience continues to be great and positive.' },
              { name: 'David K.', text: 'Report came in on time, was original and well-written.' },
              { name: 'Jessica B.', text: 'MyHomeworkHelp has been a real lifesaver.' },
              { name: 'Alex R.', text: 'Amazing experience! Will definitely use again!' }
            ].map((review, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4">{review.text}</p>
                <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  // BLOG PAGE (simplified)
  const BlogPage = () => (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Homework Help Blog
          </h1>
          <p className="text-xl text-gray-600">
            Tips and resources to help you succeed
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'How to Write a Perfect Research Paper', category: 'Writing Tips' },
              { title: '10 Study Techniques That Actually Work', category: 'Study Tips' },
              { title: 'Citation Styles Explained', category: 'Academic Writing' }
            ].map((post, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100"></div>
                <div className="p-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">{post.category}</span>
                  <h3 className="text-lg font-bold mt-3">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  // FAQ PAGE
  const FAQPage = () => (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {[
              {
                q: 'Is there a website that can do my homework?',
                a: 'Yes, MyHomeworkHelp is one of the leading homework help websites. We\'ve been helping students since 2012, with over 200,000 satisfied customers.'
              },
              {
                q: 'Do you guarantee plagiarism-free homework?',
                a: 'Absolutely! We guarantee 100% original, human-crafted content with no AI usage. Each assignment is scanned with plagiarism detection software.'
              },
              {
                q: 'How much do I need to pay?',
                a: 'Pricing starts at $15.99 per page. Each assignment is quoted individually based on requirements, deadline, and complexity.'
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 text-sm">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  // Main render
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'prices' && <PricesPage />}
      {currentPage === 'writers' && <WritersPage />}
      {currentPage === 'how-it-works' && <HowItWorksPage />}
      {currentPage === 'reviews' && <ReviewsPage />}
      {currentPage === 'blog' && <BlogPage />}
      {currentPage === 'faq' && <FAQPage />}
      {/* added fotter */}
      <Footer />
    </div>
  );
}

export default App;