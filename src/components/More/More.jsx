import React from "react";
import "./More.scss";
import Title from "../Title/Title"

const About = ({ languages, habilities, bridge }) => {
  return (
    <>
    <Title title="Languages"></Title>
    <div className="hero">
        <div className='card'>
            {languages.map((item)=> {
                return (
                    <div class='lenguages'>
                        <h4>{item.language}</h4>
                        <p class='p'>{item.wrlevel}</p>
                        {/* <p>{item.splevel}</p> */}

                    </div>
                    
                )
            })}
        </div>
        
    </div>
    <Title title="Skills"></Title>
    <div className="hero">
        <div className='card'>
            {habilities.map((item)=> {
                return (
                    <p>{item}</p>
                )
            })}
        </div>
        
    </div>
    <Title title="More"></Title>
    <div className="hero">
        <div className='card'>
            {bridge.map((item)=> {
                return (
                    <p>{item}</p>
                )
            })}
        </div>
        
    </div>
    </>
  );
};

export default About;