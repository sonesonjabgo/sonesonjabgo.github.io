---
emoji:
title: next.js 데이터 페칭
date: '2024-07-16 10:00:00'
author: 손재형
tags: Next
categories: Next
---

## 기존의 방법 (리액트)

```ts
'use client';
import { useEffect, useState } from 'react';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return <div>{isLoading ? 'Loading...' : JSON.stringify(movies)}</div>;
}
```

## next js에서의 방식

```ts
export const metadata = {
  title: 'Home',
};

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
```

- 바뀐 방식은 리액트 훅을 사용하지 않아도 됨
- next js는 프레임워크로써 fetch한 데이터를 프레임워크에서 저장한 후
- 클라이언트에 캐싱하는 방식을 사용한다.

- 때문에 위의 코드는 서버에서 실행되어 클라이언트에 보여지는 것

- next js 프레임워크가 한 번 실행된 fetch는 메모리에 캐싱해둠
  - 때문에 같은 페이지를 다시 접속할 때 불필요한 fetch를 줄이고
  - 페이지를 빠르게 보여주게 한다.
