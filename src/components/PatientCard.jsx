import React from "react";
import { User, Phone, Calendar } from "lucide-react";

const PatientCard = ({ patient, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 rounded-full p-3">
          <User className="h-6 w-6 text-blue-600" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {patient.name}
          </h3>
          <p className="text-gray-600">Age: {patient.age}</p>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex items-center text-gray-600">
          <Phone className="h-4 w-4 mr-2" />
          <span className="text-sm">{patient.phone}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">Last visit: {patient.lastVisit}</span>
        </div>
      </div>

      <button
        onClick={() => onViewDetails(patient)}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        View Details
      </button>
    </div>
  );
};

export default PatientCard;
