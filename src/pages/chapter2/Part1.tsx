import React from 'react';

function Part1() {
  // 함수 rest 파라미터, destructuring 할 때 타입지정
  // rest parameter
  function test(...a: number[]) {
    console.log(a);
  }

  test(1, 5, 3, 4, 5); // [1,5,3,4,5]

  // spread operator

  let arr = [1, 2, 3];

  let arr2 = [4, 5];

  let arr3 = [...arr, ...arr2];

  console.log(arr3); // [1,2,3,4,5]

  // destructuring 문법

  let [a, b] = ['안녕', 100];

  // let { student1: student, age1: age } = { student: true, age: 20 };
  let { student, age } = { student: true, age: 20 };

  let obj = { student: true, age: 20 };

  function test2({ student, age }: { student: string; age: number }) {
    console.log(student, age);
  }

  return (
    <div>
      <div>Chapter1</div>
    </div>
  );
}

export default Part1;
