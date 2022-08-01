import React from 'react';

function Part2() {
  // Typescript 컴파일시 세부설정 (tsconfig.json)

  // 'target'은 타입스크립트 파일을 어떤 버전의 자바스크립트로 바꿔줄지 정하는 부분
  // es2016, esnext 등으로 입력가능하다.

  // 'module' 은 자바스크립트 파일간 import 문법을 구현할 때 어떤 문법을 쓸지 정하는 부분이다.
  // commonjs 는 require 문법
  // es2015, esnext 는 import 문법

  // noImplicitAny 는 any 라는 타입이 의도치않게 발생할 경우 에러를 띄어주는 설정

  // stricNullChecks 는 null, undefined 타입에 이상한 조작하면 에러를 띄우는 설정

  // 전체 설정은 https://www.typescriptlang.org/tsconfig 에서 확인 가능

  return (
    <div>
      <div>Chapter1</div>
    </div>
  );
}

export default Part2;
