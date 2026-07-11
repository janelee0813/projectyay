# public/

정적 이미지 자산을 위한 폴더입니다. 아래와 같은 하위 폴더 구조를 권장합니다.

```
public/
├── logos/            # 고객사 로고 (src/data/clients.ts의 logo 필드와 연결)
├── projects/
│   └── [slug]/        # 프로젝트별 thumbnail / hero / gallery 이미지
│       ├── thumb.jpg
│       ├── hero.jpg
│       └── 1.jpg
└── team/              # 팀 프로필 이미지 (src/data/team.ts의 photo 필드와 연결)
```

이미지를 추가한 뒤에는 `src/data/*.ts`의 해당 필드(`logo`, `thumbnail`,
`heroImage`, `gallery`, `photo`)에 경로만 입력하면 자동으로 반영됩니다.
