const ImageCard = ({ href, src, projectName, category }: any) => {
  return (
    <div className="grid">
      <a href={href}>
        <img src={src} height={400} width={300} />
      </a>
      <p className="pt-2">{projectName}</p>
      <p className="">{category}</p>
    </div>
  );
};

export default ImageCard;
