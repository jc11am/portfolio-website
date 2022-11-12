import "./project.css"


const Project = ({img,link,git}) => {
    return (
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>
        <div>
         <button className="p-btn"><a className="p-a" href={git} target="_blank">Github</a></button>
        </div>
      </div>
    );
  };
  
  export default Project;
  