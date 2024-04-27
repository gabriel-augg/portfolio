import projects from "../helpers/projects";
import Proj from "./Proj";
import Title from "./Title";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-secondary-dark p-16 text-light">
        <Title title="Projetos" />
        <div className="lg:p-16 sm:p-5 mt-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project) => {
                return (
                    <Proj 
                        key={project.title} 
                        title={project.title} 
                        description={project.description} 
                        label={project.label} 
                        stacks={project.stacks} 
                        link={project.link} 
                    />
                );
            })}
            
        </div>
    </section>
  );
}

export default Projects;