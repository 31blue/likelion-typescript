// ------------------------------------------------------------------------------
// 📌 인터페이스 메서드 (Interface Methods)
// ⭐️ URL : https://bit.ly/3WTKiIB
// ------------------------------------------------------------------------------
// - 인터페이스 메서드 타입은 함수 반환 값 타입을 지정하거나, 매개변수 타입을 지정하는 것과 유사합니다.
// ------------------------------------------------------------------------------

// Store 인터페이스의 getState, setState 메서드 타입을 지정해봅니다.

{
  interface Store {
    state: Array<string>;
    getState(): String[];
    setState(newStateItem: string): void;
  }

  const namesStore: Store = {
    state: ["박아름", "한성연", "최연희"],
    getState() {
      return this.state;
    },
    setState(newStateItem) {
      this.state.push(newStateItem);
    },
  };

  const ducksStore: Store = {
    state: ["도널드덕", "톰덕"],
    getState() {
      return this.state;
    },
    setState(newStateItem) {
      this.state.push(newStateItem);
    },
  };
}
