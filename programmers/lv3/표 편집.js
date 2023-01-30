function solution(n, k, cmd) {
  class Node {
    constructor(v) {
      this.value = v;
      this.prev = null;
      this.next = null;
    }
  }
  class List {
    constructor() {
      this.root = null;
      this.tail = null;
      this.current = null;
      this.deleted = [];
    }
    insert(v) {
      if (!this.root) {
        this.root = new Node(v);
        this.tail = this.root;
        this.current = this.root;
      } else {
        const current = new Node(v);
        current.prev = this.tail;
        this.tail.next = current;
        this.tail = current;
      }
    }
    move(n) {
      if (n > 0) {
        while (n--) {
          this.current = this.current.next ?? this.current;
        }
      } else {
        while (n++) {
          this.current = this.current.prev ?? this.current;
        }
      }
    }
    delete() {
      this.deleted.push(this.current);
      if (this.current.prev) this.current.prev.next = this.current.next;
      if (this.current.next) this.current.next.prev = this.current.prev;
      this.current = this.current.next ? this.current.next : this.current.prev;
    }
    recover() {
      if (!this.deleted.length > 0) return;
      const recovered = this.deleted.pop();
      if (recovered.prev) recovered.prev.next = recovered;
      if (recovered.next) recovered.next.prev = recovered;
    }
    now() {
      return this.current;
    }
    print() {
      const num = this.deleted.map((l) => l.value).sort((a, b) => a - b);
      let point = 0;
      let str = "";
      for (let i = 0; i < n; i++) {
        if (num[point] !== i) str += "O";
        else {
          str += "X";
          point++;
        }
      }
      return str;
    }
  }
  const list = new List();
  for (let i = 0; i < n; i++) {
    list.insert(i);
  }
  list.move(k);
  for (let command of cmd) {
    const c = command.split(" ");
    if (c[0] === "D") list.move(+c.pop());
    if (c[0] === "U") list.move(-c.pop());
    if (c[0] === "C") list.delete();
    if (c[0] === "Z") list.recover();
  }
  return list.print();
}
