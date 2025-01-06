// ------------------------------------------------------------------------------
// 📌 배열 + 유니언 타입 (Union Types & Array)
// ⭐️ URL : https://bit.ly/3ts0fbl
// ------------------------------------------------------------------------------
// - 여러 타입 중 하나를 허용하는 배열을 에너테이션 할 때 유니언 타입을 활용합니다.
// ------------------------------------------------------------------------------

// 오류가 발생하지 않도록 MultiDimensionalTypedArray 타입을 변경해봅니다.
// 오류가 더 이상 발생하지 않으면? 이어서 Array<> 문법으로 대체해봅니다.

{
  // type MultiDimensionalTypedArray =  (string | number)[][];
  type MultiDimensionalTypedArray = Array<Array<string | number>>;

  type User = {
    readonly name: string;
    readonly gender: string;
    job?: string;
    age?: number;
  };

  const whangSujin: User = {
    name: "박성구",
    gender: "남성",
    job: "인쇄 기사",
    age: 26,
  };

  const whangSujinIterator: MultiDimensionalTypedArray = Object.entries(whangSujin);
}

// 아래 작성된 에너테이션과 먼저 작성한 에너테이션은 어떤 차이점이 있을까요?

{
  // type CountDown = string[] | number[];
  type CountDown = (string | number)[];

  let countdown: CountDown = ["three", "two", "one"];
  countdown = [3, 2, 1];
  countdown = [3, "two", "one"];
}

// coords에 적용할 타입을 선언해봅니다.
// [], Array<> 문법 모두 사용해보세요.

{
  type Point = { x: number; y: number };
  type Location = { rat: number; lon: number };

  type Coords = (Point | Location)[];

  const coords: Coords = [
    { x: 8, y: -12 },
    { rat: 92.382, lon: -102.32 },
    { x: -27, y: 10 },
  ];
}
