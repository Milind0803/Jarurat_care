import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Jarurat Care
          </h1>
          <p className="text-xl text-gray-600">
            Revolutionizing healthcare management through technology
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Jarurat Care, we believe that effective healthcare management
            should be accessible, intuitive, and comprehensive. Our patient
            records dashboard is designed to streamline the way healthcare
            providers manage patient information, making it easier to deliver
            quality care.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Key Features
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Comprehensive patient record management with detailed profiles
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Real-time search and filtering capabilities for quick access
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Responsive design that works seamlessly across all devices
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Secure and reliable data management with modern web technologies
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Technology Stack
          </h2>
          <p className="text-gray-600 mb-4">
            Built with modern web technologies:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <strong className="text-gray-900">Frontend:</strong> React, Hooks,
              Responsive Design
            </div>
            <div>
              <strong className="text-gray-900">Styling:</strong> Tailwind CSS,
              Lucide Icons
            </div>
            <div>
              <strong className="text-gray-900">State Management:</strong> React
              Hooks
            </div>
            <div>
              <strong className="text-gray-900">Features:</strong> Search,
              Modal, Form Validation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
