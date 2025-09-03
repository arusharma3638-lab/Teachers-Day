# 🎓 Teachers' Day Website

A beautiful, responsive website celebrating teachers and their invaluable contributions to education. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **🎨 Modern Design**: Beautiful gradient themes and smooth animations
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **🚀 Fast Performance**: Built with Vite for lightning-fast development
- **🎯 Teacher Showcase**: Dedicated page featuring Mr. Shivendra Pratap Singh
- **🧠 Interactive Quiz**: Educational quiz about teachers and education
- **📚 Rich Content**: Comprehensive information about Teachers' Day history
- **🎭 Smooth Animations**: Framer Motion animations for enhanced UX

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/teachers-day-website.git
   cd teachers-day-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout with navigation
│   └── FloatingElements.tsx  # Animated background elements
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── TeacherShowcase.tsx  # Mr. Shivendra's profile
│   ├── Quiz.tsx        # Interactive quiz
│   └── History.tsx     # Teachers' Day history
├── data/               # Static data
│   ├── teachers.ts     # Teacher information
│   ├── quiz-questions.ts  # Quiz content
│   └── quotes.ts       # Inspirational quotes
└── index.css           # Global styles and utilities
```

## 🚀 Deployment

### Automatic Deployment (Recommended)

This project includes GitHub Actions for automatic deployment to GitHub Pages.

1. **Push to main branch**: Automatically deploys to production
2. **Create Pull Request**: Generates preview deployment
3. **Manual deployment**: Use "workflow_dispatch" trigger

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Go to repository Settings → Pages
   - Set source to "GitHub Actions"
   - The workflow will handle the rest automatically

### Deployment URL

Your site will be available at:
```
https://yourusername.github.io/teachers-day-website
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: 1024px - 1280px
- **Large**: 1280px+

## 🎨 Customization

### Adding New Teachers

Edit `src/data/teachers.ts`:
```typescript
export const teachers: Teacher[] = [
  {
    id: 2,
    name: "New Teacher Name",
    subject: "Subject",
    grade: "Grade Level",
    photo: "/teacher-photo.jpg",
    achievements: ["Achievement 1", "Achievement 2"],
    description: "Teacher description...",
    yearsOfExperience: 5,
    specialization: "Specialization"
  }
];
```

### Modifying Quiz Questions

Edit `src/data/quiz-questions.ts`:
```typescript
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: 0,
    explanation: "Explanation of the answer"
  }
];
```

### Changing Colors/Themes

Modify `tailwind.config.js` and `src/index.css` for custom color schemes.

## 🌟 Features in Detail

### Teacher Showcase
- **Hero Section**: Prominent display of teacher information
- **Achievements**: Highlighted accomplishments and milestones
- **Interactive Modal**: Detailed teacher profile view
- **Responsive Layout**: Optimized for all screen sizes

### Interactive Quiz
- **Progress Tracking**: Visual progress bar
- **Immediate Feedback**: Instant answer validation
- **Score Calculation**: Performance tracking
- **Responsive Design**: Touch-friendly on mobile devices

### History Section
- **Timeline**: Chronological events in Teachers' Day history
- **Global Celebrations**: Different countries and their dates
- **Fun Facts**: Interesting statistics and information
- **Call to Action**: Links to external resources

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Teachers worldwide** for their dedication and passion
- **UNESCO** for establishing World Teachers' Day
- **Open source community** for the amazing tools and libraries

## 📞 Support

If you have any questions or need help:
- Create an issue on GitHub
- Check the documentation
- Review the code examples

---

**Made with ❤️ for all the amazing teachers who shape our future!**
