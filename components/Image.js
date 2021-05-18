function Image({ href, src, projectName, category }) {
  return (
    <div className="mb-4 mr-4">
      <a href={href} target="_blank">
        <img src={src} height={400} width={300} />
      </a>
      <p className="pt-2">{projectName}</p>
      <p>{category}</p>
    </div>
  );
}

export default Image;
