import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Nav() {
  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  };
  const hiddenSideBar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  };
  return (
    <div className="container__nav">
      <nav className="navbar shadow">
        <ul className="navbar__list">
          <li className="navbar__item p__strong">
            <LinkButton to={"/"} styling="navbar__link">
              Sukhontharat
            </LinkButton>
          </li>
          <li className="navbar__item p__strong hideOnMobile">
            <LinkButton to={"/"} styling="navbar__link">
              Home
            </LinkButton>
          </li>
          <li className="navbar__item p__strong hideOnMobile">
            <LinkButton to={"/projects"} styling="navbar__link">
              Projects
            </LinkButton>
          </li>
          <li className="navbar__item p__strong hideOnMobile">
            <LinkButton to={"/about"} styling="navbar__link">
              About
            </LinkButton>
          </li>
          <li className="navbar__item p__strong hideOnMobile">
            <Link
              to={
                "https://hjmcuvfhzmhjauagcqrq.supabase.co/storage/v1/object/sign/CV-pdf/Resume-Sukhontharat.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDVi1wZGYvUmVzdW1lLVN1a2hvbnRoYXJhdC5wZGYiLCJpYXQiOjE3MjMwNjc1NDgsImV4cCI6MTc1NDYwMzU0OH0.m85tZf_ZArhoWuID8pDXnhbEyC7S9z8EXn7poPTOL7c&t=2024-08-07T21%3A52%3A28.370Z"
              }
              className="navbar__link"
              target="_blank"
            >
              Resume
            </Link>
          </li>
          <li className="navbar__item p__strong " onClick={showSidebar}>
            <Link className="navbar__link ">
              <HiOutlineMenu size={26} className="menu-btn" />
            </Link>
          </li>
        </ul>
        <ul className="navbar__list sidebar">
          <li className="navbar__item p__strong" onClick={hiddenSideBar}>
            <Link className="navbar__link">
              <HiOutlineX size={26} />
            </Link>
          </li>
          <li className="navbar__item p__strong" onClick={hiddenSideBar}>
            <LinkButton to={"/"} styling="navbar__link">
              Home
            </LinkButton>
          </li>
          <li className="navbar__item p__strong" onClick={hiddenSideBar}>
            <LinkButton to={"/projects"} styling="navbar__link">
              Projects
            </LinkButton>
          </li>
          <li className="navbar__item p__strong" onClick={hiddenSideBar}>
            <LinkButton to={"/about"} styling="navbar__link">
              About
            </LinkButton>
          </li>
          <li className="navbar__item p__strong" onClick={hiddenSideBar}>
            <Link
              to={
                "https://hjmcuvfhzmhjauagcqrq.supabase.co/storage/v1/object/sign/CV-pdf/Resume-Sukhontharat.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDVi1wZGYvUmVzdW1lLVN1a2hvbnRoYXJhdC5wZGYiLCJpYXQiOjE3MjMwNjc1NDgsImV4cCI6MTc1NDYwMzU0OH0.m85tZf_ZArhoWuID8pDXnhbEyC7S9z8EXn7poPTOL7c&t=2024-08-07T21%3A52%3A28.370Z"
              }
              className="navbar__link"
              target="_blank"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
