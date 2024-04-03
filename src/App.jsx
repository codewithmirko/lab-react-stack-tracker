import "./App.css";
import companiesData from "./companies.json";
import HomePage from "./pages/HomePage";
import technologiesData from "./technologies.json";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TechnologyPage from "./pages/TechnologyPage";
import CompanyPage from "./pages/CompanyPage";

function App() {
  const [companies, setCompanies] = useState(companiesData);
  // const [technologies, setTechnologies] = useState(technologiesData);

  console.log(companiesData);
  return (
    <div className="App">
      <h1>LAB | React Stack Tracker</h1>
      <Routes>
        <Route path="/" element={<HomePage />} companies={companies} />
        <Route path="company/:companySlug" element={<CompanyPage />} />
        <Route path="/tech/:slug" element={<TechnologyPage />} />
      </Routes>
    </div>
  );
}

export default App;
