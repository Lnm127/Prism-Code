import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Code, BarChart3, Quote } from 'lucide-react';
import { siteData } from '../data/siteData';

const Team = () => {
  const { team } = siteData;

  const roleIcons = {
    'Website Creator': Code,
    'Programming Expert': Code,
    'Performance Analytics Specialist': BarChart3
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
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Amazing Team
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are passionate students from The LNM Institute of Information Technology working together to explore the fascinating world of Data Science, AI & ML.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => {
              const RoleIcon = roleIcons[member.role] || Code;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card overflow-hidden card-hover"
                >
                  {/* Profile Header */}
                  <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-6 text-white">
                    <div className="flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mx-auto mb-4">
                      <span className="text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                    <p className="text-primary-100 text-center text-sm">{member.id}</p>
                  </div>

                  {/* Profile Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent-600 to-accent-700 rounded-full mx-auto mb-4">
                      <RoleIcon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="text-center mb-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{member.role}</h4>
                      <div className="flex items-center justify-center text-gray-600 text-sm mb-2">
                        <GraduationCap className="h-4 w-4 mr-1" />
                        {member.degree}
                      </div>
                      <p className="text-primary-600 font-medium text-sm">{member.specialty}</p>
                    </div>

                    <p className="text-gray-600 text-sm text-center leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Institution Info */}
      <section className="section-padding gradient-bg">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="card p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The LNM Institute of Information Technology
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Our team consists of dedicated Computer Science Engineering students who are passionate about leveraging technology to solve real-world problems. We combine academic rigor with practical innovation to create meaningful impact in the field of data science and healthcare analytics.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-2">3</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-600 mb-2">CSE</div>
                  <div className="text-gray-600">Program</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600 mb-2">B.Tech</div>
                  <div className="text-gray-600">Degree</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="card p-8 bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-primary-600 max-w-4xl mx-auto">
              <Quote className="h-12 w-12 text-primary-600 mx-auto mb-6" />
              <blockquote className="text-2xl font-medium text-gray-900 italic mb-4">
                "Coming together is a beginning, staying together is progress, and working together is success."
              </blockquote>
              <cite className="text-gray-600">- Henry Ford</cite>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Contributions */}
      <section className="section-padding gradient-bg">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Team Contributions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card p-6 text-center card-hover"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Development</h3>
              <p className="text-gray-600">
                Created this comprehensive website showcasing our research and findings with modern design and user experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6 text-center card-hover"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Model Development</h3>
              <p className="text-gray-600">
                Developed and fine-tuned machine learning models, created comprehensive reports, and performed thorough model auditing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6 text-center card-hover"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Model Deployment</h3>
              <p className="text-gray-600">
                Specialized in performance analytics and successfully deployed the running model for real-world application.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;