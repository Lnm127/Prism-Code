import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Brain, TrendingUp, Users, Target, Award } from 'lucide-react';
import { siteData } from '../data/siteData';

const Home = () => {
  const stats = [
    { label: 'Model Accuracy', value: '80%', icon: Target },
    { label: 'AUC Score', value: '0.93', icon: TrendingUp },
    { label: 'Patient Records', value: '299', icon: Heart },
    { label: 'Team Members', value: '3', icon: Users }
  ];

  const highlights = [
    'Advanced Machine Learning Models',
    'Real-world Healthcare Data',
    'Clinical Decision Support',
    'Interactive Visualizations'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-gradient">Data Science</span> Meets
                <br />
                <span className="text-gradient">Healthcare</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {siteData.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/project" className="btn-primary">
                  Explore Project
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/visualizations" className="btn-secondary">
                  View Visualizations
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 animate-float">
                <img
                  src={siteData.hero.featuredImage}
                  alt="Data Science Analytics"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-2xl blur-xl transform scale-110"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="section-padding gradient-bg">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Featured Project
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/heart-banner.jpeg"
                alt="Heart Health Analytics"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Heart Failure Survival Prediction
                </h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                {siteData.features[0].description}
              </p>
              <div className="space-y-3 mb-8">
                {siteData.features[0].highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
              <Link to="/project" className="btn-primary">
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Makes Our Work Special
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center card-hover"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent-600 to-accent-700 rounded-full mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight}</h3>
                <p className="text-gray-600">
                  Excellence in every aspect of our data science approach
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="section-padding gradient-bg">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explore Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've organized our work into easy-to-navigate sections to help you understand our approach and findings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.navigation.slice(1).map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={item.path} className="block">
                  <div className="card p-6 card-hover group">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {item.name}
                      </h3>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                    </div>
                    <p className="text-gray-600">
                      {item.name === 'Project' && 'Detailed background and objectives'}
                      {item.name === 'Methodology' && 'Our analytical approach and techniques'}
                      {item.name === 'Results' && 'Key findings and insights'}
                      {item.name === 'Visualizations' && 'Interactive data visualizations'}
                      {item.name === 'Team' && 'Meet the minds behind the project'}
                      {item.name === 'Contact' && 'Get in touch with us'}
                      {item.name === 'References' && 'Sources and further reading'}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Explore Our Research?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Dive into our comprehensive analysis and discover how machine learning can transform healthcare outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/project" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Start with Project Overview
              </Link>
              <Link to="/results" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                View Results
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;