import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { siteData } from '../data/siteData';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Create search index
  const searchData = [
    { title: 'Home', path: '/', content: siteData.hero.description },
    { title: 'Project Overview', path: '/project', content: siteData.project.overview },
    { title: 'Methodology', path: '/methodology', content: 'Data Science & Machine Learning Methodology' },
    { title: 'Results', path: '/results', content: siteData.results.overview },
    { title: 'Visualizations', path: '/visualizations', content: siteData.visualizations.description },
    { title: 'Team', path: '/team', content: 'Meet our amazing team' },
    { title: 'Contact', path: '/contact', content: siteData.contact.description },
    { title: 'References', path: '/references', content: 'References and resources' },
    ...siteData.team.map(member => ({
      title: member.name,
      path: '/team',
      content: `${member.role} - ${member.specialty}`
    })),
    ...siteData.results.models.map(model => ({
      title: `${model.name} Model`,
      path: '/results',
      content: `Accuracy: ${model.accuracy}, AUC: ${model.auc}`
    }))
  ];

  const fuse = new Fuse(searchData, {
    keys: ['title', 'content'],
    threshold: 0.3,
    includeMatches: true
  });

  useEffect(() => {
    if (query.length > 0) {
      const searchResults = fuse.search(query);
      setResults(searchResults.slice(0, 8));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleResultClick = (path) => {
    navigate(path);
    setIsOpen(false);
    setQuery('');
  };

  const highlightMatch = (text, matches) => {
    if (!matches || matches.length === 0) return text;
    
    let result = text;
    matches.forEach(match => {
      const { indices } = match;
      indices.forEach(([start, end]) => {
        const before = result.substring(0, start);
        const highlighted = result.substring(start, end + 1);
        const after = result.substring(end + 1);
        result = before + `<mark class="bg-yellow-200">${highlighted}</mark>` + after;
      });
    });
    
    return result;
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="flex items-center px-4 py-3 border-b border-gray-200">
                <SearchIcon className="h-5 w-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects, methodology, results..."
                  className="flex-1 outline-none text-lg"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {results.length > 0 ? (
                  <div className="py-2">
                    {results.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(result.item.path)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-gray-900">
                          {result.item.title}
                        </div>
                        <div className="text-sm text-gray-500 mt-1 truncate">
                          {result.item.content}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : query.length > 0 ? (
                  <div className="px-4 py-8 text-center text-gray-500">
                    No results found for "{query}"
                  </div>
                ) : (
                  <div className="px-4 py-8 text-center text-gray-500">
                    <SearchIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Start typing to search our content...</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Search;