## **과제 1**


### **페이지별 구성**
1. **로그인 페이지**
+ 핵심 기능: 로그인 처리 및 사용자 로그인 정보 저장
+ 기능 상세 설명: 아이디와 비밀번호를 이용해 로그인을 처리하고, 이에 대한 상태 처리를 함
+ 인터페이스 요구사항: 아이디와 비밀번호의 유효성을 검사하고, 적절하지 않은 경우 알림을 보냄 
<br /><br />

2. **메인 페이지**
+ 핵심 기능: 광고상품 노출 및 할인 상품 나열 
+ 기능 상세 설명: 알고리즘에 따라 사용자가 요청하는 상품 데이터를 받아옴
+ 인터페이스 요구사항: 광고 상품을 캐러셀로 보여주고, 사용자가 선택한 상품 종류를 나열함. 상품별 이름, 가격, 이미지를 함께 보여줌
<br /><br />

3. **상품 검색 결과 페이지**
+ 핵심 기능: 사용자가 검색한 상품을 보여 줌
+ 기능 상세 설명: 검색어를 통해 사용자가 요청한 상품 데이터를 가져오고, 정렬 방식에 따라 정렬함
+ 인터페이스 요구사항: 사용자가 요청한 상품을 이름, 가격, 이미지와 함께 보여주고, 정렬 방식을 제공
<br /><br />

4. **주문 내역 페이지**
+ 핵심 기능: 일정 기간내 사용자의 주문 내역을 보여줌
+ 기능 상세 설명: 일정 기간내 사용자가 주문한 상품 데이터를 가져오고, 각 상품의 주문 상태별로 구분함
+ 인터페이스 요구사항: 사용자의 소비 기간을 입력받고, 각 상품의 주문 상태별로 주문내역을 보여줌
<br /><br />

4. **장바구니 페이지**
+ 핵심 기능: 사용자의 구매 상품 저장
+ 기능 상세 설명: 사용자가 구매하려는 상품을 저장하고 나열함
+ 인터페이스 요구사항: 사용자가 구매하려는 상품들의 정보를 보여주고, 총 가격을 보여 줌
<br /><br />

5. **개별 상품 상세 페이지**
+ 핵심 기능: 상품의 상세 정보를 보여줌
+ 기능 상세 설명: 상품의 상세 정보를 가져오고, 옵션과 할인율을 이용해 주문금액을 계산함
+ 인터페이스 요구사항: 상품의 상세 정보를 보여주고, 옵션과 할인정보를 입력 받아 처리함
<br /><br />

6. **결제 페이지**
+ 핵심 기능: 사용자의 정보를 입력 받아 결제 처리
+ 기능 상세 설명: 배송지 정보, 결제 포인트, 결제 방식등을 입력 받아 결제 처리 진행 
+ 인터페이스 요구사항: 배송지 정보, 상품, 포인트, 결제 방식등을 입력받고 가격을 계산해 보여줌
<br /><br /><br />

### **디렉토리 구조**
-public
-src
--apis
--components
--hooks
--pages
--redux
--styles
--utils
