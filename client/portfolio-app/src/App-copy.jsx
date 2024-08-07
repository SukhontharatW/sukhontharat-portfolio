/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [listOfProjects, setListOfProjects] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/getProjects").then((response) =>
      setListOfProjects(response.data)
    );
  }, []);
  return (
    <div>
      <h1>Project Display</h1>
      {listOfProjects.map((project) => {
        return (
          <div key={project.id}>
            <p>
              <strong>Project Name :</strong> {project.name}
            </p>

            <p>
              <strong>Type :</strong> {project.type}
            </p>
            <a href={project.link} target="_blank">
              DEMO
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default App;
