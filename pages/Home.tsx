
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, Compass, BarChart3, Target, 
  ShieldCheck, AlertTriangle, Building, 
  CheckCircle2, Lightbulb, Recycle, Presentation
} from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const HOUSING_DATA = [
  { name: 'Deficit (Million Units)', value: 28, color: '#ef4444' },
  { name: 'Adequate Housing', value: 12, color: '#10b981' },
];

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
            alt="Collaboration Hub" 
            className="w-full h-full object-cover opacity-30 scale-100"
            loading="eager"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium">
              E-Lab Showcase 2024
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              NOVA <span className="text-indigo-400">Collective</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              Bridging the gap in Nigerian housing through data-driven advocacy and radical transparency.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/solution" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 flex items-center group">
                Explore HomeEase <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/journey" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 rounded-xl font-bold transition-all">
                The Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-indigo-600 font-bold uppercase tracking-widest text-sm">
              <Users className="w-5 h-5" />
              <span>Who We Are</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">A Think Tank Born from <span className="text-indigo-600">Innovation</span></h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              NOVA Collective is a specialized think tank formed during the intensive E-Lab course. 
              Our multidisciplinary team worked collaboratively over 12 weeks to identify a critical societal challenge: the exploitative nature of urban housing in Nigeria. 
              What started as a classroom project evolved into a comprehensive, research-backed solution aimed at social equity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-indigo-500 shadow-sm">
                <div className="text-3xl font-bold text-slate-900">12 Weeks</div>
                <div className="text-slate-500 text-sm font-medium">of Intensive Research</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-emerald-500 shadow-sm">
                <div className="text-3xl font-bold text-slate-900">1 Solution</div>
                <div className="text-slate-500 text-sm font-medium">Data-driven Approach</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1522071823991-b518ee7f1bb9?auto=format&fit=crop&q=80&w=1000" 
                alt="Collaborative Innovation" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-50 rounded-full -z-0"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-slate-100 rounded-2xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* 3. OUR TEAM PREVIEW */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">The People Behind the Progress</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Our diverse team brought expertise in engineering, business, and sociology to tackle the Nigerian housing crisis.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-100">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg text-slate-900">{member.name}</h3>
                  <p className="text-indigo-600 text-sm font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/team" className="inline-flex items-center text-indigo-600 font-bold hover:underline transition-all">
              Meet the Full Team <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. OUR JOURNEY (TIMELINE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">The E-Lab Timeline</h2>
            <p className="text-slate-600">Visualizing our 12-week evolution.</p>
          </div>
          <Compass className="w-12 h-12 text-slate-200 hidden md:block" />
        </div>
        <div className="relative space-y-12">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-200 hidden md:block"></div>
          {[
            { stage: 'Exploration', desc: 'Deep dive into societal problems and identifying the housing gap.', icon: 'Lightbulb', color: 'bg-amber-100 text-amber-600' },
            { stage: 'Community Work', desc: 'Help-Lab cleanup and local engagement with students.', icon: 'Recycle', color: 'bg-emerald-100 text-emerald-600' },
            { stage: 'Deep Research', desc: 'Expert interviews and data collection across three major cities.', icon: 'BarChart3', color: 'bg-blue-100 text-blue-600' },
            { stage: 'Prototyping', desc: 'Developing HomeEase: the transparency-focused housing app.', icon: 'Building', color: 'bg-indigo-100 text-indigo-600' },
            { stage: 'The Final Pitch', desc: 'Synthesizing the journey for the $10k social impact grant.', icon: 'Presentation', color: 'bg-rose-100 text-rose-600' },
          ].map((item, idx) => (
            <div key={idx} className="relative md:pl-24 group">
              <div className={`absolute left-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 z-10 hidden md:flex ${item.color} font-bold`}>
                {idx + 1}
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.stage}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. OUR RESEARCH */}
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 text-indigo-400 font-bold uppercase tracking-widest text-sm">
                <BarChart3 className="w-5 h-5" />
                <span>Research Summary</span>
              </div>
              <h2 className="text-4xl font-bold leading-tight">Nigeria's Quiet Crisis: <br/><span className="text-rose-400">Housing Deficit</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our research identified an alarming 28-million unit housing deficit in Nigeria. 
                In cities like Lagos and Kano, exploitative middlemen inflate rental costs by up to 40%, 
                disproportionately affecting low-to-middle income earners.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl font-extrabold text-indigo-400">28M</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mt-1">Units Deficit</div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl font-extrabold text-rose-400">40%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mt-1">Agent Fees</div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl font-extrabold text-emerald-400">3 Cities</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mt-1">Surveyed</div>
                </div>
              </div>
            </div>
            <div className="aspect-square w-full max-w-md mx-auto flex flex-col items-center justify-center bg-white/5 rounded-full p-8 border border-white/10">
               <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={HOUSING_DATA}
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {HOUSING_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center mt-4">
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest italic">Nigeria Housing Landscape (Million Units)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MISSION, VISION & PROBLEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 rounded-3xl bg-indigo-600 text-white shadow-xl shadow-indigo-500/20 flex flex-col justify-between">
            <Target className="w-12 h-12 mb-8 opacity-40" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-indigo-100 font-medium leading-relaxed italic">
                “Our mission is to make decent housing affordable and accessible for Nigerians by eliminating exploitative middlemen and reducing inflated rental costs…”
              </p>
            </div>
          </div>
          <div className="p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <ShieldCheck className="w-12 h-12 mb-8 text-indigo-600 opacity-40" />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                A Nigeria where everyone can access dignified, affordable housing without exploitation.
              </p>
            </div>
          </div>
          <div className="p-10 rounded-3xl bg-rose-50 border border-rose-100 flex flex-col justify-between">
            <AlertTriangle className="w-12 h-12 mb-8 text-rose-600 opacity-40" />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-rose-900">Problem</h3>
              <p className="text-rose-700 leading-relaxed font-medium">
                Nigeria faces a housing crisis driven by inflated rents and exploitative agents, forcing millions into unsafe living conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OUR SOLUTION PREVIEW */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/5] max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-[12px] border-slate-900">
                 <img 
                   src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" 
                   alt="HomeEase Mobile Interface" 
                   className="w-full h-full object-cover" 
                   loading="lazy"
                 />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold text-slate-900">Meet <span className="text-indigo-600">HomeEase</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                HomeEase is our direct-to-consumer housing platform designed specifically for the Nigerian market. 
                By connecting landlords directly with verified tenants, we eliminate the 10-20% "agent fees" that make housing inaccessible.
              </p>
              <ul className="space-y-5">
                {[
                  'Zero middleman commission structure',
                  'Verified landlord & property registry',
                  'Secure digital escrow for rent payment',
                  'Legal assistance built-in'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start space-x-4 group">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link to="/solution" className="inline-flex items-center px-10 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                  View Full Prototype <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
