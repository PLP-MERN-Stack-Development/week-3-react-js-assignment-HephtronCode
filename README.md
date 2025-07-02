# TaskMaster - React Task Management Application

A modern, responsive task management application built with React, Vite, and Tailwind CSS. This project features a clean, intuitive interface with dark/light theme support and efficient task organization capabilities.

## 🚀 Features

- **Task Management**: Create, edit, delete, and organize tasks efficiently
- **Theme Toggle**: Seamless switching between light and dark modes with persistent user preference
- **Responsive Design**: Mobile-first approach using Tailwind CSS for optimal viewing on all devices
- **Modern UI**: Clean, professional interface with smooth transitions and hover effects
- **Persistent Storage**: Theme preferences saved to localStorage for consistent user experience
- **React Router**: Client-side routing for smooth navigation between different views

## 🛠️ Tech Stack

- **Frontend**: React 18+ with functional components and hooks
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS for utility-first styling
- **Routing**: React Router DOM for navigation
- **State Management**: React Context API for theme management
- **Development**: ESLint for code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.jsx          # Main layout wrapper with sticky footer
│   ├── Navbar.jsx          # Navigation component
│   └── Footer.jsx          # Footer component
├── context/
│   └── ThemeContext.jsx    # Theme context provider
├── index.css               # Global styles and Tailwind imports
└── main.jsx               # Application entry point
```

## 🎨 Design Features

### Layout System

- **Sticky Footer**: Flexbox-based layout ensuring footer stays at bottom
- **Responsive Container**: Centered content with appropriate padding
- **Consistent Spacing**: Uniform spacing throughout the application

### Theme System

- **Context-Based**: Global theme state management using React Context
- **Persistent Preferences**: User theme choice saved in localStorage
- **Tailwind Integration**: Seamless dark mode support with Tailwind's dark: variants

### Components Architecture

- **Reusable Components**: Modular design for easy maintenance
- **Consistent Styling**: Unified color palette and typography
- **Responsive Design**: Mobile-first approach with flexible layouts

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/taskmaster.git
cd taskmaster
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality checks

## 🎯 Key Components

### Layout Component

The main layout wrapper that provides consistent structure across all pages:

- Implements sticky footer pattern using flexbox
- Integrates theme-aware styling
- Uses React Router's Outlet for nested routing

### Theme Context

Centralized theme management system:

- Toggles between light and dark modes
- Persists user preference in localStorage
- Automatically applies theme classes to document root

### Navigation Components

- **Navbar**: Main navigation with theme toggle functionality
- **Footer**: Sticky footer with copyright and branding

## 🎨 Styling Approach

### Tailwind CSS Configuration

- Custom color palette for consistent branding
- Dark mode support with automatic theme detection
- Responsive breakpoints for mobile-first design
- Utility-first approach for rapid development

### Color Scheme

- **Light Mode**: Gray-50 background with dark text
- **Dark Mode**: Gray-900 background with light text
- **Accent Colors**: Consistent gray palette for UI elements

## 📱 Responsive Design

The application is fully responsive with:

- Mobile-first design approach
- Flexible grid systems
- Responsive typography
- Touch-friendly interface elements

## 🔧 Development Notes

### Code Quality

- ESLint configuration for consistent code style
- Functional components with hooks
- Modern JavaScript/ES6+ features
- Clean, readable component structure

### Performance Considerations

- Vite for fast builds and hot module replacement
- Optimized bundle size with tree shaking
- Efficient re-rendering with proper state management

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The `dist` folder will contain the optimized production build ready for deployment.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is part of a fullstack development course assignment. All rights reserved.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the lightning-fast build tool
- Tailwind CSS team for the utility-first CSS framework
- React Router team for seamless routing solution

---

Built with ❤️ using React, Vite, and Tailwind
