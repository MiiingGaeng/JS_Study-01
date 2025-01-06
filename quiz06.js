// ## 6. 장바구니 뒤바뀜 문제

// 아래 코드는 두 명의 유저(유저 A, 유저 B)가 각각 장바구니를 가지고 있다고 가정한 예시입니다.
// B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.

function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

const userACart = {
  items: [
    { name: '키보드', price: 30000 },
    { name: '마우스', price: 20000 },
  ],
};

// const userBCart = {
//   items: [
//     { name: '키보드', price: 30000 },
//     { name: '마우스', price: 20000 },
//   ],
// };

// const userBCart = {...userACart}
// userBCart.items = [];

const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

// 1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
//userACart와 userBCart 모두 items.price에 applyCoupon()이 적용된다.

// 2.	1번의 결과에 대한 이유를 설명해보세요.
//userACart와 userBCart는 같은 데이터주소를 참조하고 있기 때문이다.

// 3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?
// const userBCart = userACart 는 Shallow 복사
// Shallow 복사는 둘 중 하나라도 수정이 되면 두 객체 모두 적용된다.

// const userBCart = Object.assign({}, userACart); || const userBCart = {...userACart} 는 Deep+Shallow 복사
// Deep+Shallow 복사는 대표 객체는 복사하지만 하위 객체는 참조만 한다.
// const userBCart = Object.assign({}, userACart);로 userBCart를 선언/할당해도 하위 items의 객체들은 참조만 되기 때문에 두 객체 모두 적용된다.

// 재귀함수, JSON.parse, JSON.stringify 등 Deep 복사 방법으로 userBCart를 선언/할당해야한다.
// 아니면 그냥 userACart 프로퍼티를 userBCart에 복사해서 넣어주면..? 찝찝하지만 되긴 한다...

//JSON 메서드를 사용하면 함수는 복사할 수 없다!

//깊은 복사 -> structuredClone() 찾아보기!
