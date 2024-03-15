//실습 3번째
import { Component } from 'react';

export default class HiddenText extends Component {
  state = {
    message: '안녕하세요!',
    isVisible: true,
  };

  toggleButton = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible, // isVisible 상태를 반전
      message: prevState.isVisible ? '' : '안녕하세요', // 메시지도 상태에 따라 변경
    }));
  };

  render() {
    const { message, isVisible } = this.state;
    return (
      <div>
        {isVisible ? (
          <button onClick={this.toggleButton}>사라져라</button>
        ) : (
          <button onClick={this.toggleButton}>보여라</button>
        )}
        <br />
        <p>{message}</p>
      </div>
    );
  }
}
