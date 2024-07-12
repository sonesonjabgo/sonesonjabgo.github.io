---
emoji: ⚛️
title: 리액트 Rules of Hooks
date: '2024-07-12 18:00:00'
author: 손재형
tags: React
categories: React
---

## Rules of Hooks

- React Hook을 사용할 때 따라야 할 몇 가지 중요한 규칙
- 이 규칙들은 Hook이 일관되게 동작하도록 하기 위함이다.

## 최상위에서만 Hook 호출하기

- Hook은 함수 컴포넌트의 최상위 수준에서만 호출해야 한다.
- 조건문, 반복문, 중첩된 함수 내에서 Hook 호출해서는 안됨.
- 이렇게 해야 동일한 순서로 호출되는 것을 보장 할 수 있다.

```jsx
// 올바른 사용법
function MyComponent() {
  const [count, setCount] = useState(0);
  // ...
}

// 잘못된 사용법
function MyComponent() {
  if (someCondition) {
    useState(0); // 조건문 내에서 Hook 호출
  }
  // ...
}
```

## React 함수 컴포넌트 또는 커스텀 Hook 안에서만 Hook 호출하기

- 일반 자바스크립트 함수나 클래스 컴포넌트에서 Hook을 호출하면 안됨.

```jsx
// 올바른 사용법
function MyComponent() {
  const [count, setCount] = useState(0);
  // ...
}

function useCustomHook() {
  const [state, setState] = useState('initial');
  // ...
  return state;
}

// 잘못된 사용법
function notAComponent() {
  useState(0); // 일반 함수에서 Hook 호출
}
```
