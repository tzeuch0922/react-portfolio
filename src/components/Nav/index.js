import React, { useEffect } from 'react';

function Nav(props) {
  const {
    setCurrentCategory,
    currentCategory
  } = props;

  useEffect(() => {
    document.title = currentCategory;
  }, [currentCategory]);

  return (
    <nav className="tabs is-boxed">
        <div className="container has-text-centered">
            <ul id="tab-list" className="space-around">
                <li id="about-me-tab" className={currentCategory === "About Me"?"is-active is-size-5-desktop is-size-7-mobile mx-2":"is-size-5-desktop is-size-7-mobile mx-2"}><a href="#about-me" onClick={() => setCurrentCategory("About Me")}>About Me</a></li>
                <li id="contact-tab" className={currentCategory === "Contact"?"is-active is-size-5-desktop is-size-7-mobile mx-2":"is-size-5-desktop is-size-7-mobile mx-2"}><a href="#contact" onClick={() => setCurrentCategory("Contact")}>Contact</a></li>
                <li id="portfolio-tab" className={currentCategory === "Portfolio"?"is-active is-size-5-desktop is-size-7-mobile mx-2":"is-size-5-desktop is-size-7-mobile mx-2"}><a href="#portfolio" onClick={() => setCurrentCategory("Portfolio")}>Portfolio</a></li>
                <li id="resume-tab" className={currentCategory === "Resume"?"is-active is-size-5-desktop is-size-7-mobile mx-2":"is-size-5-desktop is-size-7-mobile mx-2"}><a href="#resume" onClick={() => setCurrentCategory("Resume")}>Resume</a></li>
            </ul>
        </div>
    </nav>
  );
}

export default Nav;