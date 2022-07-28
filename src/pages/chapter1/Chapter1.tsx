import React from 'react';

function Chapter1() {
  const value = '이상헌';

  function test1() {
    function test2() {
      function test3() {
        function test4() {
          function test5() {}
        }
      }
    }
  }

  const obj = { test1: '1', test2: 2 };

  return (
    <div>
      <div>Chapter1</div>
    </div>
  );
}

export default Chapter1;
