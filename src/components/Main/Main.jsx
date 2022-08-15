import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import { useRef } from 'react';

const Main = () => {
  const hiddenRef = useRef(null)

  function handleButtonClick() {
    hiddenRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  return (
    <main className="main">
      <Promo onHiddenRef={handleButtonClick}/>
      <div className="aboutProject__container" ref={hiddenRef}>
        <AboutProject/>
      </div>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
    </main>
  );
};

export default Main;
