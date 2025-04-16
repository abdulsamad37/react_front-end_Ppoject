import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Importing icons from react-icons
import "./Feedback.css";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [submittedFeedbacks, setSubmittedFeedbacks] = useState([]); // Store all feedbacks
  const [editingIndex, setEditingIndex] = useState(null); // Index for editing feedback

  // Load feedbacks from localStorage when component mounts
  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks"));
    if (storedFeedbacks) {
      setSubmittedFeedbacks(storedFeedbacks);
    }
  }, []);

  // Save feedbacks to localStorage whenever they change
  useEffect(() => {
    if (submittedFeedbacks.length > 0) {
      localStorage.setItem("feedbacks", JSON.stringify(submittedFeedbacks));
    }
  }, [submittedFeedbacks]);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a delay for feedback submission (e.g., network request)
    setTimeout(() => {
      setIsSubmitting(false);
      if (editingIndex === null) {
        // If not editing, add new feedback
        const updatedFeedbacks = [...submittedFeedbacks, feedback];
        setSubmittedFeedbacks(updatedFeedbacks);
      } else {
        // If editing, update the specific feedback
        const updatedFeedbacks = [...submittedFeedbacks];
        updatedFeedbacks[editingIndex] = feedback;
        setSubmittedFeedbacks(updatedFeedbacks);
        setEditingIndex(null); // Reset editing mode
      }
      setFeedback(""); // Clear the feedback field after submission
      setSuccessMessage("Thank you for your feedback!"); // Success message
    }, 1500);
  };

  const handleEdit = (index) => {
    setFeedback(submittedFeedbacks[index]); // Populate the textarea with the feedback to be edited
    setEditingIndex(index); // Set the editing index
  };

  const handleDelete = (index) => {
    const updatedFeedbacks = submittedFeedbacks.filter((_, i) => i !== index); // Remove the feedback
    setSubmittedFeedbacks(updatedFeedbacks);
    // Also update localStorage after deletion
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));
  };

  return (
    <div className="feedback-container">
      <h2 className="text-center mb-4">We Value Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="feedback" className="form-label">
            Your Feedback
          </label>
          <textarea
            id="feedback"
            className="form-control"
            rows="6"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Please share your thoughts..."
            required
          ></textarea>
        </div>

        {successMessage && (
          <div className="alert alert-success mb-3">{successMessage}</div>
        )}

        <div className="text-center">
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : editingIndex !== null ? "Update Feedback" : "Submit Feedback"}
          </button>
        </div>
      </form>

      {/* Render feedback cards below */}
      {submittedFeedbacks.length > 0 && (
        <div className="mt-4">
          <h3>Submitted Feedbacks:</h3>
          <div className="feedback-cards">
            {submittedFeedbacks.map((item, index) => (
              <div key={index} className="card mb-3">
                <div className="card-body">
                  <p>{item}</p>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(index)}
                    title="Edit"
                  >
                    <FaEdit /> {/* Edit Icon */}
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(index)}
                    title="Delete"
                  >
                    <FaTrashAlt /> {/* Delete Icon */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
