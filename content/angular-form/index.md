---
emoji: 🅰️
title: 앵귤러 폼
date: '2024-07-03 11:00:00'
author: 손재형
tags: Angular
categories: Angular
---

## angular form 종류

앵귤러는 반응형과 템플릿 기반, 두 가지 방식으로 폼을 제공합니다.

| 방식           | 설명                                                                                                                                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 반응형 폼      | 폼 객체 모델에 직접 명시적으로 접근합니다. 템플릿 기반 폼과 비교해보면 이 방식이 확실히 사용하기 편합니다. 반응형 폼 방식은 확장하기 편하고, 재사용하기 쉬우며, 테스트하기 쉽습니다. 애플리케이션에서 폼이 중요한 역할을 하거나 애플리케이션을 반응형 패턴으로 구성했다면 반응형 폼을 사용하는 것이 좋습니다.                |
| 템플릿 기반 폼 | 템플릿에 디렉티브를 활용하는 방식이며 객체 모델은 디렉티브가 직접 관리합니다. 이메일을 입력받는 정도로 폼 구성이 간단하다면 템플릿 기반으로도 충분합니다. 하지만 폼 구성이 복잡해지면 반응형 폼처럼 확장하기는 어렵습니다. 구성이 간단한 폼을 템플릿 안에서만 동작하도록 구현하려면 템플릿 기반 폼을 사용하는 것이 좋습니다. |

### 차이점

|                  | 반응형 폼                           | 템플릿 기반 폼                           |
| ---------------- | ----------------------------------- | ---------------------------------------- |
| 폼 모델 구성방식 | 명시적, 컴포넌트 클래스 안에서 생성 | 명확하지 않음, 디렉티브 내부 로직이 생성 |
| 데이터 모델      | 구조가 명확하며 이뮤터블(immutable) | 구조를 파악하기 어려우며 뮤터블(mutable) |
| 데이터 흐름      | 동기                                | 비동기                                   |
| 폼 유효성 검사   | 함수                                | 디렉티브                                 |

- 반응형 폼은 컴포넌트 클래스에서 명령형으로 정의하고 관리하며, 더 많은 유연성과 강력한 기능을 제공합니다.
- 템플릿 기반 폼은 템플릿 내에서 폼을 선언적으로 정의하고 관리하며 상대적으로 간단하고 직관적입니다.

### 예시

- 반응형 폼 예시

```ts
// 1. 컴포넌트 ts 파일
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
```

```html
<!-- 2. 템플릿 -->
<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
  <label for="username">아이디:</label>
  <input id="username" formControlName="username" />
  <div *ngIf="loginForm.get('username').invalid && loginForm.get('username').touched">
    아이디가 필요합니다.
  </div>

  <label for="password">비밀번호:</label>
  <input id="password" type="password" formControlName="password" />
  <div *ngIf="loginForm.get('password').invalid && loginForm.get('password').touched">
    비밀번호가 필요합니다.
  </div>

  <button type="submit" [disabled]="loginForm.invalid">로그인</button>
</form>
```

- 템플릿 기반 폼

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  model = {
    username: '',
    password: '',
  };

  onSubmit() {
    console.log(this.model);
  }
}
```

```html
<form #loginForm="ngForm" (ngSubmit)="onSubmit()">
  <label for="username">아이디:</label>
  <input id="username" name="username" [(ngModel)]="model.username" required />
  <div
    *ngIf="loginForm.form.controls.username?.invalid && loginForm.form.controls.username?.touched"
  >
    아이디가 필요합니다.
  </div>

  <label for="password">비밀번호:</label>
  <input id="password" type="password" name="password" [(ngModel)]="model.password" required />
  <div
    *ngIf="loginForm.form.controls.password?.invalid && loginForm.form.controls.password?.touched"
  >
    비밀번호가 필요합니다.
  </div>

  <button type="submit" [disabled]="loginForm.invalid">로그인</button>
</form>
```

\
참고 \
https://www.angular.kr/guide/forms-overview#mutability-of-the-data-model
