import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, PieChart, Box, TrendingUp, X, ZoomIn } from 'lucide-react';
import { siteData } from '../data/siteData';

const Visualizations = () => {
  const { visualizations } = siteData;
  const [selectedChart, setSelectedChart] = useState(null);

  const chartTypeIcons = {
    bar: BarChart3,
    pie: PieChart,
    box: Box,
    heatmap: TrendingUp,
    roc: TrendingUp
  };

  const chartTypeColors = {
    bar: 'from-blue-600 to-blue-700',
    pie: 'from-green-600 to-green-700',
    box: 'from-purple-600 to-purple-700',
    heatmap: 'from-red-600 to-red-700',
    roc: 'from-orange-600 to-orange-700'
  };

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
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {visualizations.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {visualizations.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visualizations Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {visualizations.charts.map((chart, index) => {
              const Icon = chartTypeIcons[chart.type] || BarChart3;
              const colorClass = chartTypeColors[chart.type] || 'from-primary-600 to-secondary-600';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card overflow-hidden card-hover group cursor-pointer"
                  onClick={() => setSelectedChart(chart)}
                >
                  <div className="relative">
                    <img
                      src={chart.image}
                      alt={chart.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                        <ZoomIn className="h-5 w-5 text-gray-700" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${colorClass} rounded-full flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {chart.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {chart.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${colorClass} text-white`}>
                        {chart.type.toUpperCase()}
                      </span>
                      <span className="text-primary-600 text-sm font-medium group-hover:text-primary-700">
                        Click to enlarge →
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chart Types Info */}
      <section className="section-padding gradient-bg">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Visualization Types
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(chartTypeIcons).map(([type, Icon], index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center card-hover"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${chartTypeColors[type]} rounded-full mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 capitalize">
                  {type} Chart
                </h3>
                <p className="text-gray-600 text-sm">
                  {type === 'bar' && 'Clear visualization of categorical data distributions'}
                  {type === 'pie' && 'Proportional representation of data segments'}
                  {type === 'box' && 'Statistical distribution analysis with quartiles'}
                  {type === 'heatmap' && 'Correlation matrix showing feature relationships'}
                  {type === 'roc' && 'Model performance comparison curves'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Notes */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="card p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Visualization Analysis
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                All visualizations were generated using Python's data visualization libraries and represent actual patient data analysis. 
                Each chart provides unique insights into different aspects of our dataset, helping us understand patterns, 
                relationships, and distributions that inform our machine learning models.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for enlarged view */}
      <AnimatePresence>
        {selectedChart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedChart(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative max-w-5xl w-full bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedChart(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="p-4">
                <img
                  src={selectedChart.image}
                  alt={selectedChart.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div className="p-6 border-t border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${chartTypeColors[selectedChart.type]} rounded-full flex items-center justify-center`}>
                    {React.createElement(chartTypeIcons[selectedChart.type], { className: "h-5 w-5 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedChart.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${chartTypeColors[selectedChart.type]} text-white`}>
                      {selectedChart.type.toUpperCase()}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {selectedChart.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Visualizations;