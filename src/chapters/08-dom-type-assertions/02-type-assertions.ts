// ------------------------------------------------------------------------------
// 📌 타입 단언 (Type Assertions)
// ⭐️ URL : https://bit.ly/3g3DtmU
// ------------------------------------------------------------------------------
// - `as` 키워드를 사용해 사용자가 타입을 단언하면 TypeScript는 더 이상 경고하지 않습니다.
// - `<TYPE>data` 방법을 사용해 `as` 키워드 방법을 대체할 수 있습니다.
// ------------------------------------------------------------------------------

// unknown 타입이라 알 수 없는 iDontKnow 타입을 단언해봅니다.

{
  let iDontKnow: unknown = "어떤 타입인지 알 수 없어요.";

  let numberOfCharacters = (iDontKnow as string).length;

  console.log(numberOfCharacters);
}

// body가 참조하는 타입을 단언해봅니다.

{
  const body = document.querySelector("body") as HTMLBodyElement;

  body.addEventListener("click", (e) => {
    console.log("clicked body element");
  });
}
