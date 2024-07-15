---
emoji:
title: next.js 메타 데이터
date: '2024-07-15 17:00:00'
author: 손재형
tags: Next
categories: Next
---

## meta data

```ts
export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Next Movies',
  },
  description: 'The best movie on the best framework',
};
```

- 메타데이터를 사용하여 head에 표시될 정보를 간편하게 바꿀 수 있다.
- next js는 메타데이터의 타입도 제공함

  - 규칙에 맞춰 넣으면 된다

- 공식 문서 : https://nextjs.org/docs/app/building-your-application/optimizing/metadata
