/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import { getProjectItem } from "../services/apiProject";
function ProjectItem() {
  const projectItem = useLoaderData();
  // console.log(projectItem);
  const { image, name, project, code, demo, release, description, tech } =
    projectItem;
  return (
    <div className="container">
      <div className="container__main projects">
        <div className="project__image">
          <img src={image} alt="project image" />
        </div>
        <div className="project__info">
          <h5 className="heading__h5">{name}</h5>
          <h3 className="heading__h3">{project}</h3>
          <div className="project__cta">
            <Link to={code} target="_blank" className="btn__big">
              Code
            </Link>
            <Link to={demo} target="_blank" className="btn__big">
              Demo
            </Link>
          </div>
          <p className="p__small">Released {release}</p>
        </div>
      </div>
      <div className="container__main title">
        <h5 className="heading__h5">Project Overview</h5>
      </div>
      <div className="container__main info__container">
        <p className="p__normal">{description}</p>
      </div>
      <div className="container__main title">
        <h5 className="heading__h5">Technologies Used in This Project</h5>
      </div>
      <div className="container__main list__container">
        <ul className="list__set">
          {tech.map((techItem) => {
            return (
              <li className="list__item" key={techItem.techName}>
                <p className="p__normal">
                  <strong>{techItem.techName} : </strong>
                  {techItem.usage}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const projectItem = await getProjectItem(params.projectId);
  // console.log(projectItem);
  return projectItem;
}

export default ProjectItem;
