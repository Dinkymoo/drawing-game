import React, { Fragment } from 'react';
import Canvas from './Canvas';
import activities from '../src/assets/activities/activities';
import Activity from './Activity';

export default class Lesson extends React.Component {
  constructor() {
    super();
    this.state = { activities, level: '0', toggleAnswer: true };
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
      <div
        className="container"
        style={{ marginLeft: '100px', textAlign: 'center' }}
      >
        <br />
        <h1 style={{ textAlign: 'center' }}>
          Marching Instructions Programming
        </h1>
        <br />
        <div className="row col-xs-12">
          <div
            className="col-xs-5"
            style={{ marginLeft: '0px', float: 'left' }}
          >
            <button
              className="btn btn-outline-dark"
              value="0"
              onClick={this.ClickHandler}
            >
              Beginner
            </button>
            <button
              style={{ marginLeft: '20px' }}
              className="btn btn-outline-dark"
              value="1"
              onClick={this.ClickHandler}
            >
              Intermediate
            </button>
            <button
              style={{ marginLeft: '20px' }}
              className="btn btn-outline-dark"
              value="2"
              onClick={this.ClickHandler}
            >
              Advanced
            </button>
            <button
              style={{ marginLeft: '20px' }}
              className="btn btn-outline-dark"
              value="hide"
              onClick={this.ClickHandler}
            >
              Show/Hide
            </button>
          </div>
        </div>
        <br />

        <div className="row col-xs-12" style={{ display: 'inline' }}>
          <div
            className="col-xs-6"
            style={{ width: '500px', float: 'left', textAlign: 'left' }}
          >
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
          </div>
          <div className="col-xs-6" style={{ width: '500px', float: 'right' }}>
            <Canvas />
          </div>
        </div>
      </div>
    );
  }
}
