import React from 'react';

let handRaises = {
  'Ch. 3, Section 4': { count: 3 },
  'Ch. 4, Section 2': { count: 2 },
  'Ch. 4, Section 8': { count: 1 },
  'Ch. 8, Section 2': { count: 3 },
};

let classFor = (handRaise) => {
  let { count } = handRaise;
  if (count >= 3) return 'high';
  if (count >= 2) return 'medium';
  return 'low';
}

export default () =>
  <ul className="list hand-raise-list backed">
    {Object.keys(handRaises).map(hr => {
      let handRaise = handRaises[hr];
      let count = handRaise.count;
      return (
        <li className="row hand-raise animated delayed fadeInDown" key={hr}>
          <span className="col-xs-6 page-number">{hr}</span>
          <span className={`col-xs count ${classFor(handRaise)}`}>{count} Hands Raised</span>
          <nav className="controls">
            <a href="#" className="control">
              <img src="icons/add-note.svg" />
            </a>
          </nav>
        </li>
      )
    })}
  </ul>
