
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="py-24 space-y-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">The NOVA Collective</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our team is comprised of visionary students from the E-Lab course, each bringing a unique set of skills to the mission of housing equity.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.id} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover min-h-[300px]" />
            </div>
            <div className="md:w-3/5 p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h2>
                <div className="text-indigo-600 font-semibold mb-6 uppercase tracking-wider text-sm">{member.role}</div>
                <p className="text-slate-600 leading-relaxed mb-8">{member.bio}</p>
              </div>
              <div className="flex space-x-4">
                <button className="p-3 bg-slate-100 rounded-xl text-slate-600 hover:bg-indigo-600 hover:text-white transition-colors"><Mail className="w-5 h-5" /></button>
                <button className="p-3 bg-slate-100 rounded-xl text-slate-600 hover:bg-indigo-600 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></button>
                <button className="p-3 bg-slate-100 rounded-xl text-slate-600 hover:bg-indigo-600 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-indigo-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl font-bold">Collaborative Philosophy</h2>
          <p className="text-indigo-200 max-w-2xl mx-auto text-lg leading-relaxed">
            "Innovation is not the work of a single mind, but the friction between different perspectives. At NOVA, we believe that interdisciplinary collaboration is the only way to solve complex societal problems."
          </p>
          <div className="flex justify-center space-x-12 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-indigo-300 text-sm">Meeting Hours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-indigo-300 text-sm">Key Disciplines</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1</div>
              <div className="text-indigo-300 text-sm">Unified Vision</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
