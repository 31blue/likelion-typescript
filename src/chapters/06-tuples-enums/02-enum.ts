// ------------------------------------------------------------------------------
// 📌 열거형 타입 (Enums Type)
// ⭐️ URL : https://bit.ly/3TH25Qs
// ------------------------------------------------------------------------------
// - 열거형 타입은 이름이 부여된 상수 집합을 정의할 수 있습니다.
// - 열거형에 정의된 상수는 숫자 또는 문자 값을 지정할 수 있습니다.
// ------------------------------------------------------------------------------

// HTTP_Responses 숫자 열거형 타입으로 작성합니다.

{
  // HTTP_Responses
  // SUCCESS → 1
  // NOT_FOUND → 2

  enum HTTP_Responses {
    SUCCESS = 200,
    NOT_FOUND = 400,
  }

  console.log(HTTP_Responses.SUCCESS); // 출력: 1
  console.log(HTTP_Responses.NOT_FOUND); // 출력: 2
}

// KEYCODE 숫자 열거형 타입으로 작성합니다.

{
  // Keycode
  // LEFT → 37
  // RIGHT → 39
  // UP → 38
  // DOWN → 40

  enum Keycode {
    LEFT = 37,
    UP = 38,
    RIGHT = 39,
    DOWN = 40,
  }

  console.log(Keycode.LEFT); // 출력: 37
  console.log(Keycode.RIGHT); // 출력: 39
}

// Task 문자 열거형 타입으로 작성합니다.

{
  enum Task {
    ADD = "task/add",
    READ = "task/read",
    EDIT = "task/edit",
    DELETE = "task/delete",
  }
  Task.ADD;
}

// OrderStatus 열거형 타입의 값을 숫자 또는 문자로 정의해봅니다.

{
  enum OrderStatus {
    PENDING = "order/pending",
    SHIPPED = "order/shipped",
    DELIVERED = "order/delivered",
    RETURNED = "order/returned",
  }

  const isDelivered = (order: OrderStatus) => {
    return order === OrderStatus.DELIVERED;
  };

  console.log(isDelivered(OrderStatus.PENDING));
  console.log(isDelivered(OrderStatus.DELIVERED));
}

// enum 앞에 const를 추가하면 컴파일 과정에서 상수의 값이 그대로 설정됩니다.
// 참고: https://bit.ly/3NGVjJ7

{
  const enum OrderStatus {
    PENDING = "order/pending",
    SHIPPED = "order/shipped",
    DELIVERED = "order/delivered",
    RETURNED = "order/returned",
  }

  type Order = { orderId: number; status: OrderStatus };

  const orders: Order[] = [
    {
      orderId: 384923124,
      status: OrderStatus.PENDING,
    },
    {
      orderId: 483912423,
      status: OrderStatus.SHIPPED,
    },
  ];

  console.log(orders[1].status); // 출력: 'order/shipped'
}
