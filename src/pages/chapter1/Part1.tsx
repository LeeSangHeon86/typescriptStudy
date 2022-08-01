import React from 'react';

function Part1() {
  // Typescript 필수문법 10분 정리와 설치 셋팅 (Vue, React 포함)

  // 타입스크립트 설정 "tsconfig.json"
  let name: string = 'Lee';
  let arr: string[] = ['kim', 'lee'];
  let obj: { name?: string } = { name: 'lee' };

  //* Union Type
  let name1: string | number = 'kim';
  name1 = 123;

  //* Type alias
  type Type = string | number;
  let nam2: Type = 'lee';
  nam2 = 123;

  // 함수에 타입지정 가능
  function isSum(x: number): number {
    return x + 1;
  }

  isSum(123);

  // tuple 타입
  type Type1 = [number, boolean];
  let arr2: Type1 = [123, false];
  // arr2 = ['kim', 123];

  // object에 타입지정해야할 속성이 너무 많으면
  type Type2 = {
    [key: string]: string;
  };

  let john: Type2 = { name: 'kim' };
  // let john: Type2 = { 123: 'kim' };

  // class 타입지정
  class User {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  new User('kim');

  return (
    <div>
      <div>Chapter1</div>
    </div>
  );
}

export default Part1;
