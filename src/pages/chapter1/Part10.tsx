import React from 'react';

function Part10() {
  // 타입스크립트로 HTML 변경과 조작할 때 주의점
  let title = document.querySelector('#title');
  // title?.innerHTML = '반가워요'; // 에러

  if (title !== null) {
    title.innerHTML = '반가워요';
  }

  // HTML 조작시 Narrowing 하는법

  if (title instanceof Element) {
    title.innerHTML = '반가워요';
  }

  let title1 = document.querySelector('#title') as Element;

  // optional chainning
  if (title?.innerHTML) {
    title.innerHTML = '반가워요';
  }

  // tsconfig.json 에서 strict 모드 끄기(false 설정)

  let link = document.querySelector('.link');

  if (link instanceof HTMLAnchorElement) {
    link.href = 'https://kakao.com';
  }

  // Element 타입 에서 상속하는 여러가지 타입이 있다.
  // HTMLAnchorElement
  // HTMLDivElement 등
  // HTMLButtonElement

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

export default Part10;
