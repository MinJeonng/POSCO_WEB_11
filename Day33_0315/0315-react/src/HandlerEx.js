//실습 1번쨰
import { Component } from 'react';

export default class HandlerEx extends Component {
  state = {
    message: 'Hello World',
  };

  render() {
    console.log(this.state);
    const { message } = this.state;
    return (
      <div>
        <p>{message}</p>
        <br />
        <button onClick={() => this.setState({ message: 'Goodbye World!' })}>
          클릭
        </button>
      </div>
    );
  }
}
