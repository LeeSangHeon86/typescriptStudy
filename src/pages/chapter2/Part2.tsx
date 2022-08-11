import React from 'react';

function Part2() {
  // Narrowing 할 수 있는 방법 더 알아보기

  type Fish = { swim: string };
  type Bird = { fly: string };

  function test(animal: Fish | Bird) {
    if ('swim' in animal) {
      console.log(animal.swim);
    }
  }

  type Car = {
    wheel: '4개';
    color: string;
  };

  type Bike = {
    wheel: '2개';
    color: string;
  };

  function test1(x: Car | Bike) {
    if (x.wheel === '4개') {
    }
  }

  return (
    <div>
      <div>Chapter1</div>
    </div>
  );
}

export default Part2;
