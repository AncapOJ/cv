import React from "react";
import "./About.scss";
import Title from "../Title/Title"

const About = ({ hero }) => {
  return (
    <>
    <Title title="About"></Title>
    <div className="hero">
        <div className='card'>
            {hero.aboutMe.map((item)=> {
                return (
                    <p>{item.info}</p>
                )
            })}
        </div>
        
    </div>
    </>
  );
};

export default About;