---
emoji:
title: next.js 다크모드
date: '2024-07-17 17:00:00'
author: 손재형
tags: Next
categories: Next
---

## 다크모드 구현

- 현재 개발 환경은 next 14에 tailwind를 사용하고 있다.

## next-themes

- https://github.com/pacocoursey/next-themes?tab=readme-ov-file###with-tailwind
- 이거 사용했다.

- 전체를 감싸고 있는 RootLayout의 Provider에 ThemeProvider 추가
  - next ui 사용하고 있어서 rootProvider를 따로 만들어서 rootLayout에 적용시켰다.

```html
<!-- rootProvider.tsx -->
<ThemeProvider attribute="class">
  <NextUIProvider>{children}</NextUIProvider>
</ThemeProvider>
```

- attribute="class"를 추가해야 테일윈드 클래스 dark: 가 적용됨.

```ts
// tailwind.config.ts
darkmode: 'class';
```

- 테일윈드 config 파일에 위 코드 추가해야 함.

```ts
'use client';
import { useTheme } from 'next-themes';

export default function Darkmode() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  );
}
```

- useTheme을 가져와서 다크모드 토글로 사용 할 수 있다.
