import Logo from "./logo";
import '../styles/banner.css'

function Banner() {
    return (
      <div className="MB-banner">
        <div className="MB-banner-right"> 
          <Logo />
          <nav className="MB-nav">
              <p>BIKES</p>
              <p>ACCESSORIES</p>
              <p>NEW TECH</p>
              <p>EXPLORE</p>
          </nav>
        </div> 
        <div className="MB-bck-banner"/>
      </div>
    );
}

export default Banner