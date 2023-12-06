import { TodoistApi } from "@doist/todoist-api-typescript";
import { useState, useEffect } from "react";

const useViewTasks = () => {
  const [taskData, setTaskData] = useState();
  const [loading, setLoading] = useState(false);

  const api = new TodoistApi("63849819e737c463b61c5269e86274771a79504f");

  useEffect(() => {
    if (!loading) {
      setLoading(true);
      api
        .getTasks({ project_id: "2324422496" })
        .then((tasks) => setTaskData(tasks))
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);


  const [task, setTask] = useState(null);
   useEffect(() => {
     if (taskData) {
       const filteredTasks = taskData.filter(
         (element) => element.sectionId === "140963461"
       );
       setTask(filteredTasks);
     }
   }, [taskData]);

  //  console.log("TOTAL TASK : ", taskData.length);
   console.log("TASK COMPLETED: ", task);
  return  task
};

export default useViewTasks;
