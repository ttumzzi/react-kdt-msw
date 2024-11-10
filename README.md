# 시작
1. 깃허브 로그인 (필수)
2. `Code` > `Codespaces` > `Create codespace on 0_start` 클릭
3. 터미널 입력 `npm install`
4. 터미널 입력 `npm run dev`

# API 명세
- GET /wines/:category
    - 설명: 지정된 category에 해당하는 와인 정보를 조회하는 API
    - 요청
        - HTTP 메서드: GET
        - URL: /wines/:category
        - `:category`: 와인 카테고리 (red|white|sparkling|rose|dessert|port)
    - 응답 형식
        ```
        {
            "wine": "red wine",
            "winery": "Some winery",
            "image": "https://www.alkovintages.com/wp-content/uploads/2019/09/dry-red.png",
            "rating": {
                "average": 4.0
            }
        }[]
        ```

# 구현할 기능 리스팅
### 개발 셋팅
- [ ] MSW 라이브러리 설치
- [ ] MSW 파일 셋팅
 
### 필수 구현사항
- [x] 와인 이름, 이미지, 별점, 와이너리가 노출 
- [ ] 카테고리 클릭시에 그에 맞는 와인 리스트가 노출
- [ ] 데이터 로드되는 동안 로딩 스피너 노출 
- [ ] 데이터 로드 실패시 에러 페이지 노출 

### 추가 구현사항
- [ ] 403 에러가 내려왔을때 alert로 "로그인이 필요합니다." 노출
- [ ] 500 에러가 내려왔을때는 서버 에러 UI 노출
- [ ] 기타 에러는 알 수 없는 에러 발생 UI 노출

# 브랜치별 구현 상태
<details>
<summary>git switch 0_start</summary>

### 개발 셋팅
- [ ] MSW 라이브러리 설치
- [ ] MSW 파일 셋팅
 
### 필수 구현사항
- [x] 와인 이름, 이미지, 별점, 와이너리가 노출 
- [ ] 카테고리 클릭시에 그에 맞는 와인 리스트가 노출
- [ ] 데이터 로드되는 동안 로딩 스피너 노출 (임의로 응답 시간에 딜레이 주기)
- [ ] 데이터 로드 실패시 에러 페이지 노출 (목록에 없는 카테고리 보냈을때 400에러 내려받기)

### 추가 구현사항
- [ ] 403 에러가 내려왔을때 alert로 "로그인이 필요합니다." 노출
- [ ] 기타 에러는 알 수 없는 에러 발생 UI 노출
</details>
<details>
<summary>git switch 1_msw_setting</summary>

### 개발 셋팅
- [x] MSW 라이브러리 설치
- [x] MSW 파일 셋팅
 
### 필수 구현사항
- [x] 와인 이름, 이미지, 별점, 와이너리가 노출 
- [x] 카테고리 클릭시에 그에 맞는 와인 리스트가 노출
- [ ] 데이터 로드되는 동안 로딩 스피너 노출 
- [ ] 데이터 로드 실패시 에러 페이지 노출 

### 추가 구현사항
- [ ] 403 에러가 내려왔을때 alert로 "로그인이 필요합니다." 노출
- [ ] 기타 에러는 알 수 없는 에러 발생 UI 노출
</details>
<details>
<summary>git switch 2_loading_error</summary>

### 개발 셋팅
- [x] MSW 라이브러리 설치
- [x] MSW 파일 셋팅
 
### 필수 구현사항
- [x] 와인 이름, 이미지, 별점, 와이너리가 노출 
- [x] 카테고리 클릭시에 그에 맞는 와인 리스트가 노출
- [x] 데이터 로드되는 동안 로딩 스피너 노출 
- [x] 데이터 로드 실패시 에러 페이지 노출 

### 추가 구현사항
- [ ] 403 에러가 내려왔을때 alert로 "로그인이 필요합니다." 노출
- [ ] 기타 에러는 알 수 없는 에러 발생 UI 노출
</details>

<details>
<summary>git switch 3_advanced</summary>

### 개발 셋팅
- [x] MSW 라이브러리 설치
- [x] MSW 파일 셋팅
 
### 필수 구현사항
- [x] 와인 이름, 이미지, 별점, 와이너리가 노출 
- [x] 카테고리 클릭시에 그에 맞는 와인 리스트가 노출
- [x] 데이터 로드되는 동안 로딩 스피너 노출 
- [x] 데이터 로드 실패시 에러 페이지 노출 

### 추가 구현사항
- [x] 403 에러가 내려왔을때 alert로 "로그인이 필요합니다." 노출
- [x] 기타 에러는 알 수 없는 에러 발생 UI 노출
</details>