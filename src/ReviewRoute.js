import React, { Component } from 'react';
import { Link } from 'react-router';

import db from './database';

import StudentList from './StudentList';
import HandRaiseList from './HandRaiseList';

export default class ReviewRoute extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      handRaises: [],
    };
  }
  init(){
    this.ref = db.syncState(`/users`, {
      context: this,
      state: 'users'
    });

    this.ref = db.syncState(`/handRaisesBySection`, {
      context: this,
      state: 'handRaises'
    });
  }
  componentDidMount(){
    this.init();
  }
  componentWillUnmount(){
    db.removeBinding(this.ref);
  }
  componentWillReceiveProps(){
    db.removeBinding(this.ref);
    this.init();
  }

  render() {
    let { users, handRaises } = this.state;
    return (
      <article className="page review">
        <img src="logo.svg" className="logo" />
        <h1 className="title u-centered">Course Correct</h1>
        <div className="row stretch">
          <section className="column students col-xs-4">
            <h2>Students</h2>
            <StudentList students={users} />
          </section>
          <section className="column hand-raises col-xs">
            <h2>Question Map</h2>
            <HandRaiseList handRaises={handRaises} />
          </section>
        </div>
        <div className="row space-top">
          <section className="column controls col-xs-4">
            <Link to={`/users/new`} className="button col-xs-12">Add Student</Link>
          </section>
          <section className="column controls col-xs">
          </section>
        </div>
      </article>
    )
  }
}
