import React from 'react';
import './AboutProject.css';
import SectionWithInfo from '../sectionWithInfo/SectionWithInfo';

function AboutProject() {

  return (
    <SectionWithInfo title="О проекте">
      <div className="aboutProject">
        <div className="aboutProject__description-container">
          <div className="aboutProject__description-group">
            <h3 className="aboutProject__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="aboutProject__description">Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.</p>
          </div>
          <div className="aboutProject__description-group">
            <h3 className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="aboutProject__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="aboutProject__time-limit">
          <span className="aboutProject__back-end-time">1 неделя</span>
          <span className="aboutProject__front-end-time">4 недели</span>
          <span className="aboutProject__signature">Back-end</span>
          <span className="aboutProject__signature">Front-end</span>
        </div>
      </div>
    </SectionWithInfo>
  );
}

export default AboutProject;