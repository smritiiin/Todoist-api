import { useState, useEffect } from "react";
import { TodoistApi } from "@doist/todoist-api-typescript";
const useProjects = () => {
  const [data, setData] = useState(null);

  const api = new TodoistApi("63849819e737c463b61c5269e86274771a79504f");

  useEffect(() => {
    api
      .getProjects()
      .then((projects) => {
        setData(projects);
      })
      .catch((error) => console.log(error));
  }, []);

  return data;
};

export default useProjects;
