// ------------------------------------------------------------------------------
// 📌 익스클레메이션 마크 (Exclamation Mark)
// ⭐️ URL : https://bit.ly/3UX7ROR
// ------------------------------------------------------------------------------
// - 익스클레메이션 마크(`!`)를 사용하면 null, undefined 타입이 아님을 주장하는 것입니다.
// - TypeScript는 더 이상 null, undefined 여부를 체크하지 않으므로 오류를 표시하지 않습니다.
// - 다만, 런타임 동작 시 오류가 발생한다면? 코드 실행은 중단되니 사용에 주의가 필요합니다.
// ------------------------------------------------------------------------------

// body의 타입이 null 또는 undefined가 아님을 주장하는 익스클레메이션 마크를 설정해봅니다.

{
  const body: HTMLBodyElement | null = document.querySelector("body");
  // const body = document.querySelector('body') as HTMLBodyElement;
  // const body = document.querySelector('body')!;

  body!.addEventListener("click", (e) => {
    console.log("clicked body element");
  });
}
