
import React from 'react';
import { ACHIEVEMENTS, ICON_MAP } from '../constants';
import { Award, Star, TrendingUp, CheckCircle } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <div className="py-24 space-y-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-slate-900">Our Milestones</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Tracking the growth and collective wins of NOVA Collective through the E-Lab journey.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8">
        {ACHIEVEMENTS.map((ach) => {
          const IconComponent = ICON_MAP[ach.icon] || Award;
          return (
            <div key={ach.id} className="flex flex-col md:flex-row bg-white border border-slate-100 rounded-[2rem] p-10 shadow-lg items-center text-center md:text-left gap-8">
              <div className="w-20 h-20 bg-indigo-50 rounded-[1.5rem] flex items-center justify-center shrink-0">
                <IconComponent className="w-10 h-10 text-indigo-600" />
              </div>
              <div className="space-y-2 flex-grow">
                <div className="text-sm font-bold text-indigo-500 uppercase tracking-widest">{ach.date}</div>
                <h3 className="text-2xl font-bold text-slate-900">{ach.title}</h3>
                <p className="text-slate-600 leading-relaxed">{ach.description}</p>
              </div>
              <div className="shrink-0">
                 <div className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-bold flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" /> Completed
                 </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                 <h2 className="text-4xl font-bold">Skills Gained</h2>
                 <p className="text-slate-400 text-lg">Beyond the project deliverables, the E-Lab course allowed our team to master critical professional skills.</p>
                 <div className="flex flex-wrap gap-4">
                    {['Stakeholder Management', 'Social Innovation', 'Data Analytics', 'Strategic Pitching', 'Conflict Resolution'].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium border border-white/10">{skill}</span>
                    ))}
                 </div>
              </div>
              <div className="bg-indigo-600 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                 <Star className="absolute -top-10 -right-10 w-40 h-40 text-indigo-500/20" />
                 <h3 className="text-2xl font-bold mb-4 relative z-10">Collective Maturity</h3>
                 <p className="text-indigo-100 relative z-10">We moved from a group of four strangers to a cohesive research unit. Our ability to pivot during Week 7 research setbacks was a testament to our team maturity.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
