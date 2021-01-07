import React from 'react';
import resume from "../../assets/pdf/resume-winter-2020.pdf";

function Resume()
{
    return (
        <>
            <h1 className="title">Full Resume</h1>
            <a href={resume} className="button block" download="resume-summer-2020.pdf">Download</a>
            <h1 className="title">Overview</h1>
            <div className="columns block" style={{width: "100%"}}>
                <div className="column">
                    <div className="block card" style={{width: "100%"}}>
                        <div className="card-header has-text-centered">
                            <h1 style={{width: "100%"}}>Backend Technologies</h1>
                        </div>
                        <div className="card-content has-text-left">
                            <p>Node.js</p>
                            <p>mySQL</p>
                            <p>sqlite</p>
                            <p>MongoDB</p>
                            <p>Express</p>
                            <p>Heroku</p>
                            <p>REST</p>
                        </div>
                    </div>
                    <div className="block card" style={{width: "100%"}}>
                        <div className="card-header">
                            <h1 style={{width: "100%"}}>Programming Languages</h1>
                        </div>
                        <div className="card-content has-text-left">
                            <p>Javascript</p>
                            <p>Java</p>
                            <p>Python</p>
                            <p>C</p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card" style={{width: "100%"}}>
                        <div className="card-header">
                            <h1 style={{width: "100%"}}>Frontend Technologies</h1>
                        </div>
                        <div className="card-content">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>React</p>
                            <p>Bootstrap</p>
                            <p>JQuery</p>
                            <p>Bulma</p>
                            <p>Sass</p>
                            <p>Mobile Responsiveness</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume;