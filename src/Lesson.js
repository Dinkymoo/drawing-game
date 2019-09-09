import React, { Fragment } from 'react';
import Canvas from './Canvas';
import activities from '../src/assets/activities/activities';
import Activity from './Activity';

export default class Lesson extends React.Component {
  constructor() {
    super();
    this.state = { activities };
  }
  render() {
    return (
      <div>
        <Fragment>
          <h3 style={{ textAlign: 'center' }}>
            Marching Instructions Programming
          </h3>
          <div className="main">
            <Activity
              instruction={this.state.activities[0].instruction}
              question={this.state.activities[0].question}
              answer={this.state.activities[0].answer}
            />
            <Canvas hide={false} />
          </div>
        </Fragment>
      </div>
    );
  }
}
