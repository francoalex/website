import '../styles/About.css'
import { MdSchool, MdCode, MdMail } from "react-icons/md";
import { DiReact, DiJavascript1 } from "react-icons/di";
import { RiVuejsFill } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { ImLocation } from "react-icons/im";
import { Link } from 'react-router-dom';
import picture from '../assets/IMG.jpg'

function About() {
    return (
        <div className='page-container'>
            <div className='about-container'>
                <section className='sections'>
                    <h1 className='title'>
                        Information
                    </h1>

                    <div className='big-div'>
                        <div className='small-div'>
                            <img className='picture' src={picture} alt={'alt text'} width={185} height={240}></img>
                        </div>

                        <div className='small-div'>
                            <h2 className='info'>
                                My name is Alex Franco
                                <p><MdSchool /> OSU Graduate - BS in Computer Science </p>
                                <a href='mailto:francora@oregonstate.edu'> <MdMail color='black'/> francora@oregonstate.edu</a>
                                <p><ImLocation /> Salem, OR</p>
                                <p><MdCode /> Web Developer</p>
                            </h2>
                        </div>
                    </div>
                </section>

                <section className='sections'>
                    <h1 className='title'> Skills</h1>
                    <h2 className='info'>
                        <p> <DiReact /> React </p>
                        <p> <RiVuejsFill /> Vue </p>
                        <p> <FaAngular /> Angular </p>
                        <p> <SiTypescript /> TypeScript </p>
                        <p> <DiJavascript1 /> JavaScript </p>
                    </h2>
                    <p className='about-me-text'>For more information on how I have used these frameworks, look at my <Link to="/projects" className='link'>projects</Link>.</p>
                </section>
            </div>
            
            <div className='about-me-container'>
                <div className='about-container'>
                    <section className='bottom-section'>
                        <h1 className='title'> About Me </h1>
                        <p className='about-me-text'>
                            I am a Web Developer who recently graduated from Oregon State University.
                            Through my time at OSU, I have been focused on attaining a degree in CS 
                            with a strong focus on Web Development. I have done everything from front-end
                            styling, to make websites unique, to writing complex back-end code utilizing 
                            databases such as MYSQL, MongoDB and GraphQL to implement various functionalities.
                            <br />
                            <br />
                            I specialize in React, but have ventured and worked entensively with Vue and Angular.
                            My Capstone Project relied entirely on the Vue framework for the front-end, and a Node
                            Server for all of the back-end implementations.
                            <br />
                            <br />
                            Apart from coding I am an active gamer and car enthusiast. I have used my coding skills 
                            to develop my own games and look at improving them through the years. The car enthusiast
                            side of me also has not shown any signs of stopping. Being well into my 6th car owned, it 
                            is safe to say I will continue fiddling with and expanding both my vehicles and video games.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default About;