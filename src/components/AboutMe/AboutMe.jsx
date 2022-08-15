import React from 'react';
import SectionWithInfo from '../sectionWithInfo/SectionWithInfo';
import './AboutMe.css'
import studentsPhoto from '../../images/students_photo.png'

function AboutMe() {
  return (
      <SectionWithInfo title="Студент">
        <div className="aboutMe">
          <img src={studentsPhoto} alt="фото студента" className="aboutMe__image"/>
          <h3 className="aboutMe__name">Иван</h3>
          <p className="aboutMe__speciality">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutMe__biography">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть
            жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
            компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
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