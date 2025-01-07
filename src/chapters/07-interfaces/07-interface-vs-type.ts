// ------------------------------------------------------------------------------
// 📌 인터페이스 vs 타입 별칭
// ⭐️ URL : https://bit.ly/3X01xbe
// ------------------------------------------------------------------------------
// - 인터페이스와 타입 별칭은 새로운 프로퍼티를 추가하거나, 확장하는 방법이 다릅니다.
// ------------------------------------------------------------------------------

// 새로운 프로퍼티 추가

{
  type Dog = {
    kind: string;
  };

  type AnotherDog = Dog & {
    age: number;
  };
}

{
  interface Dog {
    kind: string;
  }

  interface AnotherDog extends Dog {
    age: number;
  }
}

// 다른 타입 확장

{
  type Dog = {
    kind: string;
    age: number;
  };

  type SuperDog = Dog & {
    hasSuperPower: boolean;
  };
}

// 다른 인터페이스 확장

{
  interface Dog {
    kind: string;
    age: number;
  }

  interface SuperDog extends Dog {
    hasSuperPower: boolean;
  }
}
