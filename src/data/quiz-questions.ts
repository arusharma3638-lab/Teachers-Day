export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "When is World Teachers' Day celebrated?",
    options: ["September 5", "October 5", "November 5", "December 5"],
    correctAnswer: 1,
    explanation: "World Teachers' Day is celebrated on October 5th each year to commemorate the work of teachers worldwide."
  },
  {
    id: 2,
    question: "Who is known as the 'Father of Modern Teaching'?",
    options: ["John Dewey", "Maria Montessori", "Jean Piaget", "Johann Pestalozzi"],
    correctAnswer: 3,
    explanation: "Johann Pestalozzi is often referred to as the father of modern teaching methods and educational theory."
  },
  {
    id: 3,
    question: "What does the acronym STEM stand for in education?",
    options: [
      "Science, Technology, Engineering, Mathematics",
      "Students, Teachers, Education, Management",
      "Study, Test, Evaluate, Measure",
      "Skills, Training, Excellence, Methods"
    ],
    correctAnswer: 0,
    explanation: "STEM stands for Science, Technology, Engineering, and Mathematics - key subjects for 21st-century learning."
  },
  {
    id: 4,
    question: "Which teaching method encourages students to learn through hands-on experience?",
    options: ["Lecture Method", "Experiential Learning", "Rote Learning", "Direct Instruction"],
    correctAnswer: 1,
    explanation: "Experiential Learning is a teaching method that engages students through hands-on activities and real-world experiences."
  },
  {
    id: 5,
    question: "What is the primary goal of differentiated instruction?",
    options: [
      "To make all lessons the same",
      "To meet diverse learning needs",
      "To reduce preparation time",
      "To eliminate assessments"
    ],
    correctAnswer: 1,
    explanation: "Differentiated instruction aims to tailor teaching methods to meet the diverse learning needs and styles of all students."
  },
  {
    id: 6,
    question: "Who developed the theory of multiple intelligences?",
    options: ["Albert Einstein", "Howard Gardner", "Benjamin Bloom", "Lev Vygotsky"],
    correctAnswer: 1,
    explanation: "Howard Gardner developed the theory of multiple intelligences, identifying eight different types of intelligence."
  },
  {
    id: 7,
    question: "What does UNESCO stand for?",
    options: [
      "United Nations Educational, Scientific and Cultural Organization",
      "Universal Network for Education and Science Cooperation Organization",
      "United Nations Economic and Social Council Organization",
      "Universal Education Science and Culture Organization"
    ],
    correctAnswer: 0,
    explanation: "UNESCO stands for United Nations Educational, Scientific and Cultural Organization."
  },
  {
    id: 8,
    question: "Which learning theory emphasizes the role of social interaction in learning?",
    options: ["Behaviorism", "Constructivism", "Social Learning Theory", "Cognitivism"],
    correctAnswer: 2,
    explanation: "Social Learning Theory, developed by Albert Bandura, emphasizes learning through observation and social interaction."
  }
];