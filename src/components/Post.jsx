function Post({ title, image }) {
    return (
      <div className="post">
        <h3>{title}</h3>
        {image && <img src={image} alt={title} />}
      </div>
    );
  }
  
  export default Post;