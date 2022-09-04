import '../styles/ProjectCard.css'

function ProjectCard(props) {
    return (
        <div className="project-container">
            <h1 className="project-title">
                {props.title}
            </h1>
        </div>

    );
}

export default ProjectCard;