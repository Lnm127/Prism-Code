import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

const Contact = () => {
  const { contact } = siteData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission for demo
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
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
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {contact.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {contact.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Direct Contact
              </h2>

              <div className="space-y-6">
                <div className="card p-6 card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <a 
                        href={`mailto:${contact.email}`}
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card p-6 card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                      <Github className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">GitHub</h3>
                      <a 
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        View our repositories
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Response Time</h3>
                      <p className="text-gray-600">{contact.responseTime}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 card p-6 bg-gradient-to-r from-primary-50 to-secondary-50 border-l-4 border-primary-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Academic Collaboration
                </h3>
                <p className="text-gray-700">
                  We welcome collaboration opportunities with researchers, students, and healthcare professionals 
                  interested in data science applications in healthcare.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="card p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send us a Message
                </h2>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-800">Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}

                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-dots w-5 h-5">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-gray-500 mt-0.5" />
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> This contact form is for demonstration purposes. 
                      For actual inquiries, please use the direct email address provided above.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Contact */}
      <section className="section-padding gradient-bg">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Connect with Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteData.team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6 text-center card-hover"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 text-sm mb-1">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.id}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;