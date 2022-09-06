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
1. 로그인
- 

2. 회원가입
3. Home 화면 
4. 상품 상세  
5. 상품 주문 
6. 주문 목록 
7. 로딩
8. 로그아웃

## 🔫 트러블 슈팅 
- cookie undefined

## ✨ 레슨런
- Redux 활용하여 상태 관리하기
- 로딩 구현: Redux에서 불러온 state 값을 Object.keys를 활용하여 데이터 불러오는 동안의 깜빡임을 없애 UX 향상
- 예외처리: 로그인, 회원가입, 구매 버튼 등 상황에 따른 예외처리 문구 출력
- styled-component: 정적 스타일만 할 수 있었는데, themeProvider와 props를 사용하여 UI를 상황에 따라 유연하게 스타일링
