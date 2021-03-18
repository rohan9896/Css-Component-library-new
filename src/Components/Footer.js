import React from "react";
import '../base.css'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className="footer">
        <h2>Connect With Me at:</h2>
        <ul className="footer__socialList">
          <li>
            <a
              className="socialIcon"
              href="https://www.facebook.com/rohang9896"
            >
              <img
                src="https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/social%20icon/facebook.png?raw=true"
                alt="facebook"
              />
            </a>
          </li>
          <li>
            <a
              class="socialIcon"
              href="https://www.linkedin.com/in/rohan-gupta-a88883189"
            >
              <img
                src="https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/social%20icon/linkedin.png?raw=true"
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a class="socialIcon" href="https://twitter.com/rohan_gupta96">
              <img
                src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/96c0f29d88447b22f4e2c1fde37458cef5e2b412/icons/social%20icon/twitter.svg"
                alt="twitter"
              />
            </a>
          </li>
          <li>
            <a class="socialIcon" href="https://rohangupta-75149.medium.com/">
              <img
                src="https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/social%20icon/medium.png?raw=true"
                alt="medium"
              />
            </a>
          </li>
        </ul>
        <p>Made with 🧡 By Rohan Gupta</p>
      </footer>
    </div>
  );
}

export default Footer;
