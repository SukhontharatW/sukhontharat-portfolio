/* eslint-disable no-unused-vars */
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getProjects } from "../services/apiProject";
// import plantShopImg from "../image/plant-shop.png";

function ProjectAll() {
  const projects = useLoaderData();
  const navigate = useNavigate();
  function handleDetail(projectId) {
    console.log(projectId);
    navigate(`/projects/${projectId}`);
  }

  return (
    <div className="container">
      <div className="container__main project__all--group">
        {projects.reverse().map((project) => {
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
                    // onClick={() => handleDetail(project._id.toString())}
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
