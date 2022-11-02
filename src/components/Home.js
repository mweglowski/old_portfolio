import portrait from "../images/portrait.jpg";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="home">
      <div className="title">
        <div className="title-welcome"></div>
        <div className="title-name"><span>Martin</span></div>
        <div className="title-profession"></div>
        <button className='home-button'>Contact</button>
      </div>
      {/* <img className="portrait-image" src={portrait} alt="portrait-image" /> */}
    </div>
  );
};

export default Home;
