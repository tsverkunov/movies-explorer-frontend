import React from 'react';
import SectionWithInfo from '../sectionWithInfo/SectionWithInfo';
import './AboutMe.css'
import studentsPhoto from '../../images/students_photo.webp'

function AboutMe() {
  return (
      <SectionWithInfo title="Студент">
        <div className="aboutMe">
          <img src={studentsPhoto} alt="фото студента" className="aboutMe__image"/>
          <h3 className="aboutMe__name">Иван</h3>
          <p className="aboutMe__speciality">Фронтенд-разработчик, 35 лет</p>
          <p className="aboutMe__biography">Я живу в Москве, закончил факультет архитектуры дизайна и строительства. У меня есть
            жена и  две очеравательные дочки. Я люблю слушать музыку, а ещё увлекаюсь плаваньем. Недавно начал кодить. После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
            ушёл с постоянной работы.</p>
          <ul className="aboutMe__socialNetworks">
            <li className="aboutMe__networkItem">
              <a className="aboutMe__link" href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
            </li>
            <li className="aboutMe__networkItem">
              <a className="aboutMe__link" href="https://github.com/tsverkunov" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
      </SectionWithInfo>
  );
}

export default AboutMe;