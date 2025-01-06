// ## 1. 빈칸 채우기 문제

// 아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지
// 본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

//1.
let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
//uninitialized 변수에 값이 할당되지 않았기 때문에 undefined가 출력됩니다.

//2.
const apple = '사과';
apple = '바나나'; // TypeError: Assignment to constant variable
//const는 상수이기 때문에 재할당이 불가능합니다.

//3.
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
//lotto 배열에서 index 3인 요소는 19입니다.

// 4.
let mySchedule = '';
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < false >
//"" 빈문자열은 falsy한 값이기 때문에 false로 출력됩니다.
