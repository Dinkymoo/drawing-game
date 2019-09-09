import React from 'react';

class Activity extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>{this.props.instruction}</h1>
        <span dangerouslySetInnerHTML={{ __html: this.props.question }} />
        <img src={this.props.answer} />
      </div>
    );
  }
}
export default Activity;
