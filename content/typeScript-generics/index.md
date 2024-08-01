---
emoji: 
title: 제네릭 타입
date: '2024-08-01 22:00:00'
author: 손재형
tags: TypeScript
categories: TypeScript
---

## Polymorphism (다형성)
- 다형성이란, 여러 타입을 받아들임으로써 여러 형태를 가지는 것을 의미함

### Concrete type (string, number, boolean)
```ts
type SuperPrint = {
	(arr: number[]): void
    (arr: boolean[]): void
    (arr: string[]): void
    (arr: (number|boolean)[]): void
}
 
const superPrint: SuperPrint = (arr) => {
	arr.forEach(i => console.log(i))
}
 
superPrint([1, 2, 3, 4])
superPrint([true, false, true, false])
superPrint(["a", "b", "c"])
superPrint([1, 2, true, false])
```
- 위와 같이 함수의 인자에 여러 타입이 들어갈 때 concrete type을 전부 추가하거나 any를 사용해도 된다.
    - 하지만 위와 같이 어떤 타입으로 들어 올지 모르는 경우
    - ts가 타입을 추론하도록 해야한다.

## generic type
```ts
type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
}
 
const superPrint: SuperPrint = (arr) => arr[0]
 
const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true]);
const c = superPrint(["a", "b", "c"]);
conts d = superPrint([1, 2, true, false]);
```
- 일종의 타입 placeholder라고 생각하면 편하다.
- TypePlaceholder는 해당 타입이 처음 쓰인 곳에서 타입 추론을 하고 상응하는 타입을 가질 수 있다.

### any와의 차이
```ts
type SuperPrint = {
  (arr: any[]): any;
};
// type SuperPrint = (arr: any[]) => any;
 
const superPrint: SuperPrint = (arr) => arr[0];
 
let a = superPrint([1, "b", true]);
 
a.toUpperCase();
```
- 위와 같은 경우 a가 string[] 타입이 아님에도 a.toUpperCase()가 오류를 일으키지 않는다.

```ts
type SuperPrint = {
  <T>(arr: T[]): T;
};
// type SuperPrint = <T>(a: T[]) => T;
 
const superPrint: SuperPrint = (arr) => arr[0];
 
let a = superPrint([1, "b", true]);
 
// error
a.toUpperCase();
```
- 제네릭 타입은 concrete 타입을 하나씩 추가하는 형태이기 때문에, 오류가 발생함

## React에서 generic 활용
- 대표적인 예시로 useState가 있음
### 상태가 null일 수도 아닐 수도 있을 때
```ts
type Information = { name: string; description: string };
const [info, setInformation] = useState<Information | null>(null);
```

### 상태의 타입이 까다로운 구조를 가진 객체이거나 배열일 때
```ts
type Todo = { id: number; text: string; done: boolean };
const [todos, setTodos] = useState<Todo[]>([]);
```
- 배열인 경우에는 해당 배열이 어떤 타입으로 이루어진 배열인지 추론할 수 있도록 Generics을 명시하는 것이 좋다.