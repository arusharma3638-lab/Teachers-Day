import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, RotateCcw, Trophy, Brain, Target } from 'lucide-react';
import { teachersDayQuestions, mathsQuestions } from '../data/quiz-questions';

const Quiz: React.FC = () => {
  const [category, setCategory] = useState<'teachers' | 'maths'>('teachers');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const activeQuestions = category === 'teachers' ? teachersDayQuestions : mathsQuestions;
  const question = activeQuestions[currentQuestion];
  const totalQuestions = activeQuestions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  const handleAnswerSelect = (answerIndex: number) => {
    if (answered) return;
    
    setSelectedAnswer(answerIndex);
    setAnswered(true);
    
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newUserAnswers);

    if (answerIndex === question.correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setAnswered(false);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2500);

    setTimeout(() => {
      setShowResult(true);
    }, 500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  const switchCategory = (newCategory: 'teachers' | 'maths') => {
    setCategory(newCategory);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  const getScoreMessage = () => {
    if (percentage >= 90) return { message: "Excellent! You're a teaching expert!", color: "text-green-600" };
    if (percentage >= 70) return { message: "Great job! You know your teaching facts!", color: "text-blue-600" };
    if (percentage >= 50) return { message: "Good effort! Keep learning!", color: "text-orange-600" };
    return { message: "Keep studying! There's always room to grow!", color: "text-red-600" };
  };

  if (quizCompleted) {
    const scoreMessage = getScoreMessage();
    
    return (
      <div className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white mb-6 sm:mb-8 mx-auto">
                <Trophy className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Quiz Complete!</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">Here's how you performed:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">{score}</div>
                  <div className="text-gray-600 text-sm sm:text-base">Correct Answers</div>
                </div>
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-600 mb-1 sm:mb-2">{totalQuestions}</div>
                  <div className="text-gray-600 text-sm sm:text-base">Total Questions</div>
                </div>
                <div className="bg-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">{percentage}%</div>
                  <div className="text-gray-600 text-sm sm:text-base">Score</div>
                </div>
              </div>

              <div className={`text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 ${scoreMessage.color}`}>
                {scoreMessage.message}
              </div>

              <button
                onClick={restartQuiz}
                className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                <RotateCcw className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Take Quiz Again</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white mb-4 sm:mb-6 mx-auto">
            <Brain className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            {category === 'teachers' ? "Teachers' Day Quiz" : 'Mathematics Quiz'}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {category === 'teachers'
              ? 'Test your knowledge about teachers, education, and the importance of teaching!'
              : 'Challenge yourself with Class 9 Maths questions!'}
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8 flex items-center justify-center"
        >
          <div className="bg-white rounded-full p-1 shadow-lg border border-gray-100 inline-flex">
            <button
              onClick={() => switchCategory('teachers')}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all ${
                category === 'teachers' ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Teachers' Day
            </button>
            <button
              onClick={() => switchCategory('maths')}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all ${
                category === 'maths' ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Mathematics
            </button>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex items-center justify-between text-sm sm:text-base text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {totalQuestions}</span>
            <span>{Math.round(((currentQuestion + 1) / totalQuestions) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 sm:h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </motion.div>

        {/* Question Card */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100"
        >
          {/* Question */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <Target className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
              <span className="text-sm sm:text-base font-medium text-blue-600">Question {currentQuestion + 1}</span>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
              {question.question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-3 sm:space-y-4">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => handleAnswerSelect(index)}
                disabled={answered}
                className={`w-full p-4 sm:p-5 rounded-xl sm:rounded-2xl text-left transition-all duration-300 border-2 ${
                  selectedAnswer === index
                    ? answered && index === question.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : answered && index !== question.correctAnswer
                      ? 'border-red-500 bg-red-50'
                      : 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                } ${answered ? 'cursor-not-allowed' : 'cursor-pointer hover:shadow-md'}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-sm sm:text-base font-medium ${
                    selectedAnswer === index
                      ? answered && index === question.correctAnswer
                        ? 'text-green-700'
                        : answered && index !== question.correctAnswer
                        ? 'text-red-700'
                        : 'text-blue-700'
                      : 'text-gray-700'
                  }`}>
                    {option}
                  </span>
                  {answered && selectedAnswer === index && (
                    <div className="flex-shrink-0">
                      {index === question.correctAnswer ? (
                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                      )}
                    </div>
                  )}
                  {answered && index === question.correctAnswer && selectedAnswer !== index && (
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Result Message */}
          {showResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`mt-6 sm:mt-8 p-4 sm:p-5 rounded-xl sm:rounded-2xl text-center ${
                selectedAnswer === question.correctAnswer
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
              }`}
            >
              <div className="flex items-center justify-center space-x-2 mb-2">
                {selectedAnswer === question.correctAnswer ? (
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                )}
                <span className={`font-semibold text-sm sm:text-base ${
                  selectedAnswer === question.correctAnswer ? 'text-green-700' : 'text-red-700'
                }`}>
                  {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect!'}
                </span>
              </div>
              <p className={`text-sm sm:text-base ${
                selectedAnswer === question.correctAnswer ? 'text-green-600' : 'text-red-600'
              }`}>
                {selectedAnswer === question.correctAnswer
                  ? 'Great job! You know your stuff!'
                  : `The correct answer is: ${question.options[question.correctAnswer]}`
                }
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Score Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 sm:mt-8 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-gray-100">
            <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
            <span className="text-sm sm:text-base font-semibold text-gray-700">
              Score: {score}/{totalQuestions}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;