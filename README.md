# Innonsh Technologies Website

Welcome to the official repository for the **Innonsh Technologies** website. This project is a modern, high-performance web application designed to showcase our services, products, and technological expertise.

## 🚀 Tech Stack

This project is built using a modern JavaScript stack, separated into a client and server architecture.

### Frontend (`/client`)
- **Framework:** React 19 with Vite for ultra-fast development and building.
- **Styling:** Tailwind CSS for utility-first styling and responsive design.
- **Animations:** 
  - Framer Motion & GSAP for complex, high-performance animations.
  - Lenis for smooth scrolling experiences.
- **3D Graphics:** Three.js integrated via React Three Fiber & Drei for immersive 3D elements.
- **Icons:** Lucide React & React Icons.

### Backend (`/server`)
- **Framework:** Node.js with Express 5.
- **Configuration:** Environment variables managed via `dotenv`.
- **Middleware:** CORS enabled for cross-origin requests.

## 📁 Project Structure

```text
innonsh-website/
├── client/                 # Frontend React Application
│   ├── public/             # Static assets (favicons, etc.)
│   ├── src/
│   │   ├── assets/         # Images, SVGs, and other media
│   │   ├── components/     # Reusable UI components
│   │   │   ├── animations/ # Custom animation components (e.g., CursorBlob)
│   │   │   ├── hero/       # Hero section components
│   │   │   ├── navigation/ # Navbar and Footer
│   │   │   └── sections/   # Main page sections (Services, Products, Process, etc.)
│   │   ├── index.css       # Global styles & Tailwind configuration
│   │   ├── App.jsx         # Root component
│   │   └── main.jsx        # Entry point
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   └── vite.config.js      # Vite configuration
├── server/                 # Backend Express API
│   ├── index.js            # Server entry point
│   └── package.json        # Backend dependencies
└── package.json            # Root configuration for concurrent execution
```

## 🛠️ Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/innonshtech/innonsh-website.git
   cd innonsh-website
   ```

2. **Install dependencies:**
   The root directory contains a setup that installs both client and server dependencies.
   ```bash
   npm install
   ```

### Running Locally

To start both the client and server concurrently in development mode, run:

```bash
npm run dev
```

- **Frontend:** The React app will be available at [http://localhost:5173](http://localhost:5173)
- **Backend:** The Express server will be available at [http://localhost:5000](http://localhost:5000)

## 📦 Building for Production

To create an optimized production build for the frontend:

```bash
cd client
npm run build
```
The build artifacts will be generated in the `client/dist` directory, ready to be deployed to your preferred hosting provider (e.g., Vercel, Netlify, AWS).

## 🎨 Key Features & Sections
- **Hero & Trust Marquee:** Engaging first impression with client trust badges.
- **Services & Products:** Detailed showcase of what Innonsh Technologies offers.
- **ERP Solutions & Tech Stack:** Highlighting specialized capabilities and preferred technologies.
- **Process & Why Us:** Outlining our methodology and unique value proposition.
- **Testimonials & Contact:** Social proof and easy ways to get in touch.
- **Custom Cursor Blob & Smooth Scrolling:** Enhanced user experience with modern UI/UX patterns.

## 📄 License
*Private repository - All rights reserved by Innonsh Technologies.*
