import React from 'react';
import website_pic1 from "../../assets/images/budget-tracker.png";
import website_pic2 from "../../assets/images/Gift-fairy.PNG";
import website_pic3 from "../../assets/images/Fair-Streem.PNG";
import website_pic4 from "../../assets/images/weather-dashboard.PNG";
import program_pic1 from "../../assets/images/Minesweeper.png";
import program_pic2 from "../../assets/images/sudoku-solve.PNG";
import program_pic3 from "../../assets/images/employee-tracker.PNG";
import program_pic4 from "../../assets/images/team-profile-generator.PNG";

function Portfolio()
{
    return (
        <>
            <div className="box">
                <h1 className="title">Websites</h1>
                <div className="columns">
                    <div className="column">
                        <div className="card" style={{width: "100%"}}>
                            <div className="card-header">
                                <p style={{width: "100%"}}>Budget Tracker</p>
                            </div>
                            <div className="card-content">
                                <a href="https://arcane-thicket-29860.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <img src={website_pic1} alt="budget-tracker"></img>
                                </a>
                            </div>
                            <div className="card-footer">
                                <p style={{width: "100%"}}>Node.js, MongoDB, Heroku</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card" style={{width: "100%"}}>
                            <div className="card-header">
                                <p style={{width: "100%"}}>Gift Fairy</p>
                            </div>
                            <div className="card-content">
                                <a href="https://polar-cove-94723.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <img src={website_pic2} alt="gift-fairy"></img>
                                </a>
                            </div>
                            <div className="card-footer">
                                <p style={{width: "100%"}}>Node.js, Sequelize, Heroku</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card" style={{width: "100%"}}>
                            <div className="card-header">
                                <p style={{width: "100%"}}>Fair Streem</p>
                            </div>
                            <div className="card-content">
                                <a href="https://fairstreem.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <img src={website_pic3} alt="fair-streem"></img>
                                </a>
                            </div>
                            <div className="card-footer">
                                <p style={{width: "100%"}}>Javascript, Bulma, API, Github Pages</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card" style={{width: "100%"}}>
                            <div className="card-header">
                                <p style={{width: "100%"}}>Weather Dashboard</p>
                            </div>
                            <div className="card-content">
                                <a href="https://tzeuch0922.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
                                    <img src={website_pic4} alt="weather-dashboard"></img>
                                </a>
                            </div>
                            <div className="card-footer">
                                <p style={{width: "100%"}}>Javascript, Bootstrap, API, Github Pages</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box">
                <h1 className="title">Programs</h1>
                <div className="columns">
                    <div className="column">
                        <div className="card" style={{width: "100%"}}>
                            <div className="card-header">
                                <p style={{width: "100%"}}>Minesweeper</p>
                            </div>
                            <div className="card-content">
                                <a href="https://github.com/tzeuch0922/Minesweeper" target="_blank" rel="noreferrer">
                                    <img src={program_pic1} alt="minesweeper"></img>
                                </a>
                            </div>
                            <div className="card-footer">
                                <p style={{width: "100%"}}>Java</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card" style={{width: "100%"}}>
                            <div className="card-header">
                                <p style={{width: "100%"}}>Sudoku Solver</p>
                            </div>
                            <div className="card-content">
                                <a href="https://github.com/tzeuch0922/Sudoku-Solver" target="_blank" rel="noreferrer">
                                    <img src={program_pic2} alt="sudoku-solver"></img>
                                </a>
                            </div>
                            <div className="card-footer">
                                <p style={{width: "100%"}}>Python</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card" style={{width: "100%"}}>
                            <div className="card-header">
                                <p style={{width: "100%"}}>Employee Tracker</p>
                            </div>
                            <div className="card-content">
                                <a href="https://github.com/tzeuch0922/employee-tracker" target="_blank" rel="noreferrer">
                                    <img src={program_pic3} alt="employee-tracker"></img>
                                </a>
                            </div>
                            <div className="card-footer">
                                <p style={{width: "100%"}}>Node.js, mySQL</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card" style={{width: "100%"}}>
                            <div className="card-header">
                                <p style={{width: "100%"}}>Team Profile Generator</p>
                            </div>
                            <div className="card-content">
                                <a href="https://github.com/tzeuch0922/team-profile-generator" target="_blank" rel="noreferrer">
                                    <img src={program_pic4} alt="team-profile-generator"></img>
                                </a>
                            </div>
                            <div className="card-footer">
                                <p style={{width: "100%"}}>Node.js, Bootstrap</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;