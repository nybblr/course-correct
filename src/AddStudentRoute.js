import React, { Component } from 'react';
import { Router, Link } from 'react-router';
import db from './database';
window.db = db

export default class AddStudentRoute extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      level: '',
      background: '',
      goal: '',
      markerId: ''
    };
  }

  update = field => event => {
    this.setState({[field]: event.target.value});
  }

  submit = async event => {
    event.preventDefault();
    let user = Object.assign({}, this.state);
    user.level = parseInt(user.level, 10);
    user.markerId = parseInt(user.markerId, 10);
    let ref = await db.database().ref('users').push();
    let id = ref.key;
    user.id = id;
    ref.set(user);

    this.props.router.push('/')
  }

  render() {
    let { name, email, level, background, goal, markerId } = this.state;

    return (
      <article className="page add-student">
        <h1 className="title u-centered">Add Student</h1>
        <div className="row">
          <section className="col-xs-6">
            <label>Student Name</label>
            <input
              className="input"
              value={name}
              onChange={this.update('name')} />
          </section>
          <section className="col-xs-6">
            <label>Email</label>
            <input
              className="input"
              value={email}
              onChange={this.update('email')} />
          </section>
        </div>
        <div className="row">
          <section className="col-xs-6">
            <label>Skill Level</label>
            <input
              className="input"
              value={level}
              onChange={this.update('level')} />
          </section>
          <section className="col-xs-6">
            <label>Background</label>
            <input
              className="input"
              value={background}
              onChange={this.update('background')} />
          </section>
        </div>
        <div className="row">
          <section className="col-xs-12">
            <label>Goal</label>
            <textarea
              className="input"
              value={goal}
              onChange={this.update('goal')} />
          </section>
        </div>
        <div className="row">
          <section className="col-xs-6">
            <label>Marker ID (1–12)</label>
            <input
              className="input"
              value={markerId}
              onChange={this.update('markerId')} />
          </section>
        </div>
        <br />
        <div className="row controls space-top">
          <div className="col-xs-6">
            <Link to={`/`} className="button secondary">Back</Link>
          </div>
          <div className="col-xs-6">
            <a href="#" className="button" onClick={this.submit}>Add Student</a>
          </div>
        </div>
      </article>
    );
  }
}
