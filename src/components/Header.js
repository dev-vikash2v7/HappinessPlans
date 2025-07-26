import hero from "./img/hero.png"

function Header() {
  return (
    <header>
      <img src={hero} alt="hero" style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1,
      }}/>

      <h1 style={{color: "white", fontSize: "4rem"}}>Happiness Plans</h1>
      <h2 style={{color: "white", fontSize: "2rem" , zIndex:1}}>Make Every Moment A Celebration</h2>

      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          Sign Up
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
