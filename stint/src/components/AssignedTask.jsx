

import "./css/LandingPage.css";

  
function LandingPage() {

    const todo =[
        {
          title: "Dr.YYYYYYY",
          description: "Submission of CIA results",
          date: "25-04-2024"
        },
        {
          title: "Dr.SASASAS",
          description: "Spread this info to students",
          date: "29-04-2024"
        },
        {
          title: "Dr.qwerty",
          description: "Awareness on civil exams",
          date: "23-04-2024"
        },
        {
          title: "Dr.SASASAS",
          description: "Spread this info to students",
          date: "29-04-2024"
        }
      ]
    
 
//   const [activeTab, setActiveTab] = useState("all");

//   const getTaskStatusColor = (type) => {
//     switch (type) {
//       case "yet":
//         return "var(--yettostart)";
//       case "progress":
//         return "var(--progress)";
//       case "completed":
//         return "var(--completed)";
//       default:
//         return "inherit";
//     }
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const filteredData = activeTab === "all" ? data : data.filter((item) => item.type === activeTab);

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
            />
          </div>
          </div>

       
        <div className="taskbar">
          <h3>Assigned Tasks</h3>
          <div className="task-list">
            
            {todo.map((item, index) => (
              <div key={index} id={item.type}>
                <div>
                  <h3>{item.title} assigned</h3>
                  <div>
                    <p>Task Description: {item.description}</p>
                    <p style={{marginRight:"10px"}}>Date: {item.date}</p>
                  </div>
                </div>
                {/* <div className="task-status" style={{ backgroundColor: getTaskStatusColor(item.type) }}>&nbsp;</div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;