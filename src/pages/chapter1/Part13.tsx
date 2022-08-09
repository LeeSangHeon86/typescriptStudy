import React from 'react';

function Part13() {
  // class 만들 때 타입지정 가능
  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    plus(a: string) {
      console.log('plus함수 실행' + a);
    }
  }

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

export default Part13;
