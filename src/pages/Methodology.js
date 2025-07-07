import React from 'react';
import { motion } from 'framer-motion';
import { Database, Settings, Brain, BarChart3, Target, TrendingUp } from 'lucide-react';
import { siteData } from '../data/siteData';

const Methodology = () => {
  const { methodology } = siteData;

  const sectionIcons = {
    'Data Engineering Pipeline': Database,
    'Data Preprocessing Architecture': Settings,
    'Advanced Analytics & Machine Learning': Brain,
    'Model Optimization Framework': Target
  };

  const processIcons = [Database, Settings, Brain, BarChart3, Target, TrendingUp];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {methodology.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              This sophisticated methodology ensures robust, reproducible results while maintaining flexibility across diverse data science applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Process Overview
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processIcons.map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center card-hover"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Step {index + 1}
                </h3>
                <p className="text-gray-600">
                  {index === 0 && 'Data Collection & Quality Assessment'}
                  {index === 1 && 'Feature Engineering & Preprocessing'}
                  {index === 2 && 'Model Selection & Training'}
                  {index === 3 && 'Performance Evaluation & Metrics'}
                  {index === 4 && 'Model Optimization & Tuning'}
                  {index === 5 && 'Validation & Results Analysis'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Sections */}
      {methodology.sections.map((section, sectionIndex) => {
        const SectionIcon = sectionIcons[section.title] || Brain;
        return (
          <section
            key={sectionIndex}
            className={`section-padding ${sectionIndex % 2 === 0 ? 'gradient-bg' : 'bg-white'}`}
          >
            <div className="container-max">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mb-6">
                  <SectionIcon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.2 }}
                    className="card p-8 card-hover"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent-600 to-accent-700 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{itemIndex + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Technical Stack */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technical Stack & Tools
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card bg-gray-800 border border-gray-700 p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Data Processing</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Python & NumPy</li>
                <li>• Pandas for data manipulation</li>
                <li>• Scikit-learn preprocessing</li>
                <li>• Custom data pipelines</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card bg-gray-800 border border-gray-700 p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Machine Learning</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• K-Nearest Neighbors</li>
                <li>• Logistic Regression</li>
                <li>• Cross-validation</li>
                <li>• Hyperparameter tuning</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card bg-gray-800 border border-gray-700 p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">Visualization</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Matplotlib & Seaborn</li>
                <li>• ROC curve analysis</li>
                <li>• Feature importance plots</li>
                <li>• Statistical visualizations</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Best Practices & Standards
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Reproducibility', description: 'All experiments are reproducible with proper seed management and version control' },
              { title: 'Validation', description: 'Rigorous cross-validation and holdout testing for reliable performance estimates' },
              { title: 'Documentation', description: 'Comprehensive documentation of all processes and decision-making criteria' },
              { title: 'Ethics', description: 'Adherence to ethical guidelines and responsible AI practices in healthcare' }
            ].map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center card-hover"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{practice.title}</h3>
                <p className="text-gray-600 text-sm">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Methodology;