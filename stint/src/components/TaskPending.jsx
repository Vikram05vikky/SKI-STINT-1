
import "./css/LandingPage.css";
import Navbar from "./Navbar";
import SearchIcon from '@mui/icons-material/Search';

  

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
    
    //   const [activeTab, setActiveTab] = useState("all");
    
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

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const filteredData = activeTab === "completed" ? data : data.filter((item) => item.type === activeTab);
  const filteredData = data.filter((item) => item.type === "progress");

  return (
    <>
    {/* <Navbar/> */}
      <div className="land-container1">
      <div className="main-bar1">
          <div className="search">
            <input
              type="text"
              className="main-search1"
              placeholder="🔎 Search..."
              color="black"
            />
          </div>
          </div>
        
        {/* <div className="land-container1">
        <div className="main-bar1">
          <div className="search">
            <input
              type="text"
              className="main-search1"
              placeholder="🔎 Search..."
            />
          </div>
          </div>
        </div> */}

        
        <div className="taskbar">
          <h3>Pending Tasks</h3>
          <div className="task-list">
            
            {filteredData.map((item, index) => (
              <div key={index} id={item.type}>
                <div>
                  <h3>{item.title} assigned</h3>
                  <div>
                    <p>Task Description: {item.description}</p>
                    <p style={{marginRight:"10px"}}>Date: {item.date}</p>
                  </div>
                </div>
                <div className="task-status" style={{ backgroundColor: getTaskStatusColor(item.type) }}>&nbsp;</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskPending;