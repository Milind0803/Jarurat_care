import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import About from "./pages/About";
import PatientModal from "./components/PatientModal";
import AddPatientForm from "./components/AddPatientForm";

const App = () => {
  // State management using React Hooks
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    address: "",
  });

  // Mock patient data generator
  const generateMockPatients = () => {
    const firstNames = [
      "Amit",
      "Priya",
      "Rajesh",
      "Sneha",
      "Vikram",
      "Anita",
      "Suresh",
      "Kavya",
      "Rohit",
      "Meera",
      "Arjun",
      "Nisha",
    ];
    const lastNames = [
      "Sharma",
      "Patel",
      "Kumar",
      "Singh",
      "Gupta",
      "Reddy",
      "Rao",
      "Joshi",
      "Agarwal",
      "Chopra",
    ];
    const cities = [
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Chennai",
      "Kolkata",
      "Hyderabad",
      "Pune",
      "Ahmedabad",
    ];

    return Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      name: `${firstNames[index % firstNames.length]} ${
        lastNames[index % lastNames.length]
      }`,
      age: Math.floor(Math.random() * 60) + 18,
      phone: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
      email: `${firstNames[index % firstNames.length].toLowerCase()}@email.com`,
      address: `${Math.floor(Math.random() * 999) + 1}, ${
        cities[index % cities.length]
      }, India`,
      lastVisit: new Date(
        Date.now() - Math.floor(Math.random() * 90) * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
      condition: [
        "Routine Checkup",
        "Diabetes",
        "Hypertension",
        "Cardiac Care",
        "Orthopedic",
      ][index % 5],
    }));
  };

  // Fetch patients data (simulating API call)
  const fetchPatients = async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real app, this would be: const response = await fetch('/api/patients');
      const mockData = generateMockPatients();
      setPatients(mockData);
      setFilteredPatients(mockData);
    } catch (err) {
      setError("Failed to fetch patient data");
    } finally {
      setLoading(false);
    }
  };

  // Filter patients based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPatients(patients);
    } else {
      const filtered = patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPatients(filtered);
    }
  }, [searchQuery, patients]);

  // Fetch data on component mount
  useEffect(() => {
    if (currentPage === "patients" && patients.length === 0) {
      fetchPatients();
    }
  }, [currentPage]);

  // Handle patient selection
  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  // Handle add new patient
  const handleAddPatient = () => {
    if (newPatient.name && newPatient.age && newPatient.phone) {
      const patient = {
        ...newPatient,
        id: patients.length + 1,
        age: parseInt(newPatient.age),
        lastVisit: new Date().toLocaleDateString(),
        condition: "New Patient",
      };

      const updatedPatients = [...patients, patient];
      setPatients(updatedPatients);
      setFilteredPatients(updatedPatients);
      setNewPatient({ name: "", age: "", phone: "", email: "", address: "" });
      setIsAddModalOpen(false);
    }
  };

  const appProps = {
    patients,
    filteredPatients,
    searchQuery,
    setSearchQuery,
    loading,
    error,
    fetchPatients,
    handleViewDetails,
    setIsAddModalOpen,
    setCurrentPage,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "patients" && <Patients {...appProps} />}
      {currentPage === "about" && <About />}

      {isModalOpen && selectedPatient && (
        <PatientModal
          patient={selectedPatient}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {isAddModalOpen && (
        <AddPatientForm
          newPatient={newPatient}
          setNewPatient={setNewPatient}
          onSubmit={handleAddPatient}
          onClose={() => setIsAddModalOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
