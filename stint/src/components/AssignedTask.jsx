
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./css/LandingPage.css";

function LandingPage() {
  const todo = [
    {
      title: "Dr.YYYYYYY",
      description: "Submission of CIA results",
      date: "25-04-2024",
    },
    {
      title: "Dr.SASASAS",
      description: "Spread this info to students",
      date: "29-04-2024",
    },
    {
      title: "Dr.qwerty",
      description: "Awareness on civil exams",
      date: "23-04-2024",
    },
    {
      title: "Dr.SASASAS",
      description: "Spread this info to students",
      date: "29-04-2024",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = todo.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.date.includes(searchQuery)
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
          <h3>Assigned Tasks</h3>
          <div className="task-list">
            {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div key={index}>
                <div>
                  <h3>{item.title} assigned</h3>
                  <div>
                    <p>Task Description: {item.description}</p>
                    <p style={{ marginRight: "10px" }}>Date: {item.date}</p>
                  </div>
                </div>
                {/* <div className="task-status" style={{ backgroundColor: getTaskStatusColor(item.type) }}>&nbsp;</div> */}
              </div>
            ))
          ) : (
            <div className="no-match">No match found</div>
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
