---
emoji:
title: next.js env
date: '2024-07-12 15:00:00'
author: 손재형
tags: Next
categories: Next
---

## env 파일

- 요청 보낼 주소나 api key 같은 드러나지 않았으면 하는 값들을 env 파일에 넣어서 관리한다

## 글을 쓰게 된 이유

- api key를 env 파일에 넣어서 쓰고 있었는데 불러보니 undefined였다.
- 어이가 없는 건 이 문제를 발견하게 되기 전 까지 다른 곳에서 잘 불러서 쓰고 있었다.

## 찾아낸 사실

- next env 파일에 변수 이름 앞에 NEXT*PUBLIC*를 붙여줘야 인식한다.

> 나는 ssr에서 불러서 쓸 때는 문제가 없었지만 csr에서 부르니 안됐다.
>
> > 아마 인식 문제는 csr에서만 적용되는 듯 하다.
