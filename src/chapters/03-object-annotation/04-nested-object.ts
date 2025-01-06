// ------------------------------------------------------------------------------
// 📌 중첩된 객체 (Nested Objects)
// ⭐️ URL : https://bit.ly/3hG16SY
// ------------------------------------------------------------------------------
// - 객체가 객체를 중첩하더라도, 타입 에너테이션 작성 방법은 동일합니다.
// ------------------------------------------------------------------------------

// 아래 작성된 코드의 타입 별칭, 에너테이션을 설정합니다.

{
  type Movie = {
    title: {
      ko: string;
      en: string;
    };
    releaseDate: number;
    director: string;
    summary: string;
    price: number;
    vat: number;
  };
  const movieAinbo: Movie = {
    title: {
      ko: "아인보: 아마존의 전설",
      en: "AINBO: SPIRIT OF THE AMAZON",
    },
    releaseDate: 2001,
    director: "호세 젤라다, 리처드 클라우스",
    summary: `
    신비의 숲 아마존 깊은 곳에 위치한 칸다모 마을.
    생명과 자연의 아름다움이 넘치던 칸다모는
    전설 속 악령 야쿠루나의 끔찍한 저주로 위험에 빠진다.

    최고의 사냥꾼을 꿈꾸는 소녀 ‘아인보’는 아마존을 구하기 위해
    자칭(?) 정령 안내자 ‘딜로’와 ‘바카’와 함께
    정글의 수호자 ‘모텔로 마마’를 찾아 떠난다.

    아마존의 숨겨진 비밀에 다가갈수록
    ‘아인보’ 자신이 생명의 땅을 되돌릴 선택 받은 존재라는 것을 알게 되는데…

    아마존이 선택한 소녀 영웅 ‘아인보’가 찾아온다!
  `,
    price: 22000,
    vat: 0.1,
  };

  // 추가된 영화 데이터
  const movieAnother: Movie = {
    title: {
      ko: "기생충",
      en: "Parasite",
    },
    releaseDate: 2019,
    director: "봉준호",
    summary: `
    가난한 가족이 부유한 가족의 집에서 일하게 되면서 벌어지는 사건들을 그린 영화.
    사회적 계층과 인간 본성에 대한 날카로운 통찰을 담고 있다.
  `,
    price: 15000,
    vat: 0.1,
  };

  const printMovieTitle = (movie: Movie) => {
    let { title } = movie;
    console.log(`${title.ko} (${title.en})`);
  };

  const calculateMoviePrice = (movie: Movie) => {
    let { price, vat } = movie;
    return price + price * vat;
  };

  printMovieTitle(movieAinbo);
  calculateMoviePrice(movieAinbo);

  printMovieTitle(movieAnother);
  console.log(`가격 (기생충): ${calculateMoviePrice(movieAnother)} 원`);
}
