import { useState } from "react";
import "./css/Status.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Status() {

  // const navigate = useNavigate();
  // const change = () => {
  //   navigate("/home");
  // };

  const details=[
    {
            name:"Dr.YYYYYYY",
            designation:"Assistant Professor"
        },
      
  ]
            
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

  const [activeTab, setActiveTab] = useState("all");

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

 
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  const filteredData = activeTab === "all" ? data : data.filter((item) => {
    if (activeTab === "progress") {
      return item.type === "progress" || item.type === "yet";
    } else {
      return item.type === activeTab;
    }
  });
  

  return (
    <>
      <div className="land-container2">
        <div className="main-bar2">
        <div className="search">
            <input
              type="text"
              className="main-search1"
              placeholder="🔎 Search..."
            />
          </div>        
          </div>
        <div className="main-tabs2">
          {/* <div onClick={change}><h2>Home</h2></div> */}
          <div onClick={() => handleTabClick("all")}><h2>Profile Dashboard</h2></div>
          <div onClick={() => handleTabClick("complete")}><h2>Work Completed</h2></div>
          <div onClick={() => handleTabClick("progress")}><h2>Work Pending</h2></div>
          {/* <div onClick={() => handleTabClick("yet")}><h2>Yet To Start</h2></div> */}
        </div>
        
        <div>
    <div className="task-list2">
        {details.map((item,index)=>(
            <div className="profile-details2" key={index} id={item.name}>
                <div className="profile-icon2">
                    <AccountCircleIcon fontSize='large' style={{marginTop:"2px",color:"var(--nav-hover)"}}/>
                </div>
                <div className="details2">
                    <h2>{item.name}</h2>
                    <h3>{item.designation}</h3>
                </div>
            </div>
        ))}
    </div>
</div>

        <div className="taskbar2">
          <h3>Tasks assigned</h3>
          <div className="task-list2">
            {filteredData.map((item, index) => (
              <div key={index} id={item.type}>
                <div>
                  <h3>{item.title} assigned</h3>
                  <div>
                    <p>Task Description: {item.description}</p>
                    <p style={{marginRight:"10px"}}>Date: {item.date}</p>
                  </div>
                </div>
                <div className="task-status2" style={{ backgroundColor: getTaskStatusColor(item.type) }}>&nbsp;</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Status;