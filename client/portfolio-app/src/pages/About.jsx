import { Link } from "react-router-dom";
import profileImg from "../image/profile.png";
function About() {
  return (
    <div className="container">
      <div className="container__main about">
        <h5 className="heading__h5">About Me</h5>
        <div className="profile">
          <img src={profileImg} alt="profile image" />
        </div>
        <p className="p__normal align__center">
          Hello, my name is Sukhontharat Wetthaisong, you can call me Koi(ก้อย).
        </p>
        <p className="p__normal">
          I am currently studying Frontend/Backend technologies. I previously
          worked as a Senior Software Engineer at Seagate Technology for nine
          years. Seagate is one of the world&apos;s leading companies in the
          production of hard disk drives or data storage devices. During my time
          there, I was responsible for developing and improving the software
          used in creating Seagate&apos;s hard disk drives. I also served as the
          Product Lead for the software team, helping to manage and ensure the
          smooth, timely, and efficient operation of the team.
        </p>
        <p className="p__normal">
          After working there for nine years, I reached a point where I wanted
          to expand my knowledge of technology and found a strong interest in
          growing within the developer career path. To accelerate my learning, I
          decided to resign from Seagate and focus on studying Frontend/Backend
          technologies, starting from the basics like HTML and progressing to
          frameworks or libraries like React. I spent a year learning and
          developing projects during this time, and I am now actively seeking
          job opportunities. I am confident that my work experience and the
          additional knowledge I have gained will contribute positively to Tech
          companies.
        </p>
        <Link
          to={
            "https://hjmcuvfhzmhjauagcqrq.supabase.co/storage/v1/object/sign/CV-pdf/Resume-Sukhontharat.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDVi1wZGYvUmVzdW1lLVN1a2hvbnRoYXJhdC5wZGYiLCJpYXQiOjE3MjMyMzQ0NzUsImV4cCI6MTc1NDc3MDQ3NX0.gU63FsOVypAXWv9V2sTO0RbH7d4iUcxZeSvxy_Bk2Rs&t=2024-08-09T20%3A14%3A35.173Z"
          }
          target="_blank"
          className="btn__small"
        >
          My Resume
        </Link>
      </div>
      <div className="container__main title">
        <h5 className="heading__h5">Key Technical Skills</h5>
      </div>
      <div className="container__main list__container">
        <ul className="list__set">
          <li className="list__item">
            <p className="p__normal">
              <strong>Programming language, Framework, Library : </strong>
              Python, JavaScript, HTML, CSS, SASS, Styled-Components,
              TailwindCSS, React, Node.js, Express
            </p>
          </li>
          <li className="list__item">
            <p className="p__normal">
              <strong>Database : </strong>
              Supabase (Postgres database), MongoDB(NoSQL)
            </p>
          </li>
          <li className="list__item">
            <p className="p__normal">
              <strong>Software Version Control : </strong>
              Git , Perforce
            </p>
          </li>
          <li className="list__item">
            <p className="p__normal">
              <strong> Tool : </strong>
              Figma, VS code, Chrome Developer Tools, Google Lighthouse,
              Netlify, Render, Thunder Client
            </p>
          </li>
          <li className="list__item">
            <p className="p__normal">
              <strong>Development Methodologies : </strong>
              RESTful API, Responsive Website, UI/UX design
            </p>
          </li>
        </ul>
      </div>

      {/* Certificate */}
      <div className="container__main title">
        <h5 className="heading__h5">Certificate</h5>
      </div>
      <div className="container__main list__container">
        <ul className="list__set">
          <li className="list__item">
            <p className="p__normal">
              <strong>Advanced CSS and Sas - </strong>
              Udermy 2024
            </p>
          </li>
          <li className="list__item">
            <p className="p__normal">
              <strong>JavaScript - </strong>
              Udermy 2024
            </p>
          </li>
          <li className="list__item">
            <p className="p__normal">
              <strong>Ultimate React Course - </strong>Udermy 2024
            </p>
          </li>
          <li className="list__item">
            <p className="p__normal">
              <strong>
                Responsive Real-World Websites with HTML and CSS -
              </strong>
              Udermy 2023
            </p>
          </li>
        </ul>
      </div>

      {/* Topic of Interest  */}
      <div className="container__main title">
        <h5 className="heading__h5">Topic of Interest</h5>
      </div>
      <div className="container__main list__container">
        <ul className="list__set">
          <li className="list__item">
            <p className="p__normal">
              <strong>UX/UI Design</strong>
            </p>
          </li>
          <li className="list__item">
            <p className="p__normal">
              <strong>Data Virtualization</strong>
            </p>
          </li>
          <li className="list__item">
            <p className="p__normal">
              <strong>Health</strong>
            </p>
          </li>
          <li className="list__item">
            <p className="p__normal">
              <strong>Arts</strong>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
