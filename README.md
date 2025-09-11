# 🚀 AI-Powered Personal Portfolio

<div align="center">

  [![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://aidevportfolio.vercel.app/)
  [![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/RAJAN-115/ai-portfolio)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

  **A modern, AI-powered personal portfolio built with Next.js, TypeScript, and Tailwind CSS**

  *Showcasing my journey as a MERN Stack Developer with interactive features and stunning UI*

</div>

---

## 📖 Table of Contents

- [🎯 About The Project](#-about-the-project)
- [✨ Features](#-features)
- [🖼️ Screenshots](#️-screenshots)
- [🛠️ Built With](#️-built-with)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [📱 Usage](#-usage)
- [🌐 Live Demo](#-live-demo)
- [📂 Project Structure](#-project-structure)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 🎯 About The Project

This is my personal portfolio website that showcases my skills, projects, and experience as a Full-Stack Developer specializing in the MERN stack. The portfolio features a modern, responsive design with dark mode support and interactive AI-powered elements.

### Why This Project?

- **Professional Showcase**: Present my skills and projects in a visually appealing way
- **Modern Technology**: Built with cutting-edge web technologies
- **Performance First**: Optimized for speed and SEO with 90+ Lighthouse scores
- **Interactive Experience**: AI-powered voice navigation and smooth animations
- **Responsive Design**: Works perfectly on all devices

---

## ✨ Features

### 🎨 **Modern Design**
- Clean, minimalist UI with dark/light theme toggle
- Smooth animations with Framer Motion
- Fully responsive across all devices
- Professional typography and spacing

### 🧠 **AI-Powered**
- Voice navigation system
- Interactive user experience
- Smart content organization
- Dynamic greeting based on time

### ⚡ **Performance**
- 90+ Lighthouse performance scores
- Optimized images with Next.js Image component
- Fast loading times (<2 seconds)
- SEO optimized with meta tags

### 🔧 **Developer Experience**
- TypeScript for type safety
- ESLint and Prettier for code quality
- Comprehensive testing with Jest
- Modern development tools

### 📱 **Sections**
- **About**: Personal information and interests
- **Skills**: Technical expertise with progress indicators
- **Projects**: Showcase of web applications and tools
- **Contact**: Multiple ways to get in touch

---

## 🖼️ Screenshots

### 🏠 Homepage
![Homepage](./assets/homepage-screenshot.png)
*Clean homepage with dynamic greeting and call-to-action buttons*

### 💼 Projects Section
![Projects](./assets/projects-screenshot.png)
*Interactive project showcase with live demos and source code links*

### 🛠️ Skills Section
![Skills](./assets/skills-screenshot.png)
*Visual representation of technical skills with progress indicators*

### 📞 Contact Section
![Contact](./assets/contact-screenshot.png)
*Contact form with social media links and location information*

---

## 🛠️ Built With

### Frontend Technologies
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)

### UI Libraries & Tools
[![Radix UI](https://img.shields.io/badge/Radix%20UI-Components-purple)](https://www.radix-ui.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-ff69b4)](https://www.framer.com/motion/)
[![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-Forms-ec5990)](https://react-hook-form.com/)
[![Zod](https://img.shields.io/badge/Zod-Validation-3068b7)](https://zod.dev/)

### Development Tools
[![ESLint](https://img.shields.io/badge/ESLint-Code%20Quality-4B32C3?logo=eslint)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-Code%20Formatting-F7B93E?logo=prettier)](https://prettier.io/)
[![Jest](https://img.shields.io/badge/Jest-Testing-C21325?logo=jest)](https://jestjs.io/)

### Deployment & Hosting
[![Vercel](https://img.shields.io/badge/Vercel-Deployment-black?logo=vercel)](https://vercel.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Version%20Control-181717?logo=github)](https://github.com/)

---

## 🚀 Getting Started

Follow these simple steps to run the project locally on your machine.

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 18.17 or later)
  ```bash
  node --version
  ```

- **pnpm** (recommended) or npm
  ```bash
  npm install -g pnpm
  ```

- **Git** for version control
  ```bash
  git --version
  ```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RAJAN-115/ai-portfolio.git
   cd ai-portfolio
   ```

2. **Install dependencies**
   ```bash
   # Using pnpm (recommended)
   pnpm install

   # Or using npm
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Add your environment variables to `.env.local`:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   # Add other environment variables as needed
   ```

### Running Locally

1. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

2. **Open your browser**

   Visit [http://localhost:3000](http://localhost:3000) to see the application running.

3. **Start editing**

   The page auto-updates as you edit files. Start by modifying `app/page.tsx`.

---

## 📱 Usage

### Navigation
- Use the top navigation menu to explore different sections
- Click on project cards to view live demos and source code
- Toggle between dark and light themes using the theme switcher

### Interactive Features
- **Voice Navigation**: Try the AI-powered voice commands (if supported)
- **Contact Form**: Send messages directly through the contact form
- **Responsive Design**: View the site on any device for optimal experience

### Performance Tips
- The site is optimized for fast loading
- Images are automatically optimized by Next.js
- Use the PWA features for offline access (if available)

---

## 🌐 Live Demo

🔗 **Website**: [https://aidevportfolio.vercel.app/](https://aidevportfolio.vercel.app/)

### Quick Links
- [About Me](https://aidevportfolio.vercel.app/about) - Learn more about my background
- [Projects](https://aidevportfolio.vercel.app/projects) - View my latest work
- [Skills](https://aidevportfolio.vercel.app/skills) - See my technical expertise
- [Contact](https://aidevportfolio.vercel.app/contact) - Get in touch

---

## 📂 Project Structure

```
ai-portfolio/
├── 📁 app/                    # Next.js 14 app directory
│   ├── 📁 about/             # About page
│   ├── 📁 contact/           # Contact page
│   ├── 📁 projects/          # Projects page
│   ├── 📁 skills/            # Skills page
│   ├── 📄 globals.css        # Global styles
│   ├── 📄 layout.tsx         # Root layout
│   └── 📄 page.tsx           # Homepage
├── 📁 components/             # Reusable components
│   ├── 📁 ui/                # UI components
│   └── 📁 forms/             # Form components
├── 📁 lib/                   # Utility functions
├── 📁 public/                # Static assets
│   ├── 📁 images/            # Image assets
│   └── 📁 icons/             # Icon files
├── 📁 styles/                # Additional styles
├── 📄 next.config.js         # Next.js configuration
├── 📄 tailwind.config.js     # Tailwind CSS config
├── 📄 tsconfig.json          # TypeScript config
├── 📄 package.json           # Dependencies
└── 📄 README.md              # This file
```

### Key Directories
- **`app/`**: Contains all pages and layouts using Next.js 14 App Router
- **`components/`**: Reusable React components organized by functionality
- **`lib/`**: Utility functions, constants, and helper modules
- **`public/`**: Static assets like images, icons, and manifest files

---

## 🚀 Deployment

### Vercel Deployment (Recommended)

This project is optimized for deployment on **Vercel**, which provides zero-config deployment for Next.js applications.

#### Automatic Deployment
1. **Push to GitHub**: Every push to the `main` branch triggers automatic deployment
2. **Preview Deployments**: Pull requests generate preview URLs for testing
3. **Custom Domains**: Easily add custom domains in Vercel dashboard

#### Manual Deployment Steps

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to production**
   ```bash
   vercel --prod
   ```

3. **Set environment variables** in Vercel dashboard
   - Go to Project Settings → Environment Variables
   - Add all required environment variables

#### Build Commands
```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Run tests
pnpm test

# Type checking
pnpm type-check

# Linting
pnpm lint

# Code formatting
pnpm format
```

### Alternative Deployment Options

<details>
<summary>📦 Netlify Deployment</summary>

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command**: `pnpm build`
   - **Publish directory**: `.next`
3. Add environment variables in Netlify dashboard
4. Deploy!

</details>

<details>
<summary>🐳 Docker Deployment</summary>

1. Build Docker image:
   ```bash
   docker build -t ai-portfolio .
   ```

2. Run container:
   ```bash
   docker run -p 3000:3000 ai-portfolio
   ```

</details>

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
   ```bash
   git fork https://github.com/RAJAN-115/ai-portfolio.git
   ```

2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit your Changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```

4. **Push to the Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**
   - Go to the repository on GitHub
   - Click "New Pull Request"
   - Provide a clear description of your changes

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Update documentation when needed
- Add tests for new features
- Ensure all tests pass before submitting

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Rajan Prajapati

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👨‍💻 Author

<div align="center">

### **Rajan Prajapati**
*Full-Stack Developer | MERN Stack Specialist*

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Site-blue?style=for-the-badge)](https://aidevportfolio.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-RAJAN--115-black?style=for-the-badge&logo=github)](https://github.com/RAJAN-115)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-rajanrp115-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rajanrp115/)
[![Email](https://img.shields.io/badge/Email-rajanrp115%40gmail.com-red?style=for-the-badge&logo=gmail)](mailto:rajanrp115@gmail.com)

📱 **WhatsApp**: [+91 9545993850](https://wa.me/919545993850)
📍 **Location**: Virar (E), Mumbai, Maharashtra, India

</div>

### About Me

I'm a passionate **C++ programmer** transitioning into full-stack web development with the **MERN stack**. I love solving complex problems, building innovative projects, and exploring new technologies, especially AI tools and modern web development frameworks.

### What I'm Currently Working On
- 🔭 Building full-stack applications with React, Node.js, and MongoDB
- 🌱 Learning advanced Next.js and TypeScript concepts
- 👯 Looking to collaborate on open-source projects
- 💬 Ask me about **React, JavaScript, C++, and AI tools**

---

## 🙏 Acknowledgments

Special thanks to the following resources and communities that made this project possible:

### 🛠️ Technologies & Tools
- [**Next.js**](https://nextjs.org/) - The React framework for production
- [**Vercel**](https://vercel.com/) - Deployment platform for modern web projects
- [**Tailwind CSS**](https://tailwindcss.com/) - Utility-first CSS framework
- [**TypeScript**](https://www.typescriptlang.org/) - JavaScript with type safety
- [**Framer Motion**](https://www.framer.com/motion/) - Animation library for React

### 🎨 Design Inspiration
- [**Dribbble**](https://dribbble.com/) - Design inspiration and trends
- [**Behance**](https://www.behance.net/) - Creative portfolio examples
- [**Awwwards**](https://www.awwwards.com/) - Web design excellence

### 🚀 Learning Resources
- [**freeCodeCamp**](https://www.freecodecamp.org/) - Web development education
- [**MDN Web Docs**](https://developer.mozilla.org/) - Web technology documentation
- [**React Documentation**](https://react.dev/) - Official React learning resources
- [**Next.js Documentation**](https://nextjs.org/docs) - Comprehensive Next.js guide

### 🤝 Community Support
- [**Stack Overflow**](https://stackoverflow.com/) - Problem-solving community
- [**GitHub Discussions**](https://github.com/discussions) - Open source collaboration
- [**Reddit r/webdev**](https://www.reddit.com/r/webdev/) - Web development community
- [**Dev.to**](https://dev.to/) - Developer community platform

---

<div align="center">

### 🌟 If you found this project helpful, please consider giving it a star!

[![GitHub Stars](https://img.shields.io/github/stars/RAJAN-115/ai-portfolio?style=social)](https://github.com/RAJAN-115/ai-portfolio/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/RAJAN-115/ai-portfolio?style=social)](https://github.com/RAJAN-115/ai-portfolio/network/members)
[![GitHub Watchers](https://img.shields.io/github/watchers/RAJAN-115/ai-portfolio?style=social)](https://github.com/RAJAN-115/ai-portfolio/watchers)

**Made with ❤️ and ☕ by Rajan Prajapati**

*Last Updated: January 2025*

</div>

---

<div align="center">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=RAJAN-115.ai-portfolio" alt="Visitor Count"/>
</div>
