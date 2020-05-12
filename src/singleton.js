// 单例模式，全局对象只有唯一一个

export default class Singleton {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}
// 挂载类静态方法，立即执行函数。
Singleton.getInstance = (() => {
  // 构建闭包变量
  let instance;
  return (name) => {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();

const p1 = Singleton.getInstance("p1");
const p2 = Singleton.getInstance("p2");

p1.sayName();
p2.sayName();
console.log("p1 === p2", p1 === p2);
