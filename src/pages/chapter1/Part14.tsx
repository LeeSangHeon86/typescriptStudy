import React from 'react';

function Part14() {
  // Object에 타입지정하려면 interface 이것도 있음
  type NemoType = { color: string; width: number };

  let nemo: NemoType = { color: 'red', width: 10 };

  interface Nemo1Type {
    color: string;
    width: number;
  }

  let nemo1: Nemo1Type = { color: 'red', width: 10 };

  interface StudentType {
    name: string;
  }

  interface TeacherType extends StudentType {
    age: number;
  }

  let student: StudentType = { name: 'kim' };

  let teacher: TeacherType = { name: 'kim', age: 20 };

  // type 에서는 '&' 로 extends 한다.
  // interface 에서는 'extends' 한다.

  // 차이점
  // interface는 중복선언 가능 (누적되어 합쳐진다.)
  // 외부라이브러리에서 가져온 interface 타입에 원하는걸 더하기가 쉬워진다.

  // type 은 중복선언 불가능

  return (
    <div>
      <h4 id="title">안녕하세요</h4>
      <a href="naver.com" className="link">
        링크
      </a>
      <button id="button">버튼</button>
    </div>
  );
}

export default Part14;
