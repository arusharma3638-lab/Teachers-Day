import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Clock, Star, GraduationCap, Users, Target, Trophy } from 'lucide-react';
import { teachers } from '../data/teachers';

const TeacherShowcase: React.FC = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null);

  const closeModal = () => setSelectedTeacher(null);

  const selectedTeacherData = selectedTeacher !== null ? teachers.find(t => t.id === selectedTeacher) : null;
  const teacher = teachers[0]; // Mr. Shivendra

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
            Meet Mr. Shivendra Pratap Singh
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            Our distinguished Class Teacher and Mathematics educator who transforms complex concepts into engaging learning experiences. 
            With over a decade of teaching excellence, Mr. Singh inspires confidence and curiosity in every student.
          </p>
        </motion.div>

        {/* Hero Section - Mr. Shivendra */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 md:mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
              />
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-white rounded-full p-2 sm:p-3 shadow-lg">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-current" />
                  <span className="text-xs sm:text-sm font-bold text-gray-700">4.9</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">{teacher.name}</h2>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 mb-3 space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="font-medium text-sm sm:text-base">{teacher.subject}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="font-medium text-sm sm:text-base">{teacher.grade}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="font-medium text-sm sm:text-base">{teacher.yearsOfExperience} years of experience</span>
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Specialization</h3>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                  {teacher.specialization}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                {teacher.description}
              </p>

              <button
                onClick={() => setSelectedTeacher(teacher.id)}
                className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                <Trophy className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>View Full Profile</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Section - Focused on Mr. Shivendra */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg text-center border border-gray-100">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-2 sm:mb-3 md:mb-4 mx-auto">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">{teacher.yearsOfExperience}</div>
            <div className="text-gray-600 text-xs sm:text-sm">Years Teaching</div>
          </div>
          
          <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg text-center border border-gray-100">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-2 sm:mb-3 md:mb-4 mx-auto">
              <Target className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">100%</div>
            <div className="text-gray-600 text-xs sm:text-sm">Board Pass Rate</div>
          </div>
          
          <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg text-center border border-gray-100">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-2 sm:mb-3 md:mb-4 mx-auto">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">{teacher.achievements.length}</div>
            <div className="text-gray-600 text-xs sm:text-sm">Key Achievements</div>
          </div>
          
          <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg text-center border border-gray-100">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-2 sm:mb-3 md:mb-4 mx-auto">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">4.9</div>
            <div className="text-gray-600 text-xs sm:text-sm">Student Rating</div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100 mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-8">Outstanding Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {teacher.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl sm:rounded-2xl"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-4 w-4 sm:h-5 w-5 text-white" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed text-sm sm:text-base">{achievement}</p>
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
          className="text-center mt-8 sm:mt-12 md:mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white mb-4 sm:mb-6 mx-auto">
            <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Inspired by Mr. Shivendra?</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-4 sm:mb-6 px-2">
            Mr. Shivendra Pratap Singh represents the highest standards of educational excellence, 
            combining deep subject knowledge with innovative teaching methods to inspire the next generation.
          </p>
          <a
            href="https://forms.gle/nominate-teacher"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
          >
            Learn More About Our Teaching Excellence
          </a>
        </motion.div>
      </div>

      {/* Teacher Detail Modal */}
      {selectedTeacherData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 z-10"
              >
                <span className="text-gray-600 text-lg sm:text-xl">×</span>
              </button>

              {/* Header */}
              <div className="relative">
                <img
                  src={selectedTeacherData.photo}
                  alt={selectedTeacherData.name}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">{selectedTeacherData.name}</h2>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-white/90 space-y-1 sm:space-y-0">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span className="text-sm sm:text-base">{selectedTeacherData.subject}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm sm:text-base">{selectedTeacherData.yearsOfExperience} years</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Grade Level</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{selectedTeacherData.grade}</p>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Specialization</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{selectedTeacherData.specialization}</p>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">About</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{selectedTeacherData.description}</p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Achievements</h3>
                  <div className="space-y-3">
                    {selectedTeacherData.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Award className="h-3 w-3 text-yellow-600" />
                        </div>
                        <span className="text-gray-600 text-sm sm:text-base">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm sm:text-base">Loved by students and parents</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="absolute inset-0" onClick={closeModal} />
        </div>
      )}
    </div>
  );
};

export default TeacherShowcase;