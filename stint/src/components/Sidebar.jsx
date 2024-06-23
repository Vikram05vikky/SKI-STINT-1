import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import NotStartedIcon from "@mui/icons-material/NotStarted";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useContext, createContext, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import "../components/css/Sidebar.css";
// import "../App.css";
import namelogo from "../components/images/namelogo.png";
// import LandingPage from "./LandingPage";
import { useNavigate } from "react-router-dom";


function Sidebar() {
//   const { expanded } = useContext(SidebarContext);

const [profileExpanded, setProfileExpanded] = useState(false);

const toggleProfileExpand = () => {
  setProfileExpanded(!profileExpanded);
};

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  
  const handleAssigned = () => {
    navigate("/assigned");
  };

  const handleCompleted = () => {
    navigate("/completed");
  };
  
  const handlePending= () => {
    navigate("/pending");
  };
  const handleYet= () => {
    navigate("/yet");
  };
  const handleUsers= () => {
    navigate("/users");
  };

  return (
    // <nav className='sidebar'>
    <div className="sidebar">
      <header>
        <div className="image-text">
          <span className="image" style={{ marginTop: "0.7rem" }}>
            <img src={namelogo} alt="logo" />
          </span>
          <div className="text logo-text">
            <span className="name">SKI-STINT</span>
            <span className="profession">Task Management</span>
          </div>
        </div>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              <a onClick={handleHome}>
                <HomeIcon className="icon" />
                <span className="text nav-text">Home</span>
              </a>
            </li>
            <li className="nav-link" onClick={toggleProfileExpand}>
              <PersonIcon className="icon" />
              <span className="text nav-text">My Profile</span>
              <KeyboardArrowDownIcon
                style={{ marginTop: ".5rem", marginLeft: "1.6rem", color: "var(--text-color)", cursor: "pointer" }}
                className={`dropdown-icon ${profileExpanded ? "expanded" : ""}`}
              />
            </li>
            {profileExpanded && (
            <ul className="sub-menu-links">
                <li className="nav-link" onClick={handleAssigned}>
                  <AssignmentIcon className="icon" />
                  <span className="text nav-text">Assigned Tasks</span>
                </li>
                <li className="nav-link" onClick={handleCompleted}>
                  <AssignmentTurnedInIcon className="icon" />
                  <span className="text nav-text">Tasks Completed</span>
                </li>
                <li className="nav-link" onClick={handlePending}>
                  <AssignmentLateIcon className="icon" />
                  <span className="text nav-text">Tasks Pending</span>
                </li>
                <li className="nav-link" onClick={handleYet}>
                  <NotStartedIcon className="icon" />
                  <span className="text nav-text">Tasks Yet to Start</span>
                </li>
            </ul>
            )}
            <li className="nav-link">
              <a onClick={handleUsers}>
                <AssignmentIndIcon className="icon" />
                <span className="text nav-text">View users</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li>
            <a onClick={() => console.log("Logout")}>
              <LogoutIcon className="icon" />
              <span className="text nav-text">Logout</span>
            </a>
          </li>
        </div>
      </div>
      </div>
    // </nav>
  );
}

export default Sidebar;

