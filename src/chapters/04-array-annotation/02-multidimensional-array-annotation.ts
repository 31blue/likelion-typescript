// ------------------------------------------------------------------------------
// 📌 다차원 배열 에너테이션 (Multi Dimensional Array Annotation)
// ⭐️ URL : https://bit.ly/3g0owlB
// ------------------------------------------------------------------------------
// - 배열 안에 중첩된 배열을 포함하는 다차원 배열 또한 에너테이션을 지정할 수 있습니다.
// ------------------------------------------------------------------------------

// MultiDimensionalTypedArray 에너테이션을 설정합니다.

{
  type MultiDimensionalTypedArray = Array<Array<string>>;

  type User = {
    readonly name: string;
    gender: string;
    job?: string;
  };

  const objectToIterator: MultiDimensionalTypedArray = [
    ["name", "황수진"],
    ["gender", "여성"],
    ["job", "디자이너"],
  ];

  const whangSujin: User = {
    name: "황수진",
    gender: "여성",
    job: "디자이너",
  };

  const whangSujinIterator: MultiDimensionalTypedArray = Object.entries(whangSujin);
}

// MultiDimensionalNumbers 에너테이션을 설정합니다.
// MultiDimensionalNumbers 에너테이션을 Array<> 문법으로 변경합니다.

{
  type MultiDimensionalNumbers = Array<Array<Array<number>>>;

  const numbers: MultiDimensionalNumbers = [[[101, 201]], [[301]], [[401, 501]]];
}
