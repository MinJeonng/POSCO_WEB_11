//props 3번

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OnclickPrac extends Component {
  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <h2>{text}</h2>
        <br />
        <button onClick={valid}>props 3번째 실습</button>
      </div>
    );
  }
}

OnclickPrac.defaultProps = {
  text: '이건 기본 text props입니다.',
};

OnclickPrac.propTypes = {
  //isRequired : 필수값
  text: PropTypes.string.isRequired,
};

export default OnclickPrac;
