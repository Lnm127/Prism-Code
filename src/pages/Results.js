import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Award, CheckCircle, Target, AlertCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

const Results = () => {
  const { results } = siteData;

  const getModelColor = (index) => {
    const colors = [
      'from-green-600 to-green-700',
      'from-blue-600 to-blue-700',
      'from-purple-600 to-purple-700'
    ];
    return colors[index % colors.length];
  };

  const getAccuracyColor = (accuracy) => {
    const numAccuracy = parseFloat(accuracy);
    if (numAccuracy >= 80) return 'text-green-600';
    if (numAccuracy >= 70) return 'text-yellow-600';
    return 'text-red-600';
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
              {results.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {results.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Model Performance Summary */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Model Performance Summary
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {results.models.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-8 card-hover"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getModelColor(index)} rounded-full flex items-center justify-center`}>
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{model.name}</h3>
                      <p className="text-gray-600">Machine Learning Model</p>
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${getAccuracyColor(model.accuracy)}`}>
                    {model.accuracy}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{model.precision}</div>
                    <div className="text-sm text-gray-600">Precision</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{model.recall}</div>
                    <div className="text-sm text-gray-600">Recall</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{model.f1Score}</div>
                    <div className="text-sm text-gray-600">F1-Score</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-1">{model.auc}</div>
                    <div className="text-sm text-gray-600">AUC</div>
                  </div>
                </div>

                {index === 0 && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-green-800 font-medium">Best Performing Model</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="section-padding gradient-bg">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Key Findings
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {results.keyFindings.map((finding, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Finding {index + 1}
                    </h3>
                    <p className="text-gray-600">{finding}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Implications */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Clinical Implications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {results.clinicalImplications.map((implication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-6 text-center card-hover"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Clinical Impact {index + 1}
                </h3>
                <p className="text-gray-600">{implication}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Importance */}
      <section className="section-padding gradient-bg">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Feature Importance
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The following features were identified as most significant in predicting survival outcomes:
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="card p-8">
              <div className="space-y-6">
                {results.featureImportance.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-accent-600 to-accent-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-gradient-to-r from-accent-600 to-accent-700 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${100 - (index * 15)}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-400">
                      {100 - (index * 15)}%
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROC Curve Visualization */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Model Comparison
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card p-8 text-center"
          >
            <img
              src="/images/roc-curve-comparison.png"
              alt="ROC Curve Comparison"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
            />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              ROC curves comparing KNN and Logistic Regression models. The KNN model demonstrates superior performance with a higher Area Under the Curve (AUC), making it our recommended choice for this classification task.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <AlertCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Key Insight
            </h2>
            <p className="text-2xl mb-8 max-w-4xl mx-auto">
              The KNN model demonstrates superior performance with a higher Area Under the Curve (AUC), making it our recommended choice for this classification task.
            </p>
            <div className="card bg-white/10 border border-white/20 p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                These results are based on our current dataset and may be updated as we gather more data and refine our models.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Results;