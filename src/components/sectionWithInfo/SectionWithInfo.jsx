import React from 'react';
import './SectionWithInfo.css'

function SectionWithInfo({children, title}) {
  return (
    <div className="sectionWithInfo">
      <h2 className="sectionWithInfo__title">{title}</h2>
      <span className="sectionWithInfo__line"></span>
      {children}
    </div>
  );
}

export default SectionWithInfo;