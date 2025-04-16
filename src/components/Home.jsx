import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"; // Custom styles for background and animations

const Home = () => {
  const navigate = useNavigate();

  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const challenges = [
    {
      title: "Access to Education",
      //description: "Millions of children across the globe still lack access to quality education due to geographical and economic barriers.",
      image: "https://www.icrc.org/sites/default/files/styles/desktop_full/public/document_new/image/v-p-iq-e-02110.jpg.webp?itok=Nm8WksOm",
      detailedInfo: "This challenge involves geographical, financial, and socio-political barriers preventing children from accessing quality education."
    },
    {
      title: "Teacher Training",
      //description: "Teachers must receive proper training and resources to effectively educate their students and overcome obstacles.",
      image: "https://leadschool.in/wp-content/uploads/2023/11/banner-3.png",
      detailedInfo: "Teacher training programs need to be updated and improved to ensure educators have the skills and knowledge to support their students effectively."
    },
    {
      title: "Technological Integration",
      //description: "Integrating technology into education can bridge gaps, but requires significant infrastructure and digital literacy.",
      image: "https://s3.amazonaws.com/prod-hmhco-vmg-craftcms-public/_transforms/blog/_large/WF1995913_Shaped_2024_Classcraft-blog-migration_images30.jpg",
      detailedInfo: "This involves integrating digital tools and platforms into classrooms, but it requires access to reliable internet and devices."
    },
    {
      title: "Quality of Education",
      //description: "Ensuring the education provided is of high quality, relevant, and comprehensive for all students remains a major challenge.",
      image: "https://images.unsplash.com/photo-1598439590252-17bc9690a47e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cXVhbGl0eSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      detailedInfo: "The education system must focus on delivering high-quality curricula that are inclusive and adaptive to the changing needs of society."
    },
  ];

  const navigateToDashboard = () => {
    navigate('/dashboard');
  };

  const handleCardClick = (challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleCloseModal = () => {
    setSelectedChallenge(null);
  };

  useEffect(() => {
    // Trigger page load animation
    document.body.classList.add("page-load-animation");
  }, []);

  return (
    <div className="home-container">
      <div className="content-container">
        <h1 className="welcome-title">Welcome to Our Educational Data Platform</h1>
        <p className="intro-text">
        Explore the key issues in education today and discover how we are working toward innovative solutions.
        </p>

        <div className="image-grid">
          {challenges.map((challenge, index) => (
            <div
              className="image-card"
              key={index}
              onClick={() => handleCardClick(challenge)} // Add click handler
              style={{ cursor: 'pointer' }}
            >
              <img
                src={challenge.image}
                alt={challenge.title}
                className="card-image"
              />
              <div className="card-overlay">
                <h5 className="overlay-title">{challenge.title}</h5>
                <p className="overlay-description">{challenge.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-primary mt-4" onClick={navigateToDashboard}>
          Go to Dashboard
        </button>
      </div>

      {/* Bootstrap Modal */}
      {selectedChallenge && (
        <div
          className="modal fade show"
          id="challengeModal"
          tabIndex="-1"
          aria-labelledby="challengeModalLabel"
          aria-hidden="true"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog modal-sm modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="challengeModalLabel">
                  {selectedChallenge.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedChallenge.image}
                  alt={selectedChallenge.title}
                  className="img-fluid mb-3"
                />
                <p>{selectedChallenge.detailedInfo}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
