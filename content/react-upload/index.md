---
emoji: ⚛️
title: 리액트에서 이미지 업로드
date: '2024-08-22 15:00:00'
author: 손재형
tags: React
categories: React
---

# 리액트 프로젝트에서 파일을 업로드하고 관리하는 방법

리액트 프로젝트에서 파일을 업로드하고 관리하는 방법을 정리해봤다. 기본 파일 업로드부터 드래그 앤 드롭 기능까지 구현하는 방법을 살펴보겠다.

1. 기본 파일 업로드 구현
   파일 업로드의 기본 방법은 input 태그를 사용하는 것이었다. 아래 코드는 사용자가 파일을 선택하고 미리보기를 제공하는 예시이다:

```tsx
import React, { useState, ChangeEvent } from 'react';

function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);

      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setPreview(null);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {file && (
        <div>
          <p>선택된 파일: {file.name}</p>
          {preview && <img src={preview} alt="미리보기" style={{ width: '200px' }} />}
        </div>
      )}
    </div>
  );
}

export default FileUpload;
```

이 코드에서 FileReader는 파일을 읽고 data URL로 변환하여 이미지 미리보기를 제공하는 역할을 한다. reader.onload는 파일 읽기가 완료된 후 실행되며, 결과를 setPreview를 통해 상태로 저장한다.

2. 드래그 앤 드롭 기능 추가

기존의 파일 업로드 코드에 드래그 앤 드롭 기능을 추가할 때, 파일을 드래그하거나 드롭할 수 있는 영역을 정의해야 했다. 이때 사용한 코드는 다음과 같다:

```tsx
import React, { useState, ChangeEvent, DragEvent } from 'react';

function FileUploadWithDragDrop() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      handleFiles(event.target.files[0]);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      handleFiles(event.dataTransfer.files[0]);
    }
  };

  const handleFiles = (selectedFile: File) => {
    setFile(selectedFile);

    if (selectedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          border: isDragging ? '2px dashed #000' : '2px dashed #ccc',
          padding: '20px',
          textAlign: 'center',
          borderRadius: '10px',
          height: '200px',
        }}
      >
        {isDragging ? (
          <p>여기에 파일을 놓으세요</p>
        ) : (
          <p>파일을 드래그 앤 드롭 하거나 클릭하여 업로드하세요</p>
        )}
        <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
      </div>
      {file && (
        <div>
          <p>선택된 파일: {file.name}</p>
          {preview && <img src={preview} alt="미리보기" style={{ width: '200px' }} />}
        </div>
      )}
    </div>
  );
}

export default FileUploadWithDragDrop;
```

드래그 앤 드롭 기능을 구현할 때, handleDragOver는 파일이 드래그되었을 때 호출되어 드래그 상태를 유지하도록 한다. handleDragLeave는 드래그된 파일이 영역을 벗어날 때 호출되고, handleDrop은 파일이 드롭될 때 호출되어 파일을 처리한다. 드래그 상태에서는 영역을 강조하여 사용자에게 파일을 놓을 수 있는 위치임을 알린다.

3. CSS 스타일링
   드래그 앤 드롭 영역의 스타일링은 CSS로 조정했다. 아래는 관련 CSS 예시이다:

```css
#largeFile {
  position: relative;
}

#largeFile:after {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 95%;
  max-width: 800px;
  content: '파일 및 폴더를 여기에 드래그 하여 업로드 하세요.';
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  padding: 50px 0;
  border-radius: 10px;
  border: 2px dashed #ccc;
  color: #ccc;
  font-size: 15px;
  height: 210px;
}

#largeFile:hover:after {
  background: #ccc;
  color: #fff;
  cursor: pointer;
}

#largeFile input#file {
  width: 100%;
  height: 210px;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
```

이 CSS는 드래그 앤 드롭 영역의 시각적 요소를 정의하고, 사용자가 파일을 드래그하거나 클릭하여 업로드할 수 있도록 돕는다.

## 결론

리액트에서 파일 업로드와 드래그 앤 드롭 기능을 구현하는 방법을 정리했다. 기본 파일 업로드와 드래그 앤 드롭 기능을 적절히 활용하면 사용자에게 더 나은 파일 업로드 경험을 제공할 수 있었다. 코드와 스타일을 필요에 따라 조정하여 원하는 대로 사용할 수 있을 것이다.
