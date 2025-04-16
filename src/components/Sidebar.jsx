import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Home, Star, Inbox, FileText, MessageSquare } from "lucide-react"; // Added MessageSquare icon for Feedback
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  return (
    <div className="d-flex">
      <div
        className="sidebar-container d-flex flex-column"
        style={{
          width: "250px",
          minHeight: "100vh",
          boxShadow: "4px 0px 30px rgba(0, 0, 0, 0.1)", // Soft shadow
        }}
      >
        <div className="sidebar-header p-4 d-flex flex-column justify-content-center align-items-center border-bottom">
          {/* Profile Image */}
          <img
            src="https://www.shutterstock.com/shutterstock/photos/767491552/display_1500/stock-vector-education-tree-of-knowledge-and-open-book-effective-modern-education-template-design-back-to-767491552.jpg" // Replace with your image URL
            alt="Quality Education Logo"
            className="rounded-circle mb-3"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
          <h5 className="text-light m-0" style={{ fontWeight: "bold" }}>
            QUALITY EDUCATION
          </h5>
        </div>

        <div className="d-flex flex-column flex-grow-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center text-decoration-none p-3 my-2 rounded-3 ${isActive ? "active" : "inactive"}`
            }
          >
            <Home className="me-3" size={20} />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center text-decoration-none p-3 my-2 rounded-3 ${isActive ? "active" : "inactive"}`
            }
          >
            <Star className="me-3" size={20} />
            <span>Dashboard</span>
          </NavLink>

          {/* New Reports Section */}
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center text-decoration-none p-3 my-2 rounded-3 ${isActive ? "active" : "inactive"}`
            }
          >
            <FileText className="me-3" size={20} />
            <span>Reports</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center text-decoration-none p-3 my-2 rounded-3 ${isActive ? "active" : "inactive"}`
            }
          >
            <Inbox className="me-3" size={20} />
            <span>About</span>
          </NavLink>

          {/* New Feedback Section */}
          <NavLink
            to="/feedback"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center text-decoration-none p-3 my-2 rounded-3 ${isActive ? "active" : "inactive"}`
            }
          >
            <MessageSquare className="me-3" size={20} />
            <span>Feedback</span>
          </NavLink>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section flex-grow-1 bg-light" style={{ borderRadius: "0 20px 20px 0" }}>
        <Outlet />
      </div>
    </div>
  );
};

const styles = `
.sidebar-container {
  background: #ff5733; /* Purple to Blue Gradient */
  box-shadow: 4px 0px 30px rgba(0, 0, 0, 0.1); /* Soft shadow */
}

.sidebar-header {
  font-weight: bold;
  color: #fff;
  font-size: 1.3rem;
  text-align: center;
  padding: 20px;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 14px 20px;
  transition: all 0.3s ease;
  color: #d1d1d1; /* Default color for inactive links */
  font-size: 1.1rem;
  border-radius: 12px;
  margin-bottom: 12px;
  text-decoration: none;
}

.nav-link:hover {
  background-color: rgba(19, 154, 244, 0.1); /* Light blue hover effect */
  color: #fff !important; /* White text on hover */
}

.nav-link svg {
  transition: color 0.3s ease;
  color: #d1d1d1; /* Gray for icons by default */
  margin-right: 12px;
}

.nav-link:hover svg {
  color: rgb(255, 255, 255); /* White icons on hover */
}

.nav-link.active {
  background-color: rgba(255, 255, 255, 0.2); /* Light background for active link */
  color: #fff !important;
  font-weight: bold;
}

.nav-link.inactive {
  color: #d1d1d1; /* Muted gray for inactive links */
}

.nav-link.inactive:hover {
  background-color: rgba(19, 154, 244, 0.1); /* Subtle hover effect */
  opacity: 1;
}

.content-section {
  padding: 20px;
  background-color: #f4f5f7; /* Light background for content section */
  border-radius: 0 20px 20px 0; /* Rounded right corners */
  height: 100vh;
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Sidebar;
