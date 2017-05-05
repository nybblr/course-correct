import React, { Component } from 'react';
import { Link } from 'react-router';
import db from './database';

export default class AddNoteRoute extends Component {
  constructor(props){
    super(props);
    this.state = {
      handRaise: { note: '' },
      note: ''
    };
  }
  init(){
    let { params } = this.props;
    this.ref = db.syncState(`/handRaisesBySection/${params.id}`, {
      context: this,
      state: 'handRaise'
    });
    this.ref2 = db.syncState(`/handRaisesBySection/${params.id}/note`, {
      context: this,
      isNullable: true,
      state: 'note'
    });
  }
  componentDidMount(){
    this.init();
  }
  componentWillUnmount(){
    db.removeBinding(this.ref);
    db.removeBinding(this.ref2);
  }
  componentWillReceiveProps(){
    db.removeBinding(this.ref);
    db.removeBinding(this.ref2);
    this.init();
  }

  onChange = note => {
    this.setState({ note })
  }

  render() {
    let { handRaise, note } = this.state;

    return (
      <article className="page add-note">
        <h1 className="title u-centered">Add Note</h1>
        <div className="row stretch">
          <div className="col-xs"></div>
          <section className="column students col-xs-10">
            <h3>{handRaise.section}</h3>
            <textarea
              className="input stretch"
              value={note || ''}
              placeholder="Notes about this section"
              onChange={e => this.onChange(e.target.value)} />
          </section>
          <div className="col-xs"></div>
        </div>
        <div className="row controls space-top">
          <div className="col-xs"></div>
          <Link to={`/`} className="button col-xs-10">Submit Note</Link>
          <div className="col-xs"></div>
        </div>
      </article>
    );
  }
}
