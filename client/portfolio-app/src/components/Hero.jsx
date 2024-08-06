import LinkButton from "./LinkButton";
import profileImg from "../image/profile.png";
import ProjectAll from "./ProjectAll";
function Hero() {
  return (
    <div className="container">
      <div className="container__main hero">
        <p className="p__normal">Hi, I am</p>
        <h1 className="heading__h1 ">Sukhontharat Wetthaisong</h1>
        <p className="p__normal">
          A passionate developer with 9 years of experience in software
          development.
        </p>
        <div className="hero-btn">
          <LinkButton to={"/projects"} styling="btn__small">
            Explore Projects
          </LinkButton>
        </div>
        <div className="profile ">
          <img src={profileImg} alt="profile image" />
        </div>
        <p className="p__small quote">&quot;Let&apos;s connect! 😊&quot;</p>
      </div>
      <div className="container__main home__project">
        <h2 className="heading__h2">Project</h2>
      </div>
      <ProjectAll />
    </div>
  );
}

export default Hero;
