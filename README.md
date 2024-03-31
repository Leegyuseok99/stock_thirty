# 재고30</br>재고 상품 온라인 예약

### 📋프로젝트 소개 
본 페이지는 사용자의 위치를 기반으로 매장위치와 저렴한 가격으로 올라온 재고 상품의 정보를 제공받는 사이트 입니다.</br>
소비자의 절약, 판매자의 기회 비용을 돕고 있습니다.</br>
소비자와 판매자를 위한 플랫폼 **재고30** 입니다.
### 📅프로젝트 기간
2023.09.12 ~ 2023.11.12 (2개월)
### 👥개발 인원
4인 팀프로젝트 - FE(2명),BE(2명)
### 📝핵심 기능
#### * 사용자 페이지
- [ ] 소셜 로그인 구현 (**네이버,카카오**)
- [ ] 네이버 지도 api
- [ ] 가게 상품 등록
- [ ] 필터링 검색(**가격, 거리, 마감일, 별점**)
- [ ] 즐겨찾기 등록 및 필터링
- [ ] 상품 예약(**핸드폰 메세지 알림**)
- [ ] 알림 서비스(**즐겨찾기 등록한 가게 상품 등록 시**)
- [ ] 1:1문의
- [ ] 공지사항 알림
#### * 관리자 페이지
- [ ] 회원 관리
- [ ] 관리자 관리(문의내역, 공지사항, 가게)
- [ ] 가게 분

### 커뮤니케이션
<img width="790" alt="커뮤니케이션" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/730b9e64-b907-4723-bbbd-011b07507b98">

### 아키텍처
<img width="790" alt="아키텍처" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/71e37864-5806-4698-aeda-a672c9768e71">

### ERD
<img width="790" alt="erd" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/d86ccbbd-ecf1-4a8b-a7c3-57870478c75c">

## 🖥️핵심 기능 소개
### 🗔사용자 페이지
### 로그인
+ OAuth 프로토콜을 사용하여 카카오,네이버 소셜 로그인을 구현하였습니다.
<img width="790" alt="로그인" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/8a348fe9-3473-4661-a6f1-bf3ae0dc1d50">


<img width="790" alt="소셜 로그인" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/b191c888-326d-41d3-a530-a3a9ce887597">

### 회원가입
+ 회원가입 시 입력값을 검증하여 적절한 값이 아닐 경우 error 메세지를 출력하여 사용자에게 알렸습니다.
<img width="790" alt="회원가입" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/cbed70f1-c720-4cab-b640-3369f96a23ed">

### 아이디 및 비밀번호 찾기
+ 아이디 및 비밀번호 찾기에 **문자 인증 api**를 사용하여 보안을 높였습니다.
<img width="790" alt="idfind" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/f3fe5e3d-96a1-4bf2-9b8c-888169b3d1b7">

### 회원 정보 수정
+ 사용자가 자신의 프로필을 수정했을 때 입력값이 조건에 맞지 않는 다면 오류를 alert로 출력하였습니다.
<img width="500" alt="회원 정보 수정" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/5d3063bb-58d4-411b-b012-a50f4c4760c7">
<img width="290" alt="회원 정보 수정 error" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/58e3ba05-0c8f-45b8-bbc1-92fbdbda9620">

### 필터링 검색
+ 사용자는 거리, 가격, 마감시간, 평점을 기준으로 **원하는 가게와 상품**을 설정해서 검색할 수 있게 하였습니다.
<img width="790" alt="filter" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/8b94599b-8050-424b-92d8-f08de04f3caa">

### 가게, 상품 정보
<img width="790" alt="상품 정보" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/629303f7-c77f-4e7c-85d2-6f0a1920080f">

### 상품 예약
<img width="500" alt="상품 예약" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/2250ea96-e077-4041-875f-9ff9bdf8e1ef">
<img width="290" alt="상품 예약 문자" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/fe8c72d3-53f9-4fff-972a-83eb32831a98">

### 예약 확인
<img width="790" alt="예약 확인" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/14e8686c-0538-4e3d-adf8-1eb53abce28c">

### 상품 별점
+ 예약한 재고 상품을 판매자에게서 수령이 확인 됐을 때 waiting에 있던 상품은 complete로 옮겨지고 상품에 대한 별점을 작성 할 수 있습니다.
<img width="400" alt="별점" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/849d9f2d-2373-47f7-bd62-07c43034fc16">

### 즐겨찾기
<img width="300" alt="즐겨찾기 등록" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/e6e40724-02ac-49d4-bf96-39df6e5e0149">
<img width="200" alt="즐겨찾기 목록" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/38577baf-d184-4a19-8136-f95700b2d5c5">

### 알림 및 문의
+ 공지사항에 등록된 글을 알림함을 통해서 사용자는 확인 할 수 있습니다.
+ 1:1 문의를 통해 사용자는 관리자와 소통 할 수 있습니다.
<img width="300" height="280" alt="알림" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/19bbcbf6-726a-4d6c-810d-c71b40a2b9b8">
<img width="490" alt="문의" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/bfdc338b-61b4-4497-90fd-6dd7446a64e1">

### 신뢰도
+ 사용자는 예약을 하고 제품을 수령하지 않았을 경우 신뢰도 점수가 차감이 되며 판매자는 예약하는 사용자들의 신뢰도 점수를 확인함으로써 사용자의 **상품 예약을 수락, 거절**을 할 수 있습니다.
<img width="790" alt="신뢰도" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/d9746c06-868f-4c18-ab92-814d86ea142a">

### 메뉴기능
+ 메뉴는 사용자, 상업자 아이디를 구분하여 가게 관리페이지 이동 가능 유무를 구분하였습니다.
<img width="790" alt="메뉴 기능" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/dd16296e-1be1-497a-b8d9-64c1f3802907">


----
### 🛒상업자 페이지
### 메인 페이지
<img width="790" alt="상업자 메인" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/31fdfc45-e3b4-4e2c-bffb-16b4f61a8eed">

### 가게 등록
<img width="790" alt="가게 등록" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/a02b7699-6aca-40ae-b6b4-36c2a1e6a402">

### 재고 상품 등록
<img width="790" alt="재고 상품 등록" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/3b92fd14-6c41-47df-83f5-9e7b8df77717">

### 예약 리스트 확인(수락,거부 기능)
+ 상업자는 상품들의 예약리스트를 확인 하여 예약한 사용자의 수량, 신뢰점수를 확인하여 예약을 거절이 가능 하고 수령을 완료한 상품은 완료 버튼으로 상태를 변경 할 수 있습니다.
<img width="790" alt="예약 리스트" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/abb4a39c-145d-4cf6-bc15-26e0f1d9c38f">

### 공지사항
<img width="790" alt="공지 사항" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/998f8a36-0b59-49da-8a20-2bb6cb04a70f">


----
### 관리자 페이지
<img width="790" alt="로그인" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/6ee98b1a-d94e-4f11-889e-3172f1799168">


<img width="790" alt="사용자 리스트" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/f8b069de-6574-4664-b65f-c89782c2f6ef">


<img width="790" alt="사용자가 방문한 가게" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/5c3b9dfa-871f-4f4a-9d25-688d58a744d8">


<img width="790" alt="사용자 예약 내역" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/55378050-c3dd-495f-9528-3a69c227558a">


<img width="790" alt="상업자 리스트" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/72cc2f65-38b1-4eff-a023-2cd40e088355">


<img width="790" alt="상업자 등록 가게" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/f2a392fb-bba9-49c4-a41e-61148956e19e">


<img width="790" alt="상업자 등록 상품" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/2071bb42-427f-4225-b0e8-01bdc4f3cb3b">


<img width="790" alt="1대1 문의 리스트" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/9ba41f13-f3f2-4d43-8d93-7afcf64d0ef5">


<img width="790" alt="1대1 문의 답변" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/423f9dbc-feed-4e47-8ba9-cf011fd0ee3b">


<img width="790" alt="1대1 답변 수정" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/84da26ff-4acd-421c-ada5-73675ef83243">


<img width="790" alt="가게 관리" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/05707823-7277-4d60-9c61-8545e5c0ef2e">


<img width="790" alt="가게 리스트" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/65dafa64-3703-46c0-b207-6de2201ab607">


<img width="790" alt="가게에 등록된 상품" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/6e4f246e-b7e1-4e1b-9e98-77292e08df5f">


<img width="790" alt="가게 예약자 리스트" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/325c1bf8-ffd4-44aa-a135-19da18df17cf">


<img width="790" alt="가게 별점" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/437634da-83b4-446f-9c15-888d2a129916">


<img width="790" alt="별점 준 사용자 리스트" src="https://github.com/guyseoklee/stock_thirty/assets/115774339/18b06776-456c-4e01-8533-7feaa03df19b">


## 후기

### 👍만족스러웠던 부분
+ 처음으로 4명이서 작업했던 팀 프로젝트였는데 소통도 원할하게 잘 이루어져서 예상했던 기한 안에 끝 마칠 수 있었던 점이 좋았고, 이를 통해 협업 능력을 키울 수 있는 좋은 경험이었습니다.
+ 네이버 맵, 문자 인증, 소셜 로그인과 같은 오픈 API를 사용해보는 경험이 되었습니다.

### 👎아쉬웠던 부분
+ 첫 팀 프로젝트여서인 것도 있지만 git의 이해가 부족하여 통합에서 어려움을 겪어 생각한 것 보다 많은 시간을 투자하게 되었습니다.
+ react에 대한 이해도가 아직 부족한 것 같아 컴포넌트와 Hook을 제대로 활용하지 못한 것 같아서 아쉬웠습니다.
+ 위와 같은 문제와 주석의 부족으로 인해 코드가 복잡해 지고 가독성이 떨어져 클린 코드가 아니었던 점이 아쉬웠습니다.
+ 실제 배포를 해보지 못한 점이 아쉽습니다.
