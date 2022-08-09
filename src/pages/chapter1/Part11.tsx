import React from 'react';

function Part11() {
  // (JS문법시간) class 키워드 알아보기
  let nunu = {
    q: 'consume',
    w: 'snowball',
  };

  let garen = {
    q: 'strike',
    w: 'courage',
  };

  class Test {
    q: string;
    w: string;
    constructor(text1: string, text2: string) {
      this.q = text1;
      this.w = text2;
    }
  }

  let nunu1 = new Test('consume', 'snowball');
  console.log(nunu1);

  return (
    <div>
      <h4 id="title">안녕하세요</h4>
      <a href="naver.com" className="link">
        링크
      </a>
      <button id="button">버튼</button>
    </div>
  );
}

export default Part11;
