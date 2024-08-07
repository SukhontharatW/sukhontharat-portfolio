import { Link, useLoaderData } from "react-router-dom";
import { getProjects } from "../services/apiProject";

function ProjectAll() {
  const projects = useLoaderData();

  return (
    <div className="container">
      <div className="container__main project__all--group">
        {projects.map((project) => {
          return (
            <div
              className="project__all--item shadow"
              key={project._id.toString()}
            >
              <div className="project__all--image">
                <img src={project.image} alt="project image" />
              </div>
              <p className="p__strong">{project.project}</p>
              <div className="project__all--info">
                <p className="p__small">{project.type}</p>
                <div className="project__all--btn">
                  <Link
                    to={`/projects/${project._id.toString()}`}
                    className="btn__small"
                  >
                    Detail
                  </Link>
                  <Link
                    to={project.demo}
                    target="_blank"
                    className="btn__small"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const projects = await getProjects();

  console.log(projects);
  projects.sort((a, b) => {
    return Number(b.projectId) - Number(a.projectId);
  });
  console.log(projects);

  return projects;
}

export default ProjectAll;
