import React from 'react';
import profilePic from '../../assets/images/Business-Picture-Crop.jpg';

function AboutMe()
{
    return(
        <section className="my-5">
            <div className="columns">
                <div className="column is-one-third">
                    <div className="card has-text-centered" style={{ width: "100%" }}>
                        <header className="card-header has-text-centered" style={{ width: "100%" }}>
                            <h1 style={{ width: "100%" }}>Tony Zeuch</h1>
                        </header>
                        <div className="card-content">
                            <div className="card-image">
                                <figure className="image">
                                    <img src={profilePic} className="my-2" alt="cover"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="box">
                        <article className="media-content">
                            <div className="block has-text-left">
                                I've been programming since I was in high school. My most proficient languages are Javascript, Python, and Java. My main 
                                experience is in back-end development, however, I've recently been learning about web-development to increase my exprience
                                with front-end development and network technologies.
                            </div>
                            <div className="block has-text-left">
                                I first got into coding at my local technology center under the pre-engineering program. I went on to 
                                major in Computer Engineering in college, where I increased my experience in Java, Python, C, and Electrical Engineering.
                            </div>
                            <div className="block has-text-left">
                                I am currently looking into higher-level languages, libraries, and frameworks to work more efficiently. 
                                My goal is to I'm looking forward to learning everything I can as I further my career.
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;