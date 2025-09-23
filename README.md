# Jarurat Care - Patient Records Dashboard

A comprehensive healthcare management system built with React for managing patient records, appointments, and medical history.

## 🚀 Features

- **Patient Management**: Add, view, and manage patient records
- **Smart Search**: Real-time search and filtering by patient name
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Patient Details**: View detailed patient information in modal
- **Add New Patients**: Form-based patient registration
- **Loading States**: Professional loading and error handling
- **Modern UI**: Clean, intuitive interface with Tailwind CSS

## 🛠️ Technology Stack

- **Frontend**: React 18+ with Hooks
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect)
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## 📁 Project Structure

```
src/
├─ components/
│  ├─ Header.jsx              # Navigation component
│  ├─ PatientCard.jsx         # Individual patient card
│  ├─ PatientModal.jsx        # Patient details modal
│  └─ AddPatientForm.jsx      # Add new patient form
├─ pages/
│  ├─ Home.jsx               # Landing page
│  ├─ Patients.jsx           # Main patients dashboard
│  └─ About.jsx              # About page
├─ App.jsx                   # Main application component
├─ main.jsx                  # Application entry point
└─ index.css                 # Global styles and Tailwind imports
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jarurat-care-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📦 Dependencies

```json
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
```

## 🎯 Core Functionalities

### 1. **Home Page**
- Welcome screen with Jarurat Care branding
- Feature highlights and navigation to patients section

### 2. **Patients Dashboard**
- Display patient list in responsive card layout
- Search functionality to filter patients by name
- "Add Patient" button for new registrations
- Loading and error states

### 3. **Patient Details Modal**
- Comprehensive patient information display
- Personal and medical information sections
- Edit patient functionality (frontend ready)

### 4. **Add New Patient Form**
- Form validation for required fields
- Local state management (no backend required)
- Responsive form design

### 5. **Navigation**
- Sticky header with logo
- Responsive navigation menu
- Active page indication

## 🔧 Configuration Files

### Vite Configuration (vite.config.js)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
```

### Tailwind Configuration (tailwind.config.js)
```javascript
/** @type {import('tailwindcss').Config} */
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
```

### PostCSS Configuration (postcss.config.js)
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## 🚀 Deployment

### Vercel Deployment
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with default settings

### Netlify Deployment
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects for SPA

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)  
- Mobile (320px - 767px)

## 🎨 Design Features

- **Modern UI**: Clean, professional healthcare interface
- **Smooth Animations**: Hover effects and transitions
- **Consistent Branding**: Jarurat Care theme throughout
- **Accessibility**: Proper contrast ratios and semantic HTML
- **Loading States**: Professional loading spinners and error messages

## 🧪 Mock Data

The application uses mock patient data with:
- 20+ sample patients
- Realistic Indian names and contact information
- Various medical conditions and visit dates
- Simulated API delay for realistic loading experience

## 🔮 Future Enhancements

- Backend API integration
- User authentication
- Appointment scheduling
- Medical history tracking
- Export patient data
- Advanced filtering and sorting
- Patient photo uploads
- Print patient reports

## 👨‍💻 Developer

Created for **Jarurat Care** internship assignment.

## 📄 License

This project is created for educational and internship evaluation purposes.

---

**Note**: This is a frontend-only application with mock data. For production use, integrate with a proper backend API and database system.
