import React from 'react';

function Part7() {
  // 타입도 변수에 담아쓰세요 type 키워드 써서 & readonly
  type Animal = string | number | undefined;

  let animal1: Animal;
  let animal2: Animal;

  // type => type alias(에일리어스)
  // 대문자로 시작하고 뒤에 Type을 붙인다.
  type AnimalType = { name: string; age: number };
  let animal3: AnimalType;

  // const , 재할당 불가능, 객체의 data는 수정 가능
  const region = { region: 'seoul' };
  region.region = 'busan';

  // 객체의 data는 수정 불가능 => readonly
  type GirlType = { readonly name: string };

  const girl: GirlType = { name: 'amber' };
  // girl.name = 'yuri'; // 에러 발생

  type Name = string;
  type Age = number;

  // type extend 하기
  // 타입 합치기 1
  type Person = Name | Age;

  // 타입 합치기 2
  type PositionX = { x: number };
  type PositionY = { y: number };

  type NewType = PositionX & PositionY;

  let position: NewType = { x: 1, y: 1 };

  // 같은 이름의 type 변수 재정의 불가능

  return (
    <div>
      <div>Chapter1</div>
    </div>
  );
}

export default Part7;
