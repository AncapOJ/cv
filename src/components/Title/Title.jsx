import "./Title.scss";

const Title = (prop) =>{
    return(
        <div class='title'>
            <hr className="line"/>
            <span className='span'>{prop.title}</span>
            <hr className="line"/>
        </div>
    )
}

export default Title;