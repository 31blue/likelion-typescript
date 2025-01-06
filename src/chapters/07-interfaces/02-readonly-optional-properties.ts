// ------------------------------------------------------------------------------
// 📌 읽기전용(readonly), 옵셔널(optional) 인터페이스 프로퍼티
// ⭐️ URL : https://bit.ly/3EvTQSV
// ------------------------------------------------------------------------------
// - 인터페이스의 특정 속성을 읽기전용 또는 선택 적용할 수 있는 옵셔널로 설정할 수 있습니다.
// ------------------------------------------------------------------------------

// Person 인터페이스의 name 속성은 읽기 전용, gender 속성은 옵션으로 설정해봅니다.

{
  {
    interface Person {
      readonly name: string; // 읽기 전용 속성
      age: number;
      gender?: "남성" | "여성"; // 옵셔널 속성
    }

    const sayHappyBirthDay = (person: Person): string => {
      return `${person.name}! ${person.age} 번째 생일을 생일 축하해! 🎉`;
    };

    const suyouen: Person = { name: "이수연", age: 36 }; // gender 속성은 생략 가능

    // suyouen.name = '이수정'; // ❌ 오류: 읽기 전용 속성은 수정할 수 없음

    console.log(sayHappyBirthDay(suyouen)); // 출력: "이수연! 36 번째 생일을 생일 축하해! 🎉"

    // gender 속성을 포함한 객체
    const john: Person = { name: "John", age: 25, gender: "남성" };
    console.log(john.gender); // 출력: "남성"
  }
}
