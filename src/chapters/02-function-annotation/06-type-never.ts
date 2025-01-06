// ---------------------------------------------------------------------------------
// 📌 never 타입
// ⭐️ URL : https://bit.ly/3fWsvjn
// ---------------------------------------------------------------------------------
// - never 타입은 항상 예외(exeception)를 쓰로우(throw)하거나,
//   실행(executing) 완료되지 않는 함수에 에너테이션을 지정하기 위해 사용됩니다.
// - never 타입은 void와 다릅니다.
//   void는 undefined를 반환하는 경우이며, 이는 기술적으로 여전히 유효한 타입니다.
// ---------------------------------------------------------------------------------

{
  // 실행(executing)이 완료되지 않는 함수
  function neverStop(): never {
    while (true) {
      console.log("절대 멈추지 않겠습니다!");
    }
  }

  // 예외(exeception)를 전달하는 함수
  const throwTypeError = (message: string): never => {
    throw new TypeError(message);
  };
}

{
  // 함수의 용도(기능)과 달리 오류가 발생하지 않는 이유는 무엇일까요?
  // 아래 함수가 문제가 있음을 오류가 발생하도록 설정해봅니다.

  const throwError = (message: string) => {
    // return undefined;
    throw new Error(message);
  };

  function gameLoop() {
    while (true) console.log("무슨 소리! 아직 게임은 끝나지 않았다!");
    // return true;
  }
}
