// ------------------------------------------------------------------------------
// 📌 배열 에너테이션 (Array Annotation)
// ⭐️ URL : https://bit.ly/3WR5sqy
// ------------------------------------------------------------------------------
// - 배열은 각괄호([])를 사용해 타입 에너테이션을 지정할 수 있습니다.
// - type[] 문법 대신, Array<type> 문법으로 대체할 수 있습니다.
// ------------------------------------------------------------------------------

// 특정 타입만 허용하는 배열 에너테이션을 지정합니다.

{
  const numberTypedArray: number[] = [10, 101, 201, 301];

  let total = numberTypedArray.reduce((total, value) => value + total, 0);
  console.log(total);

  numberTypedArray.push(+"901", 2, 34, 5, 1, 6, 2, 7);

  const stringTypedArray = "annotation, inference, intersection, type alias".split(",").map((item) => item.trim());
  console.log(stringTypedArray.length);

  stringTypedArray.unshift(true + "");
}

// booksApi 타입 별칭을 선언해봅니다.

{
  type Book = {
    id: string;
    title: string;
    author: string;
    image: {
      src: string;
      width: number;
    };
    price: number;
  };

  type BooksAPI = {
    version: string;
    author: string;
    data: Book[]; // Book 타입의 배열
  };

  const booksApi: BooksAPI = {
    version: "0.0.2",
    author: "yamoo9@euid.dev",
    data: [
      {
        id: "ISBN-9791191209563",
        title: "나의 친구 레베카",
        author: "케이트 더글러스 위긴",
        image: {
          src: "/assets/9791191209563.jpeg",
          width: 458,
        },
        price: 13500,
      },
      {
        id: "ISBN-9788943310141",
        title: "레베카의 작은 극장",
        author: "레베카 도트르메르",
        image: {
          src: "/assets/9788943310141.jpeg",
          width: 458,
        },
        price: 54000,
      },
      {
        id: "ISBN-9791166113239",
        title: "연애의 행방",
        author: "히가시노 게이고",
        image: {
          src: "/assets/9791166113239.jpeg",
          width: 458,
        },
        price: 13320,
      },
      {
        id: "ISBN-9788937434051",
        title: "파랑의 역사",
        author: "미셸 파스투로",
        image: {
          src: "/assets/9788937434051.jpeg",
          width: 458,
        },
        price: 15120,
      },
      {
        id: "ISBN-9791166113239",
        title: "산책과 연애",
        author: "유진목",
        image: {
          src: "/assets/9791166113239.jpeg",
          width: 458,
        },
        price: 13500,
      },
      {
        id: "ISBN-9791158888367",
        title: "불온한 파랑",
        author: "정이담",
        image: {
          src: "/assets/9791158888367.jpeg",
          width: 458,
        },
        price: 12420,
      },
      {
        id: "ISBN-9788983451170",
        title: "천 개의 파랑",
        author: "천선란",
        image: {
          src: "/assets/9788983451170.jpeg",
          width: 458,
        },
        price: 12600,
      },
    ],
  };
}
