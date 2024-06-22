const MottoContent = ({ content }) => {
    return (
      <div dangerouslySetInnerHTML={{ __html: content }} />
    );
  };
  
  export default MottoContent;
  