
import React from 'react';
import { Shield, Zap, Heart, CheckCircle, Smartphone, Layout, Globe, Lock } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <div className="py-24 space-y-24">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900">HomeEase</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          The radical transparency platform for Nigerian renters. No agents. No hidden fees. Just homes.
        </p>
      </section>

      {/* CORE PROPOSITION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Zap, title: 'Direct Access', desc: 'Message landlords directly. Schedule viewings without paying "inspection fees" to middlemen.', color: 'text-amber-500' },
          { icon: Shield, title: 'Verified Property', desc: 'Every listing undergoes a 3-step verification to ensure it exists and matches the description.', color: 'text-indigo-500' },
          { icon: Heart, title: 'Rent Fairness', desc: 'A transparent bidding and contract system that prevents arbitrary price hikes.', color: 'text-rose-500' }
        ].map((item, idx) => (
          <div key={idx} className="p-10 bg-white border border-slate-100 shadow-lg rounded-[2.5rem] hover:-translate-y-1 transition-all">
            <item.icon className={`w-12 h-12 mb-6 ${item.color}`} />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* PROTOTYPE SHOWCASE */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-400/30 text-xs font-bold uppercase tracking-widest">
                E-Lab Prototype
              </div>
              <h2 className="text-4xl font-bold">Concept Explanation</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                HomeEase is designed as a mobile-first web application. Its architecture focuses on bridging the trust gap between landlords and tenants using digital escrow and verified ID protocols.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-6 h-6 text-indigo-400" />
                  <span className="font-medium">Responsive Web App</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Layout className="w-6 h-6 text-indigo-400" />
                  <span className="font-medium">User Dashboard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-indigo-400" />
                  <span className="font-medium">Property Map</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="w-6 h-6 text-indigo-400" />
                  <span className="font-medium">Escrow System</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400" alt="Home Listings" className="rounded-3xl shadow-2xl border-4 border-slate-800 object-cover h-full" />
               <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400" alt="Mobile Payment" className="rounded-3xl shadow-2xl border-4 border-slate-800 mt-8 object-cover h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl font-bold text-slate-900">Measuring Impact</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          If widely adopted, HomeEase could reduce the total cost of acquiring new housing for the average Nigerian by <strong>₦250,000 to ₦500,000</strong> annually—money that can be reinvested into education and health.
        </p>
        <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 flex flex-col md:flex-row items-center justify-around gap-8">
           <div className="text-center">
              <div className="text-3xl font-bold text-emerald-700">100%</div>
              <div className="text-emerald-600 text-sm">Transparency</div>
           </div>
           <div className="text-center">
              <div className="text-3xl font-bold text-emerald-700">0</div>
              <div className="text-emerald-600 text-sm">Agent Fees</div>
           </div>
           <div className="text-center">
              <div className="text-3xl font-bold text-emerald-700">24/7</div>
              <div className="text-emerald-600 text-sm">Support</div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
