
import React from 'react';
import { Rocket, Mail, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="text-indigo-400 w-6 h-6" />
              <span className="text-xl font-bold tracking-tight">NOVA <span className="text-indigo-400">COLLECTIVE</span></span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              A university think tank dedicated to solving the housing crisis in Nigeria through data-driven innovation and community collaboration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#/journey" className="hover:text-indigo-400">Our Journey</a></li>
              <li><a href="#/research" className="hover:text-indigo-400">Research Brief</a></li>
              <li><a href="#/solution" className="hover:text-indigo-400">HomeEase App</a></li>
              <li><a href="#/achievements" className="hover:text-indigo-400">Milestones</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Project Details</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Course: E-Lab 2024</li>
              <li>Project: HomeEase Prototype</li>
              <li>Region: Nigeria</li>
              <li>Contact: info@novacollective.edu</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} NOVA Collective. Built for academic purposes during E-Lab.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
