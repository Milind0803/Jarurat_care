import React from "react";
import { Heart, Users, Search, Calendar } from "lucide-react";

const Home = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-blue-600 rounded-full p-6">
              <Heart className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Jarurat Care
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Your comprehensive healthcare management system. Streamline patient
            records, appointments, and medical history with our intuitive
            dashboard.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">Patient Management</h3>
              <p className="text-gray-600">
                Efficiently manage patient records and medical history
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Search className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">Quick Search</h3>
              <p className="text-gray-600">
                Find patient information instantly with our smart search
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Calendar className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4">
                Appointment Tracking
              </h3>
              <p className="text-gray-600">
                Keep track of appointments and visit history
              </p>
            </div>
          </div>
          <button
            onClick={() => setCurrentPage("patients")}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            View Patients
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
