# Portfolio Website

## Overview

This is a modern, responsive portfolio website built with React and TypeScript, featuring a full-stack architecture with Express.js backend. The application showcases a software engineer's profile with interactive sections for about, skills, projects, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom portfolio color scheme
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and scroll-triggered animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript throughout the stack
- **API**: REST endpoints for contact form submission
- **Validation**: Zod schemas for request validation
- **Development**: Hot module replacement with Vite integration

### Data Storage Solutions
- **Database**: PostgreSQL configured with Drizzle ORM
- **Connection**: Neon Database serverless PostgreSQL
- **Schema Management**: Drizzle migrations in `/migrations` directory
- **In-Memory Storage**: Fallback storage implementation for development

## Key Components

### Portfolio Sections
1. **Hero Section**: Animated introduction with typewriter effect
2. **About Section**: Personal information with animated statistics
3. **Skills Section**: Technical skills organized by categories with progress indicators
4. **Projects Section**: Featured projects with technology stacks and links
5. **Contact Section**: Contact form with validation and submission handling

### UI Components
- Complete shadcn/ui component library implementation
- Custom portfolio-themed color variables
- Responsive design patterns for mobile and desktop
- Accessibility-compliant components using Radix UI primitives

### Navigation System
- Smooth scrolling navigation with active section highlighting
- Mobile-responsive hamburger menu
- Scroll spy functionality for section tracking

## Data Flow

### Contact Form Flow
1. User fills out contact form (name, email, subject, message)
2. Client-side validation using Zod schemas
3. Form submission to `/api/contact` endpoint
4. Server-side validation and logging
5. Success/error feedback via toast notifications

### Content Management
- Static content managed through React components
- Dynamic animations triggered by scroll position
- Responsive images loaded from external CDN (Unsplash)

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **UI Framework**: Radix UI components, shadcn/ui, Lucide icons
- **Animation**: Framer Motion, Embla Carousel
- **Data Fetching**: TanStack Query
- **Validation**: Zod with Drizzle Zod integration
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Utilities**: clsx, class-variance-authority, date-fns

### Development Dependencies
- **TypeScript**: Full type safety across frontend and backend
- **Vite**: Build tool with React plugin and runtime error overlay
- **ESBuild**: Backend bundling for production builds
- **tsx**: TypeScript execution for development server

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `/dist/public`
2. **Backend Build**: ESBuild bundles Express server to `/dist/index.js`
3. **Asset Optimization**: Static assets optimized and bundled

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Development and production environment separation
- Replit-specific development tools integration

### Production Setup
- Express server serves static frontend files
- API routes handle backend functionality
- PostgreSQL database for persistent storage
- Error handling middleware for graceful failure management

### Development Workflow
- Hot module replacement for frontend changes
- Automatic server restart for backend changes
- Database schema management with Drizzle migrations
- Development banner for Replit environment detection