const About = () => {
  return (
    <>
      <h5 className="font-semibold text-base">About Me</h5>
      <div className="w-full flex flex-row mt-4">
        <div className="w-1/2">
          <h4 className="font-medium">Systems Programming</h4>
          <p>I have an interest in low-latency, performant systems.</p>
        </div>
        <div className="w-1/2">
          <h4 className="font-medium">Software Engineering</h4>
          <p>I enjoy creating powerful web apps with intuitive design.</p>
        </div>
      </div>
    </>
  );
};

export default About;
