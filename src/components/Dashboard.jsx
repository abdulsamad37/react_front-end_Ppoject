import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Users, BarChart2, Globe, FileText } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Define the sections with chart types
  const sections = [
    {
      id: "ImportanceOfQualityEducation",
      title: "Importance of Quality Education",
      chartTypes: ["Pie", "Bar", "Radar", "Line"], // All chart types for the first section
    },
    {
      id: "ChallengesInAchievingQualityEducation",
      title: "Challenges in Quality Education",
      chartTypes: ["Line", "Bar", "Radar", "Pie"], // Different chart types for the second section
    },
    {
      id: "PillarsOfQualityEducation",
      title: "Pillars of Quality Education",
      chartTypes: ["Radar", "Line", "Pie", "Bar"], // Different chart types for the third section
    },
    {
      id: "StrategiesAndInnovationsToImproveQualityEducation",
      title: "Strategies and Innovations",
      chartTypes: ["Doughnut", "Pie", "Line", "Bar"], // Different chart types for the fourth section
    },
    {
      id: "MeasuringAndMonitoringQualityEducation",
      title: "Measuring and Monitoring",
      chartTypes: ["Bar", "Line", "Radar", "Pie"], // Different chart types for the fifth section
    },
  ];

  // Fetch data for the selected section
  const loadSectionData = async (sectionId, chartTypes) => {
    setLoading(true);
    setError(null);

    const apiUrl = `http://localhost:3005/${sectionId}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data = await response.json();

      // Navigate to the Analytics page and pass data and chart types
      navigate(`/analytics`, { state: { data, title: sectionId, chartTypes } });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-light">
      <h1 className="h3 mb-4">Dashboard Overview</h1>

      <div className="row g-4 mb-4">
        {/* First row with 4-4-4 grid */}
        {sections.slice(0, 3).map(({ id, title, chartTypes }, index) => {
          const cardStyles = [
            {
              background: "linear-gradient(to right, #6a11cb, #2575fc)", // Purple to blue
              icon: <TrendingUp size={24} />,
            },
            {
              background: "linear-gradient(to right, #FFB6C1, #FF6347)", // Soft pink to coral
              icon: <Users size={24} />,
            },
            {
              background: "linear-gradient(to right, #3A7BD5, #00D2FF)", // Blue to cyan
              icon: <BarChart2 size={24} />,
            },
            {
              background: "linear-gradient(to right, #FDC830, #F37335)", // Bright yellow to orange
              icon: <Globe size={24} />,
            },
            {
              background: "linear-gradient(to right, #A7C5BD, #A7C5BD)", // Pastel green
              icon: <FileText size={24} />,
            },
            {
              background: "linear-gradient(to right, #FF7E5F, #FEB47B)", // Warm coral to peachy orange
              icon: <TrendingUp size={24} />,
            },
          ];

          return (
            <div className="col-md-4" key={id}>
              <div
                className="card h-100 text-white"
                style={{ background: cardStyles[index].background }}
                onClick={() => loadSectionData(id, chartTypes)}
              >
                <div className="card-body">
                  <div className="icon">{cardStyles[index].icon}</div>
                  <h4 className="mt-3">{title}</h4>
                  <p>Click to explore more details on this topic.</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="row g-4 mb-4">
        {/* Second row with 6-6 grid */}
        {sections.slice(3).map(({ id, title, chartTypes }, index) => {
          const cardStyles = [
            {
              background: "linear-gradient(to right, #D9A7C7, #AB6CC8)", // Pink to lavender
              icon: <TrendingUp size={24} />,
            },
            {
              background: "linear-gradient(to right, #6a11cb, #2575fc)", // Purple to blue
              icon: <Users size={24} />,
            },
            {
              background: "linear-gradient(to right, #FFB6C1, #FF6347)", // Soft pink to coral
              icon: <BarChart2 size={24} />,
            },
            {
              background: "linear-gradient(to right, #A7C5BD, #A7C5BD)", // Pastel green
              icon: <Globe size={24} />,
            },
            {
              background: "linear-gradient(to right, #FF7E5F, #FEB47B)", // Warm coral to peachy orange
              icon: <FileText size={24} />,
            },
            {
              background: "linear-gradient(to right, #3A7BD5, #00D2FF)", // Blue to cyan
              icon: <TrendingUp size={24} />,
            },
          ];

          return (
            <div className="col-md-6" key={id}>
              <div
                className="card h-100 text-white"
                style={{ background: cardStyles[index].background }}
                onClick={() => loadSectionData(id, chartTypes)}
              >
                <div className="card-body">
                  <div className="icon">{cardStyles[index].icon}</div>
                  <h4 className="mt-3">{title}</h4>
                  <p>Click to explore more details on this topic.</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {loading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Dashboard;
