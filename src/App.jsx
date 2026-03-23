import { useState } from 'react'
import InteractiveBackground from './InteractiveBackground'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-slate-900">
              AI Craft Consult
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">How We Work</a>
              <a href="#approach" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Our Approach</a>
              <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-lg hover:bg-slate-800 transition-colors font-medium">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <InteractiveBackground />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            Manchester-Based AI Adoption Consultancy
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            From AI Hype to<br />Business Impact
          </h1>
          <p className="text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Showing teams how to master AI tools.<br />
            No fluff, no pitch. Practical AI adoption from people who do this every day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#contact" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-all font-medium text-lg">
              Book Discovery Call
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#services" className="inline-flex items-center justify-center bg-white border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-slate-900 transition-all font-medium text-lg">
              How We Work
            </a>
          </div>

          {/* Simplified value props */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-slate-200">
            <div>
              <div className="font-semibold text-slate-900 mb-2">Enterprise Experience</div>
              <div className="text-sm text-slate-600">Hands-on deployment at scale</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-2">Cross-Functional</div>
              <div className="text-sm text-slate-600">Marketing to Finance to Legal</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-2">Build Capability</div>
              <div className="text-sm text-slate-600">Not dependency</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-2">Measurable ROI</div>
              <div className="text-sm text-slate-600">Real outcomes, not promises</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - New */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Hard Part Isn't the Tools</h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Organizations buy ChatGPT licenses, run Writer.com pilots, experiment with Claude. Then momentum stalls.
              The reason is almost never technical.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">The Real Challenge:</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3">•</span>
                  <span>Teams don't know what good looks like</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3">•</span>
                  <span>Leaders struggle to frame AI for their context</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3">•</span>
                  <span>Governance gets built as a blocker, not enabler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-500 mr-3">•</span>
                  <span>Confidence never develops beyond the early adopters</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Where We Work:</h3>
              <p className="text-slate-300 mb-4">
                We embed with your teams to build AI thinking, not just AI usage.
                We train people to see opportunities, frame problems, and work differently.
              </p>
              <p className="text-slate-300">
                The organizations that win with AI won't be the ones with the best models.
                They'll be the ones whose people know what to do with them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process/Approach Section */}
      <section id="approach" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A structured journey from AI confusion to confident adoption.<br />
              Designed for teams who need results, not endless consulting engagements.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-600 h-full">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Discovery</h3>
                <p className="text-sm text-slate-600 mb-3">
                  AI readiness assessment & use case prioritization
                </p>
                <div className="text-xs text-blue-600 font-medium">4-6 weeks</div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-500 h-full">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Strategy</h3>
<p className="text-sm text-slate-600 mb-3">
                  AI tools roadmap with clear ROI projections
                </p>
                <div className="text-xs text-blue-600 font-medium">Included</div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-400 h-full">
                <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Pilot</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Hands-on implementation & team training
                </p>
                <div className="text-xs text-blue-600 font-medium">8-12 weeks</div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-sky-400 h-full">
                <div className="w-12 h-12 bg-sky-400 rounded-lg flex items-center justify-center mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Scale</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Expand use cases & optimize performance
                </p>
                <div className="text-xs text-blue-600 font-medium">Ongoing</div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <svg className="w-8 h-8 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Step 5 */}
            <div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 shadow-lg h-full text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Success</h3>
                <p className="text-sm mb-3 text-white/90">
                  Independent, AI-powered team driving real ROI
                </p>
                <div className="text-xs font-medium">Your Goal</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-slate-600 mb-4">
              <strong>The Goal:</strong> Build your team's AI capability, not create dependency on consultants
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How We Work With You</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Three engagement models. Pick the one that fits where you are now.<br />
              Scale up or down as your needs change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Discovery Package */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-xl transition-all">
              <div className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">Foundation</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Discovery & Strategy</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Understand where you are. Identify what matters. Build a roadmap your team can actually execute.
              </p>
              <div className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-200">4-6 weeks</div>
              <ul className="space-y-3 mb-10 text-slate-600">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">→</span>
                  <span>AI readiness assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">→</span>
                  <span>Tools capability mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">→</span>
                  <span>3-5 prioritized use cases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">→</span>
                  <span>Board-ready roadmap</span>
                </li>
              </ul>
              <a href="#contact" className="block w-full text-center bg-white border-2 border-slate-900 text-slate-900 px-6 py-3 rounded-lg hover:bg-slate-900 hover:text-white transition-all font-medium">
                Start Here
              </a>
            </div>

            {/* Pilot Package - Featured */}
            <div className="bg-slate-900 rounded-xl p-8 text-white transform md:scale-105 shadow-2xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-white text-slate-900 text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              </div>
              <div className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">Transformation</div>
              <h3 className="text-2xl font-bold mb-4">Pilot Implementation</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Strategy to proof-of-concept. Train your team. Validate ROI. Build the confidence to scale.
              </p>
              <div className="text-sm text-slate-400 mb-8 pb-8 border-b border-slate-700">8-12 weeks</div>
              <ul className="space-y-3 mb-10 text-slate-300">
                <li className="flex items-start">
                  <span className="text-slate-600 mr-3">→</span>
                  <span>1-2 pilots implemented</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-3">→</span>
                  <span>Hands-on team training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-3">→</span>
                  <span>Playbooks & documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 mr-3">→</span>
                  <span>Success metrics & dashboards</span>
                </li>
              </ul>
              <a href="#contact" className="block w-full text-center bg-white text-slate-900 px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors font-medium">
                Get Started
              </a>
            </div>

            {/* Scale Package */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-xl transition-all">
              <div className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">Partnership</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Scale & Optimize</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Ongoing support to expand use cases, optimize performance, and embed AI into your operating model.
              </p>
              <div className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-200">3-6 month retainer</div>
              <ul className="space-y-3 mb-10 text-slate-600">
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">→</span>
                  <span>Monthly strategic reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">→</span>
                  <span>Ongoing team coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">→</span>
                  <span>Use case expansion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-400 mr-3">→</span>
                  <span>Performance optimization</span>
                </li>
              </ul>
              <a href="#contact" className="block w-full text-center bg-white border-2 border-slate-900 text-slate-900 px-6 py-3 rounded-lg hover:bg-slate-900 hover:text-white transition-all font-medium">
                Let's Talk
              </a>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-slate-600">
              Pricing tailored to your organization's size and needs.<br />
              <a href="#contact" className="text-slate-900 font-semibold hover:underline">Get in touch</a> for a straightforward proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What We Believe</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">AI adoption is a capability challenge, not a tooling issue</h3>
              <p className="text-slate-600 text-lg">
                Your teams already have access to ChatGPT, Writer, Claude. The gap isn't features. It's knowing what good looks like and how to think differently.
              </p>
            </div>

            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The best use cases come from your team, not from consultants</h3>
              <p className="text-slate-600 text-lg">
                We don't bring a playbook of generic use cases. We teach your people to see opportunities in their own workflows. That's how AI sticks.
              </p>
            </div>

            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Governance accelerates adoption — it doesn't slow it down</h3>
              <p className="text-slate-600 text-lg">
                When done right, governance gives teams confidence to experiment. We help you build guardrails that enable, not block.
              </p>
            </div>

            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">AI rewards the people who think differently</h3>
              <p className="text-slate-600 text-lg">
                The competitive advantage isn't the model you use. It's how your people frame problems, spot patterns, and work in new ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Lead Gen Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Talk
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-6">
              Book a 30-minute call. No sales pitch, no obligations.<br />
              Just a straightforward conversation about where you are and where you want to go.
            </p>
            <p className="text-lg text-slate-400">
              Prefer to call? <a href="tel:07356015684" className="text-white font-semibold hover:underline">07356 015684</a>
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 md:p-12">
            <form action="https://formsubmit.co/matt.coughlan@outlook.com" method="POST" className="space-y-6">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New AI Craft Consult Inquiry" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{display: 'none'}} />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-900"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-900"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-900"
                  placeholder="Your Company Ltd"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  What's going on? (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-900"
                  placeholder="Brief context helps, but not required..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-all font-medium text-lg"
              >
                Book a Call
              </button>

              <p className="text-sm text-slate-500 text-center">
                We'll send you a calendar link within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div className="md:col-span-2">
              <div className="text-xl font-bold text-slate-900 mb-4">AI Craft Consult</div>
              <p className="text-slate-600 mb-4 max-w-md leading-relaxed">
                Manchester-based AI adoption consultancy. We build capability, not dependency.
              </p>
              <p className="text-sm text-slate-500">
                <a href="mailto:hello@aicraftconsult.com" className="hover:text-slate-900 transition-colors">hello@aicraftconsult.com</a><br />
                <a href="tel:07356015684" className="hover:text-slate-900 transition-colors">07356 015684</a><br />
                Manchester, UK
              </p>
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#services" className="hover:text-slate-900 transition-colors">Discovery & Strategy</a></li>
                <li><a href="#services" className="hover:text-slate-900 transition-colors">Pilot Implementation</a></li>
                <li><a href="#services" className="hover:text-slate-900 transition-colors">Scale & Optimize</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#approach" className="hover:text-slate-900 transition-colors">How It Works</a></li>
                <li><a href="#contact" className="hover:text-slate-900 transition-colors">Get in Touch</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2026 AI Craft Consult</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
