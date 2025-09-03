import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Globe, BookOpen, Users, Award, Clock } from 'lucide-react';

const History: React.FC = () => {
  const timelineEvents = [
    {
      year: "1966",
      title: "UNESCO/ILO Recommendation",
      description: "The Recommendation concerning the Status of Teachers was adopted, establishing international standards for the teaching profession.",
      icon: <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
    },
    {
      year: "1994",
      title: "First World Teachers' Day",
      description: "UNESCO proclaimed October 5 as World Teachers' Day to commemorate the 1966 Recommendation and raise awareness about teachers' contributions.",
      icon: <Globe className="h-5 w-5 sm:h-6 sm:w-6" />
    },
    {
      year: "2000",
      title: "Education for All Movement",
      description: "The Dakar Framework for Action emphasized the crucial role of teachers in achieving Education for All goals.",
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />
    },
    {
      year: "2015",
      title: "Sustainable Development Goals",
      description: "SDG 4 specifically highlighted the importance of qualified, professionally trained teachers for quality education.",
      icon: <Award className="h-5 w-5 sm:h-6 sm:w-6" />
    },
    {
      year: "Present",
      title: "Global Recognition",
      description: "World Teachers' Day is now celebrated in over 100 countries, recognizing teachers' vital role in society.",
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
    }
  ];

  const globalCelebrations = [
    {
      country: "India",
      date: "September 5",
      significance: "Dr. Sarvepalli Radhakrishnan's birthday, India's second President and renowned teacher."
    },
    {
      country: "China",
      date: "September 10",
      significance: "Established in 1985 to honor teachers and promote respect for education."
    },
    {
      country: "Argentina",
      date: "September 11",
      significance: "Commemorates the death of Domingo Faustino Sarmiento, known as 'the Father of the Classroom'."
    },
    {
      country: "Brazil",
      date: "October 15",
      significance: "Honors teachers and their contribution to Brazilian education and society."
    },
    {
      country: "Thailand",
      date: "January 16",
      significance: "National Teacher Day celebrating educators and their role in Thai culture."
    },
    {
      country: "Turkey",
      date: "November 24",
      significance: "Commemorates Mustafa Kemal Atatürk's declaration of the importance of teachers."
    }
  ];

  const facts = [
    {
      icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "100+ Countries",
      description: "World Teachers' Day is celebrated in over 100 countries worldwide."
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "70 Million Teachers",
      description: "There are approximately 70 million teachers globally working to educate our children."
    },
    {
      icon: <Calendar className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "October 5th",
      description: "The official date for World Teachers' Day as designated by UNESCO."
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Nobel Recognition",
      description: "Teaching is often called the profession that creates all other professions."
    }
  ];

  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            History of Teachers' Day
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            Discover the fascinating journey of how Teachers' Day evolved from a simple recognition to a global celebration 
            of the most important profession in our society.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
            Historical Timeline
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 sm:gap-8`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    {event.icon}
                  </div>
                </div>
                <div className={`flex-1 text-center lg:text-left ${index % 2 === 0 ? 'lg:pl-0' : 'lg:pr-0'}`}>
                  <div className="inline-block bg-blue-100 text-blue-800 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base font-semibold mb-2 sm:mb-3">
                    {event.year}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Celebrations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
            Global Celebrations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {globalCelebrations.map((celebration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                    {celebration.country}
                  </h3>
                  <div className="inline-block bg-teal-100 text-teal-800 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm font-semibold mb-3 sm:mb-4">
                    {celebration.date}
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {celebration.significance}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
            Did You Know?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white mb-3 sm:mb-4 mx-auto">
                  {fact.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">
                  {fact.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {fact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
            Join the Celebration
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            Teachers' Day is more than just a date on the calendar. It's a global movement to recognize and appreciate 
            the educators who shape our future. Every day is a good day to thank a teacher!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="https://en.unesco.org/commemorations/worldteachersday"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
            >
              Learn More from UNESCO
            </a>
            <a
              href="https://www.teachertaskforce.org/"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg border border-gray-200 text-sm sm:text-base"
            >
              Teacher Task Force
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default History;