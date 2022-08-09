import React from 'react';

function Part12() {
  // (JS 문법시간) prototype 문법 짚어보기
  class Hero {
    q: string;
    w: string;
    constructor(text1: string, text2: string) {
      this.q = text1;
      this.w = text2;
    }
  }

  let nunu = new Hero('consume', 'snowball');
  let garen = new Hero('strike', 'snowball');

  // prototype == 유전자
  // Hero.prototype.name = 'kim'

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

export default Part12;
