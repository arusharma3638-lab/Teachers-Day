export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const teachersDayQuestions: QuizQuestion[] = [
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

export const mathsQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "(Number System) The decimal expansion of 7/12 will be:",
    options: [
      "Terminating decimal",
      "Non-terminating repeating decimal",
      "Non-terminating non-repeating decimal",
      "Irrational number"
    ],
    correctAnswer: 1,
    explanation: "7/12 in decimal form is 0.58(3), which repeats, so it's non-terminating repeating."
  },
  {
    id: 2,
    question: "(Polynomials) If one zero of p(x)=x^2+3x+k is -2, the value of k is:",
    options: ["4", "-4", "2", "-2"],
    correctAnswer: 2,
    explanation: "Sum of zeros = -3 ⇒ other zero = -1; product = k = (-2)×(-1)=2."
  },
  {
    id: 3,
    question: "(Coordinate Geometry) The point (0, -5) lies on:",
    options: ["x-axis", "y-axis", "Origin", "None of these"],
    correctAnswer: 1,
    explanation: "Points with x=0 lie on the y-axis."
  },
  {
    id: 4,
    question: "(Linear Equations) The solution of 2x+3y=12 and x−y=1 is:",
    options: ["(3,2)", "(2,3)", "(4,2)", "(2,4)"],
    correctAnswer: 0,
    explanation: "From x−y=1 ⇒ x=y+1; substitute into 2x+3y=12 ⇒ y=2, x=3."
  },
  {
    id: 5,
    question: "(Euclid’s Geometry) A point has:",
    options: ["Length only", "Breadth only", "Length and breadth", "No dimension"],
    correctAnswer: 3,
    explanation: "A point has position but no dimension."
  },
  {
    id: 6,
    question: "(Triangles) If two sides are 5 cm and 12 cm, the third side cannot be:",
    options: ["6 cm", "12 cm", "17 cm", "20 cm"],
    correctAnswer: 3,
    explanation: "Triangle inequality ⇒ third side must be >7 and <17; 20 cm is impossible."
  },
  {
    id: 7,
    question: "(Quadrilaterals) The diagonals of a rhombus:",
    options: [
      "Are equal and bisect each other at right angles",
      "Are unequal and bisect each other at right angles",
      "Are equal but do not bisect each other",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "Rhombus diagonals are perpendicular and bisect each other; they are generally unequal."
  },
  {
    id: 8,
    question: "(Circles) The angle subtended by a semicircle at any point on the circle is:",
    options: ["90°", "60°", "180°", "45°"],
    correctAnswer: 0,
    explanation: "Angle in a semicircle is a right angle (Thales' theorem)."
  },
  {
    id: 9,
    question: "(Surface Areas & Volumes) If radius doubles in V=(1/3)πr^2h, the volume becomes:",
    options: ["2 times", "3 times", "4 times", "8 times"],
    correctAnswer: 2,
    explanation: "Volume ∝ r^2; doubling r multiplies V by 4."
  },
  {
    id: 10,
    question: "(Probability) Probability of drawing a red queen from a deck:",
    options: ["1/26", "1/13", "1/52", "2/13"],
    correctAnswer: 0,
    explanation: "There are 2 red queens out of 52 cards ⇒ 2/52 = 1/26."
  }
];

// Backward-compatible default export for existing imports
export const quizQuestions = teachersDayQuestions;