import React from 'react';

export default ({ students }) =>
  <ul className="list student-list backed">
    {Object.keys(students).map(id => {
      let student = students[id];
      return (
        <li key={id} className="animated delayed fadeInDown">
          <a href="#">
            {student.name}
          </a>
        </li>
      )
    })}
  </ul>
