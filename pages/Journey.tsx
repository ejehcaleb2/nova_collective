
import React from 'react';
import { Rocket, Coffee, Users, Search, Target, Flag } from 'lucide-react';

const Journey: React.FC = () => {
  return (
    <div className="py-24 space-y-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-slate-900">Our E-Lab Journey</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          From the first lecture to the final pitch. A 12-week odyssey of learning and innovation.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-24">
          {[
            { 
              week: 'Week 1-2', 
              title: 'The Spark of Curiosity', 
              desc: 'Formation of NOVA Collective. We spent late nights in the student hub brainstorming societal gaps in Nigeria. We decided to focus on Housing after hearing Fatima’s personal story about rental exploitation.', 
              icon: Rocket,
              image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
            },
            { 
              week: 'Week 3-5', 
              title: 'Getting Our Hands Dirty', 
              desc: 'The Help-Lab phase. We realized that innovation is empty without community understanding. Our school cleanup activity taught us about local infrastructure vulnerabilities first-hand.', 
              icon: Users,
              image: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=800'
            },
            { 
              week: 'Week 6-8', 
              title: 'The Data Deep-Dive', 
              desc: 'Conducting surveys in Lagos and Kano. This was our toughest phase—dealing with data inconsistencies and securing an interview with Fred Nkubito. His insights forced us to pivot our solution to focus on transparency.', 
              icon: Search,
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
            },
            { 
              week: 'Week 9-11', 
              title: 'Building HomeEase', 
              desc: 'Translating research into code and design. We developed the prototype, focusing on a direct-to-consumer model that bypasses the predatory agent system entirely.', 
              icon: Target,
              image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800'
            },
            { 
              week: 'Week 12', 
              title: 'The Grand Synthesis', 
              desc: 'Preparing for the $10,000 grant pitch. We consolidated our 12-week journey into a 10-minute presentation. Win or lose, the journey redefined how we see social problems.', 
              icon: Flag,
              image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800'
            }
          ].map((item, idx) => (
            <div key={idx} className={`relative flex flex-col items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="md:w-1/2 p-8">
                 <div className={`bg-white border border-slate-100 p-8 rounded-[2rem] shadow-xl space-y-4 hover:border-indigo-200 transition-colors`}>
                    <div className="flex items-center space-x-3 text-indigo-600 font-bold uppercase tracking-widest text-xs">
                       <item.icon className="w-5 h-5" />
                       <span>{item.week}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                 </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center z-10 hidden md:flex shadow-md">
                 <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
              </div>
              <div className="md:w-1/2 p-8">
                 <img src={item.image} alt={item.title} className="rounded-[2rem] shadow-lg w-full object-cover h-64 hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
           <h2 className="text-3xl font-bold text-indigo-900">Lessons Learned</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              <div className="p-8 bg-white rounded-3xl border border-indigo-100">
                 <h4 className="font-bold text-indigo-900 mb-2">Collaboration is Key</h4>
                 <p className="text-slate-600">We learned that individual talent is multiplied only through mutual trust and clear communication.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-indigo-100">
                 <h4 className="font-bold text-indigo-900 mb-2">Pivoting is Strength</h4>
                 <p className="text-slate-600">Stubbornness is the enemy of innovation. Being willing to change our solution based on expert feedback was our biggest win.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;
