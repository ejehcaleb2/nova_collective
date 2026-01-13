
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CHALLENGES } from '../constants';
import { ArrowLeft, ArrowRight, Info, Play, Layers } from 'lucide-react';

const Challenge: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const challengeId = parseInt(id || '1');
  const challenge = CHALLENGES.find(c => c.id === challengeId);
  const totalChallenges = CHALLENGES.length;

  if (!challenge) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Challenge not found</h2>
          <Link to="/" className="text-indigo-600 hover:underline mt-4 block">Back Home</Link>
        </div>
      </div>
    );
  }

  const nextChallengeId = challengeId < totalChallenges ? challengeId + 1 : null;
  const prevChallengeId = challengeId > 1 ? challengeId - 1 : null;

  return (
    <div className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Progress Indicator */}
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <div className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">
            Current Progress
          </div>
          <div className="text-sm font-bold text-indigo-600">
            Challenge <span className="text-xl">{challenge.id}</span> <span className="text-slate-300 mx-1">/</span> {totalChallenges}
          </div>
        </div>
        <div className="w-full flex gap-1.5 h-1.5">
          {CHALLENGES.map((c) => (
            <div 
              key={c.id} 
              className={`flex-1 rounded-full transition-all duration-700 ${
                c.id <= challenge.id 
                  ? 'bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.3)]' 
                  : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Top */}
      <div className="flex justify-between items-center bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
        <Link 
          to={prevChallengeId ? `/challenge/${prevChallengeId}` : '#'} 
          className={`flex items-center text-xs font-bold transition-colors uppercase tracking-widest ${!prevChallengeId ? 'text-slate-200 cursor-not-allowed' : 'text-slate-500 hover:text-indigo-600'}`}
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Previous
        </Link>
        <div className="hidden md:block text-[10px] uppercase tracking-[0.2em] font-black text-indigo-400">
          Activity Portfolio
        </div>
        <Link 
          to={nextChallengeId ? `/challenge/${nextChallengeId}` : '#'} 
          className={`flex items-center text-xs font-bold transition-colors uppercase tracking-widest ${!nextChallengeId ? 'text-slate-200 cursor-not-allowed' : 'text-slate-500 hover:text-indigo-600'}`}
        >
          Next <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>

      {/* Main Header */}
      <header className="pt-8 space-y-10 text-center max-w-5xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
            {challenge.title}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
             <div className="flex items-center px-5 py-2.5 bg-indigo-50/50 text-indigo-500 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-100/50">
                <Info className="w-3.5 h-3.5 mr-2" />
                Objective: <span className="ml-1 text-slate-500 font-medium lowercase tracking-normal text-sm italic">{challenge.objective}</span>
             </div>
          </div>
        </div>
      </header>

      {/* Activity Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-12">
        {/* Text Details */}
        <section className="lg:col-span-5 space-y-10">
          <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 space-y-8">
            <div className="space-y-2">
              <h2 className="text-sm font-black text-indigo-600 uppercase tracking-widest flex items-center">
                 <Layers className="w-4 h-4 mr-2" /> The Narrative
              </h2>
              <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
            </div>
            
            <p className="text-base text-slate-500 leading-relaxed font-normal">
              {challenge.explanation}
            </p>
            
            {challenge.reflections && (
              <div className="pt-10 border-t border-slate-50 space-y-4">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Learning Outcomes</h3>
                <div className="bg-slate-50/80 p-8 rounded-[2rem] border-l-4 border-indigo-500 relative">
                  <p className="text-slate-600 italic leading-relaxed font-medium text-base">
                    "{challenge.reflections}"
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Media (Actual Project Display) */}
        <section className="lg:col-span-7 space-y-12">
           <div className="space-y-16">
              {challenge.visuals.map((visual, idx) => (
                <div key={idx} className="group space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700" style={{ animationDelay: `${idx * 200}ms` }}>
                  {visual.type === 'video' ? (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-rose-500 font-black text-[10px] uppercase tracking-[0.25em]">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Featured Footage</span>
                      </div>
                      <div className="aspect-video w-full rounded-[3rem] overflow-hidden bg-slate-950 shadow-2xl relative border-[6px] border-slate-900 group-hover:shadow-indigo-500/10 transition-shadow duration-500">
                        <iframe 
                          src={visual.url} 
                          className="w-full h-full" 
                          title={visual.caption}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-indigo-500 font-black text-[10px] uppercase tracking-[0.25em]">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Artifact Preview</span>
                      </div>
                      <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border-[6px] border-white group transition-all duration-500">
                        <img src={visual.url} alt={visual.caption} className="w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                           <p className="text-white font-bold text-lg">{visual.caption}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="px-6 py-4 bg-slate-100/50 rounded-2xl inline-block border-l-4 border-slate-300 group-hover:border-indigo-400 transition-colors duration-300">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest italic">
                      Fig {idx + 1}: {visual.caption}
                    </p>
                  </div>
                </div>
              ))}
           </div>
        </section>
      </div>

      {/* Bottom Nav */}
      <div className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">NOVA Collective &bull; E-Lab Journey</div>
         <div className="flex space-x-6">
            {prevChallengeId && (
              <Link to={`/challenge/${prevChallengeId}`} className="group flex items-center space-x-3 text-slate-400 hover:text-indigo-600 transition-colors">
                <div className="p-4 bg-white border border-slate-100 group-hover:border-indigo-200 rounded-2xl shadow-sm transition-all">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
              </Link>
            )}
            {nextChallengeId && (
              <Link to={`/challenge/${nextChallengeId}`} className="group flex items-center space-x-3 text-slate-400 hover:text-indigo-600 transition-colors text-right">
                <span className="text-xs font-black uppercase tracking-widest hidden sm:block">Forward</span>
                <div className="p-4 bg-indigo-600 text-white rounded-2xl shadow-xl shadow-indigo-200 group-hover:bg-indigo-700 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            )}
         </div>
      </div>
    </div>
  );
};

export default Challenge;
