---
emoji:
title: next.js hydration
date: '2024-07-15 15:00:00'
author: 손재형
tags: Next
categories: Next
---

## 하이드레이션(Hydration)이란?

- 서버사이드 렌더링(SSR)을 통해 만들어 진 인터랙티브 하지 않는 HTML을 클라이언트 측 자바스크립트를 사용하여 인터랙티브한 리액트 컴포넌트로 변환하는 과정을 말한다.
  (서버 환경에서 이미 렌더링된 HTML에 React를 붙이는 것)

## in Next.JS

- next js는 기본적으로 SSR 방식으로 랜더링 한다.
- 여기서 hydration이 적용이 되는데

- 초기 Html 파일을 먼저 전달하고 이후 HTML 요소들을 React 컴포넌트로 변환 및 이벤트리스너를 부착하여 React DOM에서 관리하게 한다.
- 이 과정을 Hydration(수분 보충)이라고 한다.

## 정리

- next js가 정적인 html을 먼저 띄우고
- 그 뒤에 hydration이 이루어짐
- 이 과정 덕에 SPA의 단점인 초기 랜더링 시 오래 걸리는 문제를 해결함
  - 자바스크립트가 랜더링 하는 것을 기다리지 않기 때문
- hydration은 단순 HTML을 React application으로 초기화 하는 작업

## <a> vs <Link>

- next js를 사용하면서 페이지를 이동할 때 Link 태그를 사용하도록 권장한다.
  - Link 태그가 프레임워크의 네비게이션이기 때문
  - a 태그는 브라우저 네비게이션
- a 태그를 사용하면 페이지 전체를 새로 불러와서 기능 저하를 일으킨다.
- Link 태그는 브라우저 주소만 바꾸고 페이지 새로 불러오지는 않음.
- 따라서 SPA인 리액트는 Link 사용을 권장함
- 하이드레이션이 되기 전 정적 html에서 link 태그는 a 태그와 같이 취급된다.

## use client

- CSR을 사용할 컴포넌트 상단에 적어줘야 하는 문구이다.
- 이는 단순히 클라이언트에서 렌더 된다는 의미가 아님.
- 서버에서 정적인 html을 렌더하고 클라이언트에서 hydrate 하겠다는 의미.
  - 이 과정으로 컴포넌트는 interactive 해짐
