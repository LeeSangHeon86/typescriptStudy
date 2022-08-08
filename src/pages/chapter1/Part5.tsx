import React from 'react';

function Part5() {
  // 함수에 타입 지정하는 법 & void 타입

  function isDouble(x: number): number {
    return x * 2;
  }

  // 리턴값이 없는 경우 void 가능
  function isTriple(x?: number): void {}

  // 타입 지정된 파라미터(매개변수)는 꼭 필요하다.
  // 없으면 타입스크립트 에러가 난다.

  function isTest(x: number | string): void {
    // Narrowing
    if (typeof x === 'number') {
      console.log(x + 2);
    }
  }

  return (
    <div>
      <div>Chapter1</div>
    </div>
  );
}

export default Part5;
