import React from 'react';

function Part8() {
  // Literal Types로 만드는 const 변수 유사품
  let name: 'sangheon' | 'lee';

  // 변수에 뭐가 들어올지 더 엄격하게 관리 가능
  // 자동완성 힌트!!!!

  function test(x: 'hello'): 1 | 0 {
    return 1;
  }

  test('hello');

  type Test = '가위' | '바위' | '보';

  function test1(x: Test): Test[] {
    return [x];
  }

  var 자료 = {
    name: 'kim',
  };
  function 내함수(a: 'kim') {}

  내함수('kim');
  // 내함수(자료.name); // 에러 발생

  // as const
  var 자료1 = {
    name: 'kim',
  } as const;

  내함수(자료1.name);

  return (
    <div>
      <div>Chapter1</div>
    </div>
  );
}

export default Part8;
