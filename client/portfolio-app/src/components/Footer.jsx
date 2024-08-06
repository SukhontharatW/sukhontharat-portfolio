/* eslint-disable no-unused-vars */
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin, FaSquareThreads } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container">
      <div className="container__main footer">
        <h2 className="heading__h2">Contact</h2>
      </div>
      <div className="container__main footer__contact ">
        <div className="contact__info">
          <p className="p__normal">
            <span>
              <MdEmail size={26} />
            </span>
            sukhontharat.contact@gmail.com
          </p>
          <p className="p__normal">
            <span>
              <FaPhoneAlt size={26} className="icon" />
            </span>
            (+66) 62-196-5227
          </p>
          <p className="p__normal">
            <span>
              <MdLocationPin size={26} />
            </span>
            Nakhon Ratchasima, Thailand
          </p>
        </div>
        <div className="contact__social">
          <Link
            to={"https://www.linkedin.com/in/sukhontharat-w"}
            target="_blank"
            className="p__normal"
          >
            <span>
              <FaLinkedin size={26} />
            </span>
            https://www.linkedin.com/in/sukhontharat-w
          </Link>
          <Link
            to={"https://www.threads.net/@sukhontharatw"}
            target="_blank"
            className="p__normal"
          >
            <span>
              <FaSquareThreads size={26} />
            </span>
            https://www.threads.net/@sukhontharatw
          </Link>
        </div>
      </div>
      <div className="container__main footer__final shadow">
        <p className="p__strong">Sukhontharat</p>
        <p className="p__small">
          Copyright©2024 Sukhontharat W. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
