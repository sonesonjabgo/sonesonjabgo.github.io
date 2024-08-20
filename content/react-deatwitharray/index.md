---
emoji: ⚛️
title: 중복되지 않는 선택된 클래스 배열 만들기
date: '2024-08-20 15:00:00'
author: 손재형
tags: React javascript
categories: React javascript
---

# React에서 중복되지 않는 선택된 클래스 배열 만들기

**기존 코드의 문제점**

최근 프로젝트에서 `selectedCls` 배열에 사용자 선택 클래스를 추가하면서 중복된 `class_idx` 값을 가진 객체가 여러 개 들어가는 문제가 발생했다. 원래 코드는 단순히 클래스를 추가하고 중복을 제거하는 방식이었는데, 이 방식은 시간 복잡도가 높아 비효율적이었다. 배열을 순회하면서 중복을 확인하는 데 O(n \* m) 시간이 소요됐고, 데이터가 많아질수록 성능에 영향을 미쳤다. 그래서 성능을 개선하고자 시간을 단축할 수 있는 방법을 고민해봤다.

**해시맵을 활용한 개선**

해시맵을 사용하여 `class_idx`에 대한 빠른 검색을 구현하고, 중복을 효율적으로 제거하는 방법을 적용해봤다. 이 방법을 사용하면 시간 복잡도를 줄이고, 애플리케이션의 성능을 크게 향상시킬 수 있다. 이제 이 방법을 어떻게 적용했는지 설명하겠다.

## 데이터 형식

처음에는 `Cls`와 `ClsGroup` 데이터 형식을 사용하고 있었음. 데이터는 다음과 같다:

```typescript
export type Cls = {
  class_idx: number;
  class_name: string;
  class_color: string; // 색상 코드 (예: "FF0000")
  class_description: string;
  class_insert_datetime: string; // 생성 날짜
  class_update_datetime: string; // 업데이트 날짜
};

export type ClsGroup = {
  class_group_idx: number;
  class_group_name: string;
  classes: Cls[];
  class_group_insert_datetime: string; // 생성 날짜
  class_group_update_datetime: string; // 업데이트 날짜
};

// 최종적으로 JSON 배열의 타입
export type IClsGroup = ClsGroup[];
```

## 해시맵으로 변환

먼저, Cls 객체를 해시맵으로 변환했다. 이렇게 하면 class_idx를 기반으로 빠르게 객체를 검색할 수 있다. 해시맵을 활용한 코드:

```ts
const createClsMap = (cls: IClsGroup): Record<number, Cls> => {
  const clsMap: Record<number, Cls> = {};
  cls.forEach((clGroup) => {
    clGroup.classes.forEach((cl) => {
      clsMap[cl.class_idx] = cl;
    });
  });
  return clsMap;
};

const clsMap = createClsMap(cls);
```

이 과정의 시간 복잡도는 O(n \* m). n은 ClsGroup 배열의 길이, m은 각 그룹 내 classes 배열의 길이이다. 해시맵을 사용함으로써 나중에 클래스를 O(1) 시간에 검색할 수 있게 된다.

## 중복되지 않는 선택된 클래스 배열 만들기

이제 선택된 클래스에서 중복된 class_idx를 제거하는 방법이다.

### 1. 선택된 모든 객체를 추가

먼저, 선택된 클래스를 selectedCls 배열에 추가한다. 중복 여부는 아직 고려하지 않는다:

```ts
const addCls = () => {
  const newClasses = clsIdx
    .map((idx) => clsMap[Number(idx)]) // O(1)로 검색
    .filter((cl) => cl !== undefined); // undefined 필터링

  setSelectedCls((prev) => {
    // 먼저 새로운 클래스를 추가
    const combined = [...prev, ...newClasses];

    // 중복된 class_idx를 제거하여 고유한 class_idx만 남김
    const uniqueClasses = Array.from(new Map(combined.map((cl) => [cl.class_idx, cl])).values());

    return uniqueClasses;
  });
};
```

### 2. 중복 제거

selectedCls 배열에 모든 선택된 클래스를 추가한 후, 중복된 class_idx를 제거한다:

- Map 객체 생성: class_idx를 키로 하고, Cls 객체를 값으로 설정한다. Map은 같은 키가 여러 번 삽입될 경우, 마지막으로 삽입된 값만 유지한다.
- 고유 클래스 추출: Array.from()과 Map.values()를 사용하여 중복된 class_idx를 가진 Cls 객체를 제거한 배열을 생성한다.

## 시간 복잡도

- 해시맵 생성 (createClsMap): O(n \* m)
  - n은 ClsGroup 배열의 길이
  - m은 각 그룹 내 classes 배열의 길이
- 클래스 추가 및 중복 제거 (addCls):
  - 선택된 클래스 검색: O(k)
  - 중복 제거: O(n), 여기서 n은 결합된 배열의 길이

최종 시간 복잡도는 O(n \* m + k). 데이터가 많아질수록 성능이 향상된다.

## 결론

이 방법을 사용하면 selectedCls 배열에서 중복된 class_idx를 가진 객체가 여러 개 존재하지 않도록 보장할 수 있다. 해시맵을 활용하여 빠르게 데이터를 검색하고, Map을 사용하여 중복을 효율적으로 제거하는 이 방법은 코드의 성능과 유지 보수성을 높여준다. 이와 같은 방식으로 선택된 데이터의 중복을 제거하고, 애플리케이션의 데이터 무결성을 유지하자.
