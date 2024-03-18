//input에 값이 없으면 focus 처리(컴포넌트)

import React, { Component, createRef } from 'react';

export default class RefPrac extends Component {
  writerRef = createRef();
  titleRef = createRef();

  addComment = () => {
    //trim -> 여백을 없애주는 것
    if (!this.writerRef.current.value.trim()) {
      //this.writeRef.current.value.trim.length === 0 같은 의미
      this.writerRef.current.focus();
      return;
    } else if (!this.titleRef.current.value.trim()) {
      this.titleRef.current.focus();
      return;
    }
    alert(`${this.writerRef.current.value} : ${this.titleRef.current.value}`);
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="writer">작성자:</label>
          <input id="writer" type="text" name="writer" ref={this.writerRef} />
          <label htmlFor="title">제목:</label>
          <input id="title" type="text" name="title" ref={this.titleRef} />
          <button type="button" onClick={this.addComment}>
            작성
          </button>
        </form>
      </>
    );
  }
}
