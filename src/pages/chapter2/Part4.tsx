import React from 'react';

function Part2() {
  // 함수에 사용하는 never 타입도 있긴 합니다

  // 조건1. return 값이 없어야 한다.
  // 조건2. endpoint가 없어야 한다.
  function test(): never {
    throw new Error();
  }

  function test1(): never {
    while (true) {}
  }

  // never 타입 쓰는 법
  // 대부분은 void 쓰인다.

  // never 타입은 코드가 이상하게 작성하면 생긴다.

  function test2(params: string) {
    if (typeof params === 'string') {
      console.log(params);
    } else {
      console.log(params); // params는 있을 수 없다. 이떄 never 타입이 지정된다.
    }
  }

  let test3 = function () {
    throw new Error();
  };

  return (
    <div>
      <div>Chapter1</div>
    </div>
  );
}

export default Part2;
