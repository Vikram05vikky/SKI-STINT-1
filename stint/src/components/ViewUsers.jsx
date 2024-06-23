
import React, { useState } from "react";
import "./css/ViewUsers.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import SearchIcon from '@mui/icons-material/Search';

function ViewUsers() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleStatus = () => {
    navigate("/status");
  };

  const data = [
    {
      name: "Dr.YYYYYYY",
      designation: "CSE HOD",
    },
    {
      name: "Dr.ABCDE",
      designation: "ECE HOD",
    },
    {
      name: "Dr.qwerty",
      designation: "Ass.Prof",
    },
    {
      name: "Dr.abcdefg",
      designation: "Ass.Prof",
    },
    {
      name: "Dr.SASASAS",
      designation: "Ass.Prof",
    },
    {
      name: "Dr.pqrstuv",
      designation: "Ass.Prof",
    },
    {
      name: "Dr.mnopqrs",
      designation: "Ass.Prof",
    },
    {
      name: "Dr.SASASAS",
      designation: "Ass.Prof",
    },
    {
      name: "Dr.lmnopq",
      designation: "Ass.Prof",
    },
    {
      name: "Dr.qwerty",
      designation: "Ass.Prof",
    },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.designation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
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

        <div className="taskbar1">
          <div className="task-list1">
            { filteredData.length > 0 ?
            filteredData.map((item, index) => (
              <div key={index}>
                <div className="content1">
                  <div className="icn1">
                    <AccountCircleIcon sx={{ fontSize: "2.5rem" }} />
                  </div>
                  <div className="det1-btn1">
                    <div className="det1">
                      <h3>{item.name}</h3>
                      <p>Designation: {item.designation}</p>
                    </div>
                    <div className="btn1">
                      <button
                        style={{
                          borderRadius: "20px",
                          border: "none",
                          width: "120px",
                          height: "40px",
                          fontWeight: "bolder",
                        }}
                        onClick={handleStatus}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          ):(
            <div className="no-match">No Match found</div>
          )
          }
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewUsers;
