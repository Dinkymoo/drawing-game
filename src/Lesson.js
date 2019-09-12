import React, { Fragment } from 'react';
import Canvas from './Canvas';
import activities from '../src/assets/activities/activities';
import Activity from './Activity';

export default class Lesson extends React.Component {
  constructor() {
    super();
    this.state = { activities, level: '1', toggleAnswer: true };
    this.ClickHandler = this.ClickHandler.bind(this);
  }
  ClickHandler(e) {
    console.log(e.target.value);
    if (e.target.value === 'hide') {
      this.setState(cs => {
        return {
          activities: cs.activities,
          level: cs.level,
          toggleAnswer: !cs.toggleAnswer
        };
      });
    } else {
      this.setState({
        level: e.target.value
      });
      return;
    }
  }
  render() {
    return (
      <div>
        <button className="btn-primary" value="0" onClick={this.ClickHandler}>
          Beginner
        </button>
        <button className="btn-primary" value="1" onClick={this.ClickHandler}>
          Intermediate
        </button>
        <button className="btn-primary" value="2" onClick={this.ClickHandler}>
          Advanced
        </button>
        <button
          className="btn-primary"
          value="hide"
          onClick={this.ClickHandler}
        >
          Show/Hide
        </button>
        <Fragment>
          <h3 style={{ textAlign: 'center' }}>
            Marching Instructions Programming
          </h3>
          <div className="main">
            <Activity
              instruction={
                this.state.activities[Number(this.state.level)].instruction
              }
              question={
                this.state.activities[Number(this.state.level)].question
              }
              answer={this.state.activities[Number(this.state.level)].answer}
              toggleAnswer={this.state.toggleAnswer}
            />
            <Canvas />
          </div>
        </Fragment>
      </div>
    );
  }
}
