
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Rocket } from 'lucide-react';
import { NAV_LINKS, CHALLENGES } from '../constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChallengesOpen, setIsChallengesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsChallengesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close all menus on navigation
  useEffect(() => {
    setIsMenuOpen(false);
    setIsChallengesOpen(false);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Rocket className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">NOVA <span className="text-indigo-600">COLLECTIVE</span></span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path) 
                    ? 'text-indigo-600 bg-indigo-50' 
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsChallengesOpen(!isChallengesOpen)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isChallengesOpen || location.pathname.includes('/challenge/')
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                E-Lab Challenges
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isChallengesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isChallengesOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white border border-slate-200 shadow-xl overflow-hidden py-2 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                    Select a Challenge
                  </div>
                  {CHALLENGES.map((challenge) => (
                    <Link
                      key={challenge.id}
                      to={`/challenge/${challenge.id}`}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        location.pathname === `/challenge/${challenge.id}`
                          ? 'bg-indigo-50 text-indigo-600 font-semibold'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="w-6 h-6 flex items-center justify-center bg-slate-100 rounded text-[10px] mr-3 group-hover:bg-indigo-100">
                          {challenge.id}
                        </span>
                        <span className="truncate">{challenge.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-indigo-600 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-3 rounded-md text-base font-medium ${
                isActive(link.path) ? 'text-indigo-600 bg-indigo-50' : 'text-slate-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">E-Lab Challenges</div>
            {CHALLENGES.map((c) => (
              <Link
                key={c.id}
                to={`/challenge/${c.id}`}
                className={`block px-3 py-3 rounded-md text-base ${
                  location.pathname === `/challenge/${c.id}`
                    ? 'text-indigo-600 bg-indigo-50 font-semibold'
                    : 'text-slate-600'
                }`}
              >
                Challenge {c.id}: {c.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
