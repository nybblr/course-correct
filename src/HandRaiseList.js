import React from 'react';

let classFor = (handRaise) => {
  let { count } = handRaise;
  if (count >= 3) return 'high';
  if (count >= 2) return 'medium';
  return 'low';
}

export default ({ handRaises }) =>
  <ul className="list hand-raise-list backed">
    {Object.keys(handRaises).map(hr => {
      let handRaise = handRaises[hr];
      let count = handRaise.count;
      return (
        <li className="row hand-raise animated delayed fadeInDown" key={handRaise.section}>
          <span className="col-xs-6 page-number">{handRaise.section}</span>
          <span className={`col-xs count ${classFor(handRaise)}`}>{count} Hands Raised</span>
          <nav className="controls">
            <a href="#" className="control">
              { handRaise.note ?
                <img src="icons/edit-note.svg" />
              :
                <img src="icons/add-note.svg" />
              }
            </a>
          </nav>
        </li>
      )
    })}
  </ul>
