function Image({ href, src }) {
  return (
    <div className="mb-4 mr-4">
      <a href={href} target="_blank">
        <img src={src} height={400} width={300} />
      </a>
    </div>
  );
}

export default Image;
