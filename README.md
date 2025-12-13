# 📚 Exam App

A modern, full-stack exam platform designed for programming enthusiasts to practice, test their skills, and earn digital diplomas across various tech domains.

## 📖 Project Description

Exam App is a comprehensive online assessment platform that empowers developers to enhance their programming skills through structured exams. The platform offers specialized tracks in Frontend Development, Backend Development, Mobile Development, Data Analysis, Python, Angular, Flutter, AI & ML, and more. Users can take topic-specific exams, track their progress, and earn digital diplomas for their achievements.

Built with Next.js 14 and modern web technologies, the app provides a seamless, responsive experience with robust authentication, real-time exam taking, and comprehensive account management features.

## 🚀 Project Features

- **🔐 Complete Authentication System**
  - User registration with email, phone number, and profile information
  - Secure login with NextAuth credentials provider
  - Password recovery flow with email verification and reset code
  - Protected routes with middleware-based authentication

- **📝 Exam Management**
  - Browse exams by subject categories (Frontend, Backend, Mobile, etc.)
  - View exam details including duration and number of questions
  - Interactive exam-taking interface with question navigation
  - Real-time exam timer tracking
  - Automatic exam result calculation and display

- **🏆 Digital Diplomas**
  - View earned diplomas in an infinite scroll gallery
  - Categorized diplomas by subject/track
  - Visual diploma display with icons and titles

- **⚙️ Account Settings**
  - Update profile information (name, email, phone, username)
  - Change password functionality
  - Account deletion with confirmation
  - Secure logout

- **🎨 Modern UI/UX**
  - Responsive design for all screen sizes
  - Beautiful authentication pages with app information
  - Dashboard with sidebar navigation
  - Breadcrumb navigation
  - Loading states and error handling
  - Toast notifications for user feedback

- **📊 Data Visualization**
  - Exam results with charts and statistics
  - Progress tracking

## 🛠️ Tools & Technologies

### Core Framework
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe development

### Authentication & Security
- **NextAuth.js 4** - Authentication and session management
- **JWT** - Token-based authentication
- **Middleware** - Route protection and redirects

### State Management & Data Fetching
- **TanStack React Query** - Server state management and data fetching
- **React Query DevTools** - Development debugging
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### UI Components & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives (Dialog, Toast, Progress, etc.)
- **Tremor** - React component library
- **Recharts** - Chart library for data visualization
- **Lucide React** - Icon library
- **Sonner** - Toast notification library
- **react-hot-toast** - Additional toast functionality

### Form Handling
- **React Hook Form** - Performant form library
- **@hookform/resolvers** - Validation resolvers
- **input-otp** - OTP input component
- **react-phone-number-input** - International phone number input

### Additional Libraries
- **class-variance-authority** - Component variant management
- **clsx** & **tailwind-merge** - Conditional class utilities
- **cmdk** - Command menu component
- **react-infinite-scroll-component** - Infinite scrolling
- **next-themes** - Theme management

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 🧠 Data Handling & Logic

### API Integration
- **REST API Backend** - External API service for all data operations
- **Environment Variables** - `API_URL` and `NEXT_PUBLIC_API_URL` for API endpoints
- **Bearer Token Authentication** - JWT tokens for API requests
- **Server Actions** - Next.js server actions for form submissions

### State Management Architecture
- **Server State**: Managed by React Query for exams, questions, diplomas, and results
- **Form State**: React Hook Form for all form inputs with Zod validation
- **Auth State**: NextAuth session management with JWT callbacks
- **Client State**: React hooks (useState, useMemo) for UI state

### Data Flow
1. **Authentication Flow**:
   - Login/Register → NextAuth → External API → JWT token stored in session
   - Protected routes check authentication via middleware

2. **Exam Flow**:
   - Fetch subjects → Select subject → Fetch exams → Start exam → Fetch questions → Submit answers → Get results

3. **Diploma Flow**:
   - Infinite scroll pagination → Fetch diplomas → Display with infinite scroll

### Async Operations
- **React Query Hooks**: Custom hooks (`useQuestions`, `useDiplomas`, `useQuestionsResult`) for data fetching
- **Server Components**: Next.js 14 server components for initial data loading
- **Client Components**: Interactive components with React Query for real-time updates

### Form Validation
- **Zod Schemas**: Type-safe validation schemas for auth, exam, and settings forms
- **Real-time Validation**: React Hook Form with `mode: "all"` for instant feedback
- **Error Handling**: Comprehensive error messages and display components

### API Routes
- Custom Next.js API routes for:
  - Password reset flow (`/api/forget-password`, `/api/reset-code`, `/api/reset-password`)
  - NextAuth configuration (`/api/auth/[...nextauth]`)

## 📁 Project Structure Overview

```
exam-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication routes (login, register, forget-password)
│   │   ├── api/               # API routes
│   │   ├── dashboard/         # Protected dashboard routes
│   │   │   ├── (exam)/       # Exam-related routes
│   │   │   └── account-settings/  # User settings
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── features/          # Feature-specific components
│   │   ├── providers/         # Context providers
│   │   ├── shared/            # Reusable shared components
│   │   └── ui/                # UI component library
│   ├── hooks/                 # Custom React hooks
│   ├── lib/
│   │   ├── api/               # API utility functions
│   │   ├── schemas/           # Zod validation schemas
│   │   ├── services/          # Service layer for API calls
│   │   ├── types/             # TypeScript type definitions
│   │   └── utils/             # Utility functions
│   ├── auth.ts                # NextAuth configuration
│   └── middleware.ts          # Route protection middleware
├── public/                     # Static assets
└── package.json               # Dependencies
```

## 🌐 Live Demo

🔗 [Live Demo](#) *(Add your deployment URL here)*

## 📝 Notes

- The application uses an external REST API backend for all data operations
- Authentication is handled through NextAuth with JWT tokens
- The app includes a comprehensive password reset flow with email verification
- Exam results are calculated server-side and displayed with visual charts
- Diplomas are fetched using infinite scroll pagination for optimal performance
- All forms include client-side validation using Zod schemas
- The UI is fully responsive and optimized for mobile, tablet, and desktop devices

---

Built with Hady Mohamed ❤️ using Next.js and modern web technologies.
