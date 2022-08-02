# Hackathon_GoldenTime_backend

## **Commit convention** 
Feat: 새로운 기능 추가  

Fix: 버그 수정  

Docs: 문서,주석 수정  

Style: 코드 포맷 변경, 세미콜론 누락, 코드 변경 없음  

Refactor: 프로덕션 코드 리팩터링  

Test: 테스트 추가, 테스트 코드 리팩터링, 프로덕션 코드 변경 없음  

Chore: 빌드 테스크 업데이트, 패키지 매니저 환경설정, 프로덕션 코드 변경 없음  

Merge : 합병 및 깃 충돌 해결 커밋 메시지  


## **Branch convention**
기능 구현 -> Featuring_컴포넌트명 or 페이지명  

테스트 -> Testing_컴포넌트명 or 페이지명

## **스택** 
사용언어 -> Javascript  

프레임워크 -> express  

라이브러리 ->   

## **폴더구조**는 다음과 같습니다.
```

├── config -> 필요 정보들은 모두 전역 상태로 관리하려고 합니다.
│   └── config.js
│
├── models
│   ├── department.js
│   ├── hospital.js
│   ├── symptom.js
│   └── index.js
├── src
│   ├── index.js
│   └── api
│        ├── information.js
│        ├── hospital.js
│        └── index.js
└── else
```
