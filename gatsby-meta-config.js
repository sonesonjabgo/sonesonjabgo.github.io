module.exports = {
  title: `sonesonjabgo`,
  description: `재형 개발 블로그`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://sonesonjabgo.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `sonesonjabgo/sonesonjabgo.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `손재형`,
    bio: {
      role: `개발자`,
      description: ['사용자 경험을 중시하는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/sonesonjabgo`, // `https://github.com/zoomKoding`,
      linkedIn: `https://www.linkedin.com/in/jaehyung-a225b3255/`, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `thswogud02@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2024.03 ~ 2024.07',
        activity: '레피소드 주식회사 인턴',
      },
      {
        date: '2023.01 ~ 2023.12',
        activity: '삼성 청년 소프트웨어 아카데미 9기',
      },
      {
        date: '2022.05 ~ 2022.12',
        activity: '인공지능사관학교 언어지능반',
      },
      {
        date: '2015.03 ~ 2022.02',
        activity: '원광대학교 경영학부',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '아이컨택트 - 3D 프린트 견적 대행 사이트',
        description:
          '3D 프린트 견적 대행을 서비스하는 웹 사이트 프로젝트입니다. 해당 프로젝트에서 네이버 소셜로그인, 마이페이지, 관리자 알림, 통계 캘린더 컴포넌트 개발을 했습니다.',
        techStack: ['Angular.js', 'Nest.js'],
        thumbnailUrl: 'eyecontact.png',
        links: {},
      },
      {
        title: '디자인 시스템 프레임워크 이전',
        description:
          '앵귤러로 만들어진 디자인 시스템 컴포넌트를 리액트 환경에서 사용 할 수 있도록 이전하는 작업을 했습니다.',
        techStack: ['Angular.js', 'React'],
        thumbnailUrl: 'reactComp.png',
        links: {},
      },
      {
        title: '구름세무회계 홈페이지 개발',
        description:
          '세무회계 사무소의 홍보를 위한 홈페이지 개발을 했습니다. 해당 프로젝트에서 후기 관리 기능을 맡아 풀스택으로 개발한 경험이 있습니다.',
        techStack: ['Angular.js', 'Nest.js'],
        thumbnailUrl: 'untax.png',
        links: {
          demo: 'https://untax1.com/',
        },
      },
      {
        title: '트러블 샷',
        description:
          '개발을 하면서 생기는 많은 트러블 슈팅 문서를 간편하게 다루기 위해 계획한 프로젝트입니다. 트러블 샷 플러그인은 개발 IDE에서 프로젝트 웹사이트로 자동 업로드 가능하고, 웹사이트에서 이슈에 대해 다양한 의견을 나눌 수 있습니다. 저는 해당 프로젝트에서 Next.js를 활용하여 프론트엔드 개발을 했습니다.',
        techStack: ['Next.js', 'TypeScript'],
        thumbnailUrl: 'troble-shot.png',
        links: {
          github: 'https://github.com/sonesonjabgo/Trouble-Shot',
        },
      },
      {
        title: '개인 블로그 개발',
        description:
          '개발을 하면서 많은 오류에 직면하게 되고, 이를 효과적으로 기억하기 위해서는 기록이 필요하다고 느꼈습니다. 기존의 블로그 플랫폼을 사용하여 단순히 글을 작성하는 것보다는 내 개발 경험을 공유할 수 있는 블로그를 만들고 싶었습니다. Gatsby와 GitHub Pages를 활용하여 줌 코딩 님의 테마를 커스터마이징하여 사용했습니다.',
        techStack: ['gatsby', 'react', 'github pages'],
        thumbnailUrl: 'blog.png',
        links: {
          github: 'https://github.com/sonesonjabgo/sonesonjabgo.github.io',
          demo: 'https://sonesonjabgo.github.io/',
        },
      },
    ],
  },
};
