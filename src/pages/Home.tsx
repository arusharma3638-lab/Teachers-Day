import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Star, Users, Award, Lightbulb } from 'lucide-react';
import { inspirationalQuotes } from '../data/quotes';

const Home: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Educational Excellence",
      description: "Dedicated to fostering a love of learning and academic achievement."
    },
    {
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Care & Compassion",
      description: "Creating supportive environments where every student feels valued."
    },
    {
      icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Innovation",
      description: "Using creative teaching methods to inspire and engage students."
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Community Building",
      description: "Bringing together students, families, and educators as one community."
    }
  ];

  const stats = [
    { number: "10M+", label: "Students Inspired" },
    { number: "500K+", label: "Teachers Celebrated" },
    { number: "50+", label: "Countries Participating" },
    { number: "25", label: "Years of Impact" }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Celebrating
              </span>
              <br />
              <span className="text-gray-800">Our Amazing Teachers</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              Honoring the dedicated educators who shape minds, inspire hearts, and create the future.
            </p>
          </motion.div>

          {/* Rotating Quotes */}
          <motion.div
            key={currentQuoteIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 max-w-4xl mx-auto shadow-xl border border-white/20"
          >
            <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 mb-3 sm:mb-4 italic">
              "{inspirationalQuotes[currentQuoteIndex].text}"
            </blockquote>
            <cite className="text-base sm:text-lg text-blue-600 font-semibold">
              — {inspirationalQuotes[currentQuoteIndex].author}
            </cite>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <button
              onClick={() => navigate('/teachers')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Explore Teacher Stories
            </button>
            <button
              onClick={() => navigate('/quiz')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 text-sm sm:text-base"
            >
              Take the Quiz
            </button>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Why Teachers Matter
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Teachers are the foundation of our society, shaping the minds and hearts of future generations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Global Impact
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The reach and influence of dedicated educators around the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Join the Celebration
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
              Take a moment to appreciate the teachers who have made a difference in your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button
                onClick={() => navigate('/history')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                Learn About Teachers' Day
              </button>
              <button
                onClick={() => navigate('/teachers')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg border border-gray-200 text-sm sm:text-base"
              >
                Meet Our Teachers
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;