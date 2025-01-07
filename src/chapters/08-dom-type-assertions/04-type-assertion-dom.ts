// ------------------------------------------------------------------------------
// 📌 DOM + 타입 단언 (Type Assertions)
// ⭐️ URL : https://bit.ly/3O03mkh
// ------------------------------------------------------------------------------
// - TypeScript를 사용할 때 데이터가 DOM 요소 임을 단언해 사용해야 할 경우가 잦습니다.
// ------------------------------------------------------------------------------

// 타입 단언, 익스클레메이션 마크 등을 사용해 TypeScript가 타입을 알 수 없어 표시한 오류를 해결합니다.

{
  const body = document.querySelector("body") as HTMLBodyElement;
  const input = body.querySelector("input") as HTMLInputElement;

  body.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    console.log("clicked body element");
  });

  if (input) {
    input.addEventListener("input", () => {
      let value = input.value;
      console.log(value);
    });
  }
}
