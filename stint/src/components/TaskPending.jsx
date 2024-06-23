
import React, { useState } from "react";
import "./css/LandingPage.css";
import Navbar from "./Navbar";
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from "./Sidebar";

function TaskPending() {
  const data = [
    {
      title: "Dr.YYYYYYY",
      description: "Submission of CIA results",
      date: "25-04-2024",
      type: "progress",
    },
    {
      title: "Dr.SASASAS",
      description: "Spread this info to students",
      date: "29-04-2024",
      type: "yet",
    },
    {
      title: "Dr.qwerty",
      description: "Awareness on civil exams",
      date: "23-04-2024",
      type: "complete",
    },
    {
      title: "Dr.SASASAS",
      description: "Spread this info to students",
      date: "29-04-2024",
      type: "yet",
    },
    {
      title: "Dr.qwerty",
      description: "Awareness on civil exams",
      date: "23-04-2024",
      type: "complete",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const getTaskStatusColor = (type) => {
    switch (type) {
      case "yet":
        return "var(--yettostart)";
      case "progress":
        return "var(--progress)";
      case "complete":
        return "var(--complete)";
      default:
        return "inherit";
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.type === "progress" &&
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.date.includes(searchQuery))
  );

  return (
    <>
      {/* <Navbar/> */}
      <div className="land-container1">
        <Sidebar />
        <div className="main-bar1">
          <div className="search">
            <input
              type="text"
              className="main-search1"
              placeholder="🔎 Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="taskbar">
          <h3>Pending Tasks</h3>
          <div className="task-list">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div key={index} id={item.type}>
                <div>
                  <h3>{item.title} assigned</h3>
                  <div>
                    <p>Task Description: {item.description}</p>
                    <p style={{ marginRight: "10px" }}>Date: {item.date}</p>
                  </div>
                </div>
                <div
                  className="task-status"
                  style={{ backgroundColor: getTaskStatusColor(item.type) }}
                >
                  &nbsp;
                </div>
              </div>
            ))
            ): (
              <div className="no-match">No match found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskPending;
