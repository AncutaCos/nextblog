const PostContent = ({ content }) => {
    return (
      <div dangerouslySetInnerHTML={{ __html: content }} />
    );
  };
  
  export default PostContent;
  