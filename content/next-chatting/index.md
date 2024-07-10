---
emoji:
title: next.js 채팅 구현
date: '2024-07-04 15:00:00'
author: 손재형
tags: Next
categories: Next
---

# Next.js에서 채팅 구현

- 소켓 통신에 대해 알기
- socket.io 작동 방식
- next.js api route

## 세팅

- next 14 app router 프로젝트
- tailwind 사용
- 서버 프레임워크 사용 대신 next api route 사용

## 회고

- 일단 app router 방식의 api routes는 socket io 연동이 불가능했다.

  - socket io 사용을 하기 위해 next의 서버에 연결을 해야 했는데
  - app router는 서버 인스턴스가 제공되지 않았음.
  - 전체 프로젝트는 app router, 채팅 부분만 page로 빼내어 사용

- socket.io에 대한 이해 부족

  - 채팅 서비스 구현에 집중해서 socket.io 자체에 대한 학습이 부족했음
  - 때문에 공식문서에 나와있는 next.js 활용 예시와 블로그 글들을 많이 검색했음
    - 공식문서에서는 루트에 server.js를 추가하여 커스텀 서버를 만들라고 함
    - 블로그 예제는 handler의 res를 통해 서버 인스턴스 접근으로 구현
    - 나는 후자를 택했음.

- 서버 연결 채팅 전부 작동되지만

  - 간헐적으로 연결이 끊기는 문제가 발생했다.
  - 여러가지 검색과 시도를 해봤지만, socket io와 next.js 호환성 문제라고 결론 지음

- api route로 채팅 서비스를 구현하는 것은 현재로써 별로 적절하지 못한 방법인 것 같았다.
- nest를 사용하여 다시 구현 해봐야겠음.

github : https://github.com/sonesonjabgo/next-board
