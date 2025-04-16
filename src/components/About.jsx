import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <div className="p-3" style={{ background: 'linear-gradient(135deg, #6db3f2 0%, #1e6c9d 100%)', borderRadius: '8px' }}>
      <h2 className="text-center text-white">About Quality Education</h2>
      <p className="text-white" style={{ fontSize: '1.2em' }}>
        Quality education is essential for individual and societal progress. It
        encompasses accessibility, inclusivity, and effective teaching
        methodologies.
      </p>
      
      <div className="d-flex justify-content-center mb-3">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip-education">Education is the key to success!</Tooltip>}
        >
          <Button variant="info" className="d-flex align-items-center">
            <FaGraduationCap className="mr-2" /> Learn More
          </Button>
        </OverlayTrigger>
      </div>

      <div className="text-white mt-5">
        <h4>Key Principles of Quality Education:</h4>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3 mb-3" style={{ border: 'none', backgroundColor: '#ffffffc7' }}>
              <h5>Accessibility</h5>
              <p>Ensuring education is available to everyone, regardless of background.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 mb-3" style={{ border: 'none', backgroundColor: '#ffffffc7' }}>
              <h5>Inclusivity</h5>
              <p>Education that embraces diversity and meets the needs of all learners.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 mb-3" style={{ border: 'none', backgroundColor: '#ffffffc7' }}>
              <h5>Effective Teaching</h5>
              <p>Utilizing modern methods and tools to engage and teach students.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
