Jarurat Care - Patient Records Dashboard

A comprehensive healthcare management system built with React for managing patient records, appointments, and medical history.

🚀 Features

Patient Management: Add, view, and manage patient records

Smart Search: Real-time search and filtering by patient name

Responsive Design: Works seamlessly on desktop and mobile devices

Patient Details: View detailed patient information in a modal

Add New Patients: Form-based patient registration

Loading States: Professional loading and error handling

Modern UI: Clean, intuitive interface with Tailwind CSS

🛠️ Technology Stack

Frontend: React 18+ with Hooks

Styling: Tailwind CSS

Icons: Lucide React

State Management: React Hooks (useState, useEffect)

Build Tool: Vite

Package Manager: npm / yarn

📁 Project Structure
src/
├─ components/
│  ├─ Header.jsx          # Navigation component
│  ├─ PatientCard.jsx     # Individual patient card
│  ├─ PatientModal.jsx    # Patient details modal
│  └─ AddPatientForm.jsx  # Add new patient form
├─ pages/
│  ├─ Home.jsx            # Landing page
│  ├─ Patients.jsx        # Main patients dashboard
│  └─ About.jsx           # About page
├─ App.jsx                # Main application component
├─ main.jsx               # Application entry point
└─ index.css              # Global styles and Tailwind imports

🏃‍♂️ Getting Started
Prerequisites

Node.js (v14 or higher)

npm or yarn

Installation

Clone the repository:

git clone <repository-url>
cd jarurat-care-dashboard


Install dependencies:

npm install
# or
yarn install


Start development server:

npm run dev
# or
yarn dev


Open your browser:
👉 http://localhost:5173

📦 Build & Deployment
Build for Production
npm run build
# or
yarn build

Preview Production Build
npm run preview
# or
yarn preview

📦 Dependencies
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.3.0",
    "vite": "^4.4.5"
  }
}

🎯 Core Functionalities
1. Home Page

Welcome screen with branding

Feature highlights and navigation to patients section

2. Patients Dashboard

Patient list in a responsive card layout

Search functionality to filter by name

“Add Patient” button for new registrations

Loading and error states

3. Patient Details Modal

Displays personal and medical information

Frontend-ready edit functionality

4. Add New Patient Form

Form validation for required fields

Local state management (mock data)

Responsive design

5. Navigation

Sticky header with logo

Responsive menu

Active page indication

🔧 Configuration Files

Vite (vite.config.js):

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})


Tailwind (tailwind.config.js):

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


PostCSS (postcss.config.js):

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

🚀 Deployment
Vercel

Push code to GitHub

Connect repository to Vercel

Deploy with default settings

Netlify

Build the project: npm run build

Upload dist folder to Netlify

Configure redirects for SPA

📱 Responsive Design

Desktop: 1024px+

Tablet: 768px – 1023px

Mobile: 320px – 767px

🎨 Design Features

Clean, professional healthcare interface

Smooth hover effects and transitions

Consistent branding across pages

Accessibility with semantic HTML and contrast ratios

Loading spinners and error messages

🧪 Mock Data

20+ sample patients

Realistic Indian names & contact information

Various medical conditions and visit dates

Simulated API delay for realistic experience

🔮 Future Enhancements

Backend API integration

User authentication

Appointment scheduling

Medical history tracking

Export patient data

Advanced filtering and sorting

Patient photo uploads

Print patient reports

👨‍💻 Developer

Created as part of Jarurat Care internship assignment.

📄 License

This project is for educational and internship evaluation purposes only.
Not intended for production use.
