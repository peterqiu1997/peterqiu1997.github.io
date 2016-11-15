import React from 'react';

require('../styles/base.scss');

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="content">
        <h1>hello this will not be my website</h1>
        <h1>this is a picture of me </h1>
        <img src={"./profile.jpg"}/>
        <h2>i love coding</h2>
      </div>
    );
  }
}
