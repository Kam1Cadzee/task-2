// Оболочка для storage
class LocalStorage {
  static nameStorage = 'university';

  // Сохраняю все состояние, но можно было только строку запроса, чтобы потом при входе на ст. получить их
  static save(store) {
    window.localStorage.setItem(
      this.nameStorage,
      JSON.stringify(store.getState()),
    );
  }

  static load() {
    return JSON.parse(window.localStorage.getItem(this.nameStorage) || '{}');
  }
}
export default LocalStorage;
