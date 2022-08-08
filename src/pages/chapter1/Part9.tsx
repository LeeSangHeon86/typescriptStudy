import React from 'react';

function Part9() {
  // 함수와 methods에 type alias 지정하는 법
  type FuncType = (a: string) => number;

  let test: FuncType = function (a) {
    return 1;
  };

  // object 안에 함수
  type InfoType = {
    name: string;
    plusOne: (a: number) => number;
    changeName: () => void;
  };

  let info: InfoType = {
    name: 'kim',
    plusOne(a) {
      return a + 1;
    },
    changeName: () => {},
  };

  info.plusOne(1);

  return (
    <div>
      <div>Chapter1</div>
    </div>
  );
}

export default Part9;
