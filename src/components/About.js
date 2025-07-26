import about from "./img/about.jpg"

function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={about} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
            Looking for a reliable and experienced tour and travel company for your next vacation?
Look no further! Our company specializes in travel planning and event management, ensuring that your trip is tailored to your specifications and runs smoothly from start to finish. 

            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
