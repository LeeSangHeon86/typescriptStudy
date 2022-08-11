import React from 'react';

function Part2() {
  // public, private 쓰는거 보니까 타입스크립트 귀여운편

  // 객체 지향 문법
  // public , private, protected, static

  class User {
    parameters: string;
    constructor(a: string) {
      this.parameters = a;
    }
  }

  // public
  // public 이 붙으면 모든 자식들이 쓰기, 읽기가 가능하다.
  // 별의미가 없다. 안써도 숨겨져 있는 것 처럼 자동 생성
  // (public) name: string

  class User1 {
    public name: string;
    constructor(a: string) {
      this.name = a;
    }
  }

  let sang = new User1('lee');
  sang.name = 'heon';

  // private
  // class 안에서만 수정 가능
  // 인스턴스에서는 수정 불가능
  // 변경 하면 안되는 중요한 곳에 사용

  class User2 {
    private name: string;
    constructor(a: string) {
      this.name = a;
    }
  }

  let sang2 = new User2('lee');
  // sang2.name = 'heon'; // 에러 발생

  return (
    <div>
      <div>Chapter1</div>
    </div>
  );
}
export default Part2;
