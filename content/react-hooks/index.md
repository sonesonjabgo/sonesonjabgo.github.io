---
emoji: ⚛️
title: 리액트 hooks
date: '2024-07-24 15:00:00'
author: 손재형
tags: React
categories: React
---

## useEffect

- useEffect ( func, deps )
- func는 콜백 함수, deps는 배열인데 배열 안의 값이 변하면 useEffect가 실행되도록 설정함
  - deps에 아무런 값을 주지 않는다면, 모든 변화를 감지함
  - 빈 배열을 주면 mount에만 실행됨
- componentDidMount(), componentDidUpdate(), componentWillUnmount() 역할을 함
- componentWillUnmount시에 필요한 역할은 func의 return으로 함수를 넣으면 같은 기능을 한다. (클린업 함수)

```js
function App() {
  const [input, setInput] = useState('');
  console.log('1');
  useEffect(() => {
    console.log('mount');
    return () => {
      console.log('unmount');
    };
  }, [input]);
  console.log('2');

  return (
    <>
      <input
        value={input}
        onchange={(e) => {
          setInput(e.target.value);
        }}
      />
    </>
  );
}
```

- 위 코드에서 처음 로그 실행은 1 > 2 > mount 순으로 진행됨

  - useEffect는 랜더링 후 시점에 실행됨

- input에 값이 입력 됐을 때 input의 value가 변하면서 input이 리랜더링 됨.

  - useEffect의 두 번째 인자 deps안의 input 값이 변경돼서
  - 이 경우 클린업 함수가 실행되어
  - 1 > 2 > mount > 1 > 2 > unmount > mount 순으로 실행
  - 리랜더링 시에 클린업 함수가 먼저 실행되고 mount 실행

- deps를 비울 경우 클린업 함수는 실행되지 않는다.

## useRef

- 컴포넌트의 읿부를 선택 할 수 있는 방법 (document.getElementByID()와 비슷하게)
- 리액트 컴포넌트는 모두 reference element를 가지고 있다
- useRef를 사용하여 원하는 컴포넌트와 연결하면 된다.

```js
const potato = useRef();
// ------------------------
return (
  <>
    <input ref={potato} />
  </>
);
```

## 추가

- https://legacy.reactjs.org/docs/hooks-reference.html
- 레거시지만 기본적으로 알아둬야 할 리액트 hooks

## 일반 함수와 React Hooks의 차이점

- 리액트 hooks와 일반 함수는 둘 다 JS 함수지만 사용 목적과 방식이 다르다.

### 일반 함수

- 단순히 특정 로직을 수행하고 결과를 반환하는 역할을 함
- 특정 상태를 유지하지 않으며, 입력이 주어지면 동일한 출력을 반환

```js
function add(a, b) {
  return a + b;
}
```

### React Hooks

- 컴포넌트의 상태를 관리하거나 랜더링 시스템에 연결됨
- 단순 입출력이 아니라 리액트 컴포넌트의 상태나 특정 상황에서 실행되도록 하는 방법
