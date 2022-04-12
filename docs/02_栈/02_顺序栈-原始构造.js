// 栈结构的封装
class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }

  // push(item) 压栈操作，往栈里面添加元素
  push(item) {
    this.items[++this.top] = item;
  }

  // pop() 出栈操作，从栈中取出元素，并返回取出的那个元素
  pop() {
    return this.items[this.top--];
  }

  // peek() 查看栈顶元素
  peek() {
    return this.top === -1 ? false : this.items[this.top];
  }

  // isEmpty() 判断栈是否为空
  isEmpty() {
    return this.top === -1 ? true : false;
  }

  // size() 获取栈中元素个数
  size() {
    return this.items.length;
  }

  // toString() 返回以字符串形式的栈内元素数据
  toString() {
    let result = "";
    for (let item of this.items) {
      result += item + " ";
    }
    return result;
  }
}

const stack = new Stack()
stack.push(4)
stack.push(3)
stack.push(2)
stack.push(1)
stack.pop()
console.log(stack.peek());