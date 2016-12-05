import React from 'react';
require('../styles/base.scss');

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="content">

        <div class="name">
        Peter Qiu 
          <div class="loading">
            &nbsp;is
            <span class="one">.</span>
            <span class="two">.</span>
            <span class="three">.</span>​
          </div>
        </div>
        
        <div class="description">
          <div class="description__title personal">
          a maker
          </div>
          <div class="description__subtitle personal__sub">
            of better descriptions than maker.
          </div>
        </div>

        <div class="description">
          <div class="description__title">
            Curious? 
          </div>
          <div class="description__subtitle contact">
            Here's my <a class="resume" href="resume.pdf" target="_blank"><b>resumé</b></a>. 
            Here's some <a class="music" href="https://www.facebook.com/peterqiu1997/videos_by"><b>music</b></a>. Feel free to reach out! &nbsp;&nbsp;
            <a href="mailto:yingchong.qiu@berkeley.edu"><i class="fa fa-envelope">&nbsp;&nbsp;&nbsp;</i></a> 
            <a href="https://github.com/peterqiu1997"><i class="fa fa-github">&nbsp;&nbsp;&nbsp;</i></a> 
            <a href="http://www.stackoverflow.com/users/3775886/peter-qiu"><i class="fa fa-stack-overflow">&nbsp;&nbsp;&nbsp;</i></a> 
            <a href="http://www.facebook.com/peterqiu1997"><i class="fa fa-facebook">&nbsp;&nbsp;&nbsp;</i></a> 
            <a href="https://www.linkedin.com/in/peteryingchongqiu"><i class="fa fa-linkedin">&nbsp;&nbsp;&nbsp;</i></a> 
          </div>
        </div>
      </div>
    );
  }
}
