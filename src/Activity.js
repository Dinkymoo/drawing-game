import React from 'react';

class Activity extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="activity">
        <div className="header">
          <h1>{this.props.instruction}</h1>
        </div>
        <div
          className="question"
          dangerouslySetInnerHTML={{ __html: this.props.question }}
        />
        <div className="answer" hidden={this.props.toggleAnswer}>
          <img src={this.props.answer} />
        </div>
      </div>
    );
  }
}
export default Activity;
