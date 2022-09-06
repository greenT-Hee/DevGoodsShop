# DevGoodsShop
🔗 <a href="https://idyllic-babka-c6a5bf.netlify.app/#/">배포 페이지 바로가기</a>

개발자들이 보다 나은 업무 환경을 만들 수 있는 물건들을 판매하는 REST API 기반의 오픈마켓 서비스입니다. 회원가입을 통해 로그인을 한 후, 원하는 개수만큼의상품을 구매할 수 있으며, 주문 내역을 바로 확인할 수 있습니다.

(API는 공용으로 사용하고 있기 때문에 프로젝트에 맞지 않는 사진이 게시될 수 있습니다.)

## 🎣 목표
- React를 라이브러리를 사용하여 회원가입 및 로그인을 기능 구현
- 오롯이 혼자 API를 POST, GET요청을 통해 CRUD 구현해보기 
- Redux를 사용하여 props 지옥에서 벗어나서 상태관리하기 

## ⚙ 개발환경 
- 개발 기간: 2022.08.14 ~ 2022.09.02
- 스택: HTML, CSS, React, Redux
- 버전관리: Github
- 디자인: figma, illustrator
- 배포: <a href="https://idyllic-babka-c6a5bf.netlify.app/#/">Netlify</a> 


## 🛒 구현 기능 및 시현 
#### 1. 로그인
- 아이디/비밀번호는 필수 입력 사항이며, 모두 입력해야 로그인 버튼이 활성화됩니다.
- 아이디/비밀번호가 일치하지 않으면 오류 문구를 출력합니다.
- 로그인 성공시, HOME 화면으로 돌아갑니다.

<img src="https://user-images.githubusercontent.com/101693495/188560183-c8c7be1b-2b4c-460a-919a-3ca885db0530.gif" >


#### 2. 회원가입
- 모든 입력이 완료하고 동의하기 체크를 눌러야 버튼 회원가입 버튼이 활성화됩니다.
- 아이디는 중복 확인 버튼을 통해 중복 검사를 실행합니다. 
- 유효성 겁사를 통해, 올바른 형식으로 작성하지 않으면 오류 문구가 입력란 아래에 실시간으로 출력됩니다.
<img src="https://user-images.githubusercontent.com/101693495/188564077-c01b8bc4-f3ad-4d36-a30a-d4902a2c466e.gif" >


#### 3. Home 화면(상품 목록) 
- 직접 제작한 배너를 캐러셀로 구현되어 있습니다.
- 상품을 클릭하면 상품 상세 페이지로 넘아갑니다.
- 상품 판매자, 상품명, 가격들을 확인할 수 있습니다.

<img src="https://user-images.githubusercontent.com/101693495/188564137-4722f5c4-7ed2-4390-908a-3f0bc6bd3870.gif" >

#### 4. 상품 상세  
- `+`와 `-` 버튼으로 구매 수량을 변경할 수 있습니다. 
- 수량을 재고만큼만 구매할 수 있고, 재고를 초과하면 `+`버튼이 비활성화 됩니다. 
- 선택된 수량만큼 가격이 자동 계산되어 보여집니다.
- 구매 버튼을 누르면 결제 페이지로 넘어갑니다.

<img src="https://user-images.githubusercontent.com/101693495/188564292-62ca280c-39ef-44f2-9b8b-455dcb27b22d.gif" >



#### 5. 상품 결제
- 배송 정보 칸에 주문자 정보와 배송지 정보를 입력합니다.
- 모든 입력이 완료되어야 결제하기 버튼이 활성화됩니다.
- 결제하기 버튼을 누르면 결제가 진행되고, 주문 내역 페이지로 넘아갑니다.
<img src="https://user-images.githubusercontent.com/101693495/188564364-383516d1-1a60-48ab-9620-7f38578b2cb2.gif" >


#### 6. 주문 내역/주문 상세 
- 결제 상태, 결제 일시, 주문 번호, 주문 후량, 결제 금액 이력을 확인할 수 있습니다.
- 상세보기 버튼을 누르면 상세 페이지로 넘어가고, 수령인 및 배송지 정보를 확인 할 수 있습니다.

<img src="https://user-images.githubusercontent.com/101693495/188564476-f049f91d-2a41-41eb-9868-77a27d334157.gif" >


#### 7. 로딩
- 상품 목록 및 상품 상세에서 데이터가 불러오는 시간에 깜빡임을 없애기 위함입니다.


#### 8. 로그아웃
- 마이페이지에서 로그아웃 버튼을 누르면 cookie에 토큰이 지워지고 화면이 reload 됩니다.

<img src ="https://user-images.githubusercontent.com/101693495/188564529-c43b1324-0201-4d7a-a69c-0b88ad64c901.gif">



## 🔫 트러블 슈팅 
#### POST 요청에서 401 인증 문제 발생
- 문제 상황: 결제 주문 POST 요청 시, 401 AUTHORIZED 인증 문제 (토큰이 필요한 요청)
- 원인: axios instance에서 미리 쿠키를 선언하여 `axios.create(baseURL: https://~ , {headers{Authorization: cookie}})`를 담아 사용
   - 로그인하지 않은 상태라서 undefined가 cookie에 미리 선언되었고, 로그인 성공 후에도 cookie 값에 token이 담기지 않고 계속 undefined가 뜸 
- 해결: 토큰 인증이 필요한 작업을 할 때마다 적어줌 
ex) `axios.post(url, {headers{Authorized:cookie}})`



## ✨ 레슨런
- axios 인스턴스를 사용하여 url 및 헤더 관리하기
- Redux 활용하여 상태 관리하기
- 로딩 구현: Redux에서 불러온 state 값을 Object.keys를 활용하여 데이터 불러오는 동안의 깜빡임을 없애 UX 향상
- 예외처리: 로그인, 회원가입, 구매 버튼 등 상황에 따른 예외처리 문구 출력
- styled-component: 정적 스타일만 할 수 있었는데, themeProvider와 props를 사용하여 UI를 상황에 따라 유연하게 스타일링
