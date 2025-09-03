export interface Teacher {
  id: number;
  name: string;
  subject: string;
  grade: string;
  photo: string;
  achievements: string[];
  description: string;
  yearsOfExperience: number;
  specialization: string;
}

export const teachers: Teacher[] = [
  {
    id: 1,
    name: "Shivendra Pratap Singh",
    subject: "Mathematics",
    grade: "Class Teacher",
    photo: `${import.meta.env.BASE_URL}teacher.jpg`,
    achievements: [
      "Led students to 100% pass rate in board mathematics",
      "Mentored state-level math olympiad finalists",
      "Introduced activity-based learning for algebra and geometry",
      "Organized annual STEM fair and math club initiatives",
      "Recognized for outstanding classroom leadership and mentorship"
    ],
    description: "Mr. Shivendra Pratap Singh is a dedicated Class Teacher and Mathematics educator known for turning complex ideas into clear, engaging learning experiences. His classroom blends strong conceptual foundations with real-life problem solving, fostering confidence and curiosity in every student. Mr. Shivendra believes in disciplined habits, growth mindset, and personalized guidance—supporting learners who struggle while challenging high performers with deeper explorations. Beyond academics, he actively mentors students for olympiads and competitive exams, encourages collaborative learning through peer-led groups, and builds a supportive classroom culture grounded in respect and accountability.",
    yearsOfExperience: 14,
    specialization: "Algebra, Geometry, and Problem Solving"
  }
];