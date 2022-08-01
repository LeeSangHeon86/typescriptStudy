import React from 'react';

function Part4() {
  // 타입을 미리 정하기 애매할 때 (union type, any, unknown)

  // Union Type : 타입 2개 이상 합친 새로운 타입 만들기
  let member: string | number = 123;

  let arr: (string | number)[] = [1, 2, 'lee'];

  let obj: { a: string | number; b: string } = { a: '123', b: 'lee' };

  // Any Type
  // 타입스크립트 쓰는 의미가 없는 타입.
  // 모든 타입을 허용해주는 타입

  // unknown
  // any 처럼 모든 타입을 허용해준다.

  let name: unknown;
  // name - 1; // 에러 발생

  let age1: string = 'lee';
  age1 + 1; // 허용

  let age2: number = 123;
  age2 + 1; // 허용

  let age3: string | number;
  // age + 1; //에러 발생
  // 타입스크립트는 엄격한것을 좋아한다. 유니온 타입으로는 에러 발생한다.
  // 어느 타입인지 정확하게 지적해줘야 한다.
  // 후에 Narrowing / Assertion 문법 배워서 해결한다.ㄴㄴㄴㄴㄴㄴㄴㅁㅁㅁㅁㅁ

  return (
    <div>
      <div>Chapter1</div>
    </div>
  );
}

export default Part4;
