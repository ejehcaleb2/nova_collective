
import React from 'react';
import { BarChart3, Map, Search, Database, FileText, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as ReTooltip, ResponsiveContainer, Legend } from 'recharts';

const CITY_DATA = [
  { name: 'Lagos', rent: 100, agentFee: 40 },
  { name: 'Kano', rent: 60, agentFee: 20 },
  { name: 'Sokoto', rent: 45, agentFee: 15 },
  { name: 'Abuja', rent: 90, agentFee: 35 },
];

const Research: React.FC = () => {
  return (
    <div className="py-24 space-y-24">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-sm font-bold uppercase tracking-widest">
            Critical Brief
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">The Nigerian <span className="text-rose-600">Housing Crisis</span></h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Our research focused on the intersection of urban growth and regulatory failure. We uncovered a systemic crisis where demand outstrips supply, and middlemen exploit the gap.
          </p>
        </div>
      </section>

      {/* DATA VISUALIZATION */}
      <section className="bg-white border-y border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="space-y-8">
              <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
                <h3 className="text-2xl font-bold mb-4">Key Findings</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <AlertCircle className="w-6 h-6 text-rose-400 flex-shrink-0" />
                    <p className="text-slate-300">Agent fees in Lagos can reach up to 40% of the first year's rent.</p>
                  </li>
                  <li className="flex gap-4">
                    <Search className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                    <p className="text-slate-300">Over 60% of tenants found their properties through informal, unverified networks.</p>
                  </li>
                  <li className="flex gap-4">
                    <Database className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <p className="text-slate-300">Nigeria requires at least 1M new units per year for the next 20 years.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div className="h-[400px] w-full bg-slate-50 p-6 rounded-[2rem] border border-slate-200">
                <h4 className="text-lg font-bold text-slate-800 mb-8">Relative Cost Index: Rent vs. Hidden Fees</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={CITY_DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ReTooltip />
                    <Legend />
                    <Bar dataKey="rent" name="Base Rent Index" fill="#6366f1" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="agentFee" name="Middleman Fees" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-slate-500 italic text-center">Data synthesized from field surveys and expert interviews (E-Lab Week 8).</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED ANALYSIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
           <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center">
              <Map className="w-8 h-8 text-indigo-600" />
           </div>
           <h3 className="text-3xl font-bold text-slate-900">Geographic Focus</h3>
           <p className="text-lg text-slate-600 leading-relaxed">
             Our study focused on <strong>Lagos, Kano, and Sokoto</strong>. Lagos represents the hyper-congested economic hub, Kano represents a rapidly expanding northern trade center, and Sokoto provides insights into secondary city growth patterns.
           </p>
           <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
             <h4 className="font-bold text-indigo-900 mb-2">Expert Insight: Fred Nkubito</h4>
             <p className="text-indigo-800 italic">"The transparency gap is wider than the supply gap. Even with more houses, the current predatory brokerage system will keep people in slums."</p>
           </div>
        </div>
        <div className="space-y-8">
           <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-emerald-600" />
           </div>
           <h3 className="text-3xl font-bold text-slate-900">Societal Impact</h3>
           <p className="text-lg text-slate-600 leading-relaxed">
             The housing crisis isn't just about shelter; it's about stability. High upfront costs (often 2 years rent requested in advance) prevent young professionals from building savings, trapping them in a cycle of financial insecurity.
           </p>
           <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-slate-700">
                 <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                 <span>Delayed wealth accumulation</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-700">
                 <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                 <span>Forced migration to peri-urban slums</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-700">
                 <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                 <span>Increased urban transport congestion</span>
              </li>
           </ul>
        </div>
      </section>
    </div>
  );
};

export default Research;
