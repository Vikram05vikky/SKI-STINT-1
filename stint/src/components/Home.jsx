import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "../assets/css/landingpage.css";
import './css/Home.css'
// import Navbar from "./Navbar";
import "../App.css";
import IMG from "./images/img3.png";
import Button from "@mui/material/Button";

function Home() {
  const [assignedTo, setAssignedTo] = useState("");
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCancel = () => {
    setAssignedTo("");
    setTaskName("");
    setDescription("");
    setDueDate("");
  };

  const handleAssign = () => {
    if (
      assignedTo === "" ||
      taskName === "" ||
      description === "" ||
      dueDate === ""
    ) {
      toast.error("Fill the details to assign the task", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Task assigned successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      handleCancel();
    }
  };

  return (
    <>
    
      <div className="land-container">
        <div className="main-bar">
          
        </div>
        <div className="taskbar3">
          <h3>Assign a Task</h3>
          <div className="task-list">
            <form onSubmit={handleSubmit} className="form">
              <div className="inputs">
                <div className="input-container">
                  
                  <input
                    type="text"
                    id="box1"
                    name="email"
                    className="box"
                    placeholder="Assigned To"
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                  />
                </div>
                
                  <input
                    type="text"
                    name="task"
                    className="box"
                    placeholder="Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                  />
               
                  <textarea
                    name="desc"
                    id="desc"
                    className="box"
                    placeholder="Description of the task"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
               
                  <input
                    type="text"
                    name="duedate"
                    className="box"
                    placeholder="Due Date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />

              <div className="btn">
                <Button variant="contained" onClick={handleAssign} id="submit">
                  Assign Task
                </Button>
                <Button variant="contained" onClick={handleCancel} id="cancel">
                  Cancel
                </Button>
              </div>
              </div>
            </form>
          </div>
            <div className="side">
              <img src={IMG} alt="" />
            </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default Home;
