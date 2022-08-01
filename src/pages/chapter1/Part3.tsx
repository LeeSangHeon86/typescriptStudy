import React from 'react';

function Part3() {
  // 타입스크립트 기본 타입 정리 (primitive types)

  // 기본 타입 (Primitive Type)
  // string, number, boolean, null, undefined 등

  // 변수에 실드를 씌우듯이 비유, 지정한 타입만 할당 가능하다.
  let name: string = 'lee';
  let age: number = 123;
  let isMarry: boolean = true;

  let arr: string[] = ['kim', 'lee'];
  let arr1: (string | number)[] = ['kim', 123];

  let obj: { name: string; name1: string } = { name: 'kim', name1: 'lee' };
  let obj1: { name: string; age: number } = { name: 'kim', age: 1 };

  // 타입을 자동으로 지정해준다.
  let student = 'park';
  let student1 = 123;

  return (
    <div>
      <div>Chapter1</div>
    </div>
  );
}

export default Part3;
