import React, { Fragment } from 'react';
import Canvas from './Canvas';
import activities from '../src/assets/activities/activities';
import Activity from './Activity';

export default class Lesson extends React.Component {
  constructor() {
    super();
    this.state = { activities, level: '1' };
    this.ClickHandler = this.ClickHandler.bind(this);
  }
  ClickHandler(e) {
    console.log(e.target.value);
    this.setState({
      level: e.target.value
    });
    return;
  }
  render() {
    return (
      <div>
        <button value="0" onClick={this.ClickHandler}>
          Beginner
        </button>
        <button value="1" onClick={this.ClickHandler}>
          Intermediate
        </button>
        <button value="2" onClick={this.ClickHandler}>
          Advanced
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
            />
            <Canvas />
          </div>
        </Fragment>
      </div>
    );
  }
}
