import React from 'react';

function Part6() {
  // 타입 확정하기 Narrowing & Assertion
  function isTest(x: number | string): void {
    // Narrowing & Assertion
    // Narrowing : (Union)타입을 한가지로 확정지어준다.
    if (typeof x === 'number') {
      console.log(x + 2);
    }
  }

  function isTest1(x: number | string): void {
    // Narrowing & Assertion
    // Narrowing : (Union)타입을 한가지로 확정지어준다.
    let arr: number[] = [];
    if (typeof x === 'number') {
      arr[0] = x;
    }
  }

  // Narrowing 해줄시에는 if....else 까지 끝까지 써야 한다.

  // Narrowing 판정 문법
  // 1. typeof  변수
  // 2. 속성명 in 오브젝트 자료
  // 3. 인스턴스 instanceof 부모

  function isTest2(x: number | string): void {
    // Narrowing & Assertion
    // Assertion : 타입 덮어쓰기
    let arr: number[] = [];
    arr[0] = x as number;
  }

  // Assertion 문법의 용도
  // 1. Narrowing 할 때 씁니다.
  // 2. 무슨 타입이 들어올지 100% 확실할 때 쓴다.

  return (
    <div>
      <div>Chapter1</div>
    </div>
  );
}

export default Part6;
