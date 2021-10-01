const ProjectCard = ({ href, projectName, category }: any) => {
  return (
    <div className="grid">
      <a href={href}>
        <p className="pt-4 font-bold">{projectName}</p>
      </a>
      <p className="">{category}</p>
    </div>
  );
};

export default ProjectCard;
