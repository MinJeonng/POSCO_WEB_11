//과일 실습 첫번째 방법
import React, { Component } from 'react';

class FruitPrac extends Component {
  state = {
    fruit: '포도',
    backgroundColor: '',
    textColor: '',
    content: '',
  };

  fruitChoose = (e) => {
    // console.log(e.target.value);
    this.setState({ fruit: e.target.value });
  };

  backgroundChoose = (e) => {
    // console.log(e.target.value);
    this.setState({ backgroundColor: e.target.value });
  };

  textChoose = (e) => {
    this.setState({ textColor: e.target.value });
  };

  contentChange = (e) => {
    this.setState({ content: e.target.value });
  };

  render() {
    const { fruit, backgroundColor, textColor, content } = this.state;

    return (
      <>
        <br />
        과일 :
        <select onChange={this.fruitChoose}>
          <option disabled selected>
            과일선택
          </option>
          <option value="포도">포도</option>
          <option value="복숭아">복숭아</option>
          <option value="바나나">바나나</option>
        </select>{' '}
        배경색 :
        <select onChange={this.backgroundChoose}>
          <option disabled selected>
            배경색
          </option>
          <option value="red">빨강</option>
          <option value="orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
        </select>{' '}
        글자색 :
        <select onChange={this.textChoose}>
          <option disabled selected>
            글자색
          </option>
          <option value="black">검은색</option>
          <option value="white">흰색</option>
        </select>
        <br />
        <label htmlFor="content">
          내용 :{' '}
          <input
            type="text"
            name="content"
            placeholder="내용을 입력하세요."
            onChange={this.contentChange}
          />
        </label>
        <br />
        <img src={`/${fruit}.jpeg`} alt={fruit} />
        <br />
        {/* 나중에 div css 어떻게 햇는지 보기 가운데로 오게끔 한거!!! */}
        <div
          id="InputText"
          style={{ backgroundColor: backgroundColor, color: textColor }}
        >
          {content}
        </div>
        <br />
      </>
    );
  }
}
export default FruitPrac;
