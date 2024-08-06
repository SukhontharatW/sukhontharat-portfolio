/* eslint-disable no-unused-vars */

import ProjectAll from "../components/ProjectAll";

function Project() {
  return (
    <div className="container">
      <div className="container__main project">
        <h2 className="heading__h2">All Projects</h2>
      </div>
      <div className="container__main project__greeting">
        <p className="p__normal">
          The purpose of all projects is to bring knowledge of Front-end /
          Back-end technologies to life and embrace processes of software
          development with the love of technology and arts.
        </p>
      </div>
      <ProjectAll />
    </div>
  );
}
export default Project;
