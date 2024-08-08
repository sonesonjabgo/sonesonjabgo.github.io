---
emoji: ⚛️
title: 셀렉트 태그 이벤트를 통한 정렬
date: '2024-08-08 15:00:00'
author: 손재형
tags: React, javascript
categories: React, javascript
---

```ts
export interface IProjectListProp {
  id: number;
  projectName: string;
  member: string[];
  subTitle?: string;
  dataSetCount: number;
  dataCount: number[];
  completed: number;
  classCount: number;
  createDate: Dayjs;
  updateDate: Dayjs;
}

const [projectList, setprojectList] = useState<IProjectListProp[]>([]);
```

```ts
<select name="" id="">
  <option value="">---</option>
  <option value="createDate">생성일자</option>
  <option value="projectName">이름</option>
  <option value="completed">진행상태</option>
</select>
```

위와 같은 셀렉트 태그가 있다.
선택된 옵션에 따라 projectList가 정렬되어야 한다.

우선 셀렉트 태그에 value와 값 변경 시 실행할 함수를 줬다.

```ts
const [selectedOption, setSelectedOption] = useState("");

<select name="" id="" value={selectedOption} onChange={handleChange}>
```

그런 다음 handleChange를 정의했다.
해당 함수는 선택한 옵션에 따라 다른 함수를 실행하게 하여 원하는 값을 기준으로 정렬하게 했다

- (sort((a,b)=>{})) 사용

```ts
const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  setSelectedOption(event.target.value);
  const sortBy = event.target.value;
  filterList.sort(sortOptions[sortBy]);
};
```

그런 다음 sortOptions라는 객체에 셀렉트 태그의 value를 key 값으로 실행되어야 할 함수를 묶어서 만들었다.

```ts
const sortOptions: {
  [key: string]: (a: IProjectListProp, b: IProjectListProp) => number;
} = {
  projectName: (a, b) => a.projectName.localeCompare(b.projectName),
  createDate: (a, b) => {
    const dateA = dayjs(a.createDate);
    const dateB = dayjs(b.createDate);
    return dateA.diff(dateB);
  },
  completed: (a, b) => a.completed - b.completed,
  classCount: (a, b) => a.classCount - b.classCount,
};
```

이렇게 되면 셀렉트 태그를 통해 골라진 값이 event.target.value가 되어 sortOptions의 key로 넘어가게 된 뒤 그에 맞는 함수가 실행되어 filterList가 sort된다.
