import Link from 'next/link';

const ProjectCard = ({ href, projectName, category }: any) => {
  return (
    <div className="grid">
      <Link href={href}>
        <a className="pt-4 font-bold">{projectName}</a>
      </Link>
      <p className="">{category}</p>
    </div>
  );
};

export default ProjectCard;
