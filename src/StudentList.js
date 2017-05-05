import React from 'react';

export default ({ students }) =>
  <ul className="list student-list backed">
    {students.map(student =>
      <li key={student.id} className="animated delayed fadeInDown">
        <a href="#">
          {student.name}
        </a>
      </li>
    )}
  </ul>
