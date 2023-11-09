const ProjectDisplay = ({title, demoUrl, imgSrc, codeUrl}) => {
    return (
      <div className="project-container">
        <a className="demo-container" href={demoUrl}>
          <div className="title">{title}</div>
          <img src={imgSrc} alt="preview" className="project-img"></img>
        </a>
        <a className="code" href={codeUrl}>
          Code
        </a>
      </div>
    );
};

export default ProjectDisplay;