// ============================================
// JavaScript 基础练习 - 从零到全栈
// ============================================

console.log('=== 1. 变量与数据类型 ===');

// 1.1 基本变量声明
let name = '小明';           // 字符串
let age = 25;                // 数字
let isStudent = true;        // 布尔值
let hobbies = null;          // null
let address;                  // undefined

console.log('姓名:', name);
console.log('年龄:', age);
console.log('是学生:', isStudent);

// 1.2 对象（Object）- 类似 JSON
let user = {
  name: '小红',
  age: 23,
  email: 'xiaohong@example.com'
};

console.log('用户对象:', user);
console.log('用户姓名:', user.name);
console.log('用户邮箱:', user['email']); // 另一种访问方式

// 1.3 数组（Array）
let fruits = ['苹果', '香蕉', '橙子'];
console.log('水果数组:', fruits);
console.log('第一个水果:', fruits[0]);
console.log('数组长度:', fruits.length);

// ============================================
// 2. 函数
// ============================================

console.log('\n=== 2. 函数 ===');

// 2.1 普通函数
function greet(name) {
  return `你好, ${name}!`;
}

console.log(greet('张三'));

// 2.2 箭头函数（现代写法，Express 中常用）
const add = (a, b) => {
  return a + b;
};

// 箭头函数简化版（单行返回）
const multiply = (a, b) => a * b;

console.log('加法:', add(3, 5));
console.log('乘法:', multiply(4, 6));

// ============================================
// 3. 数组方法（重要！API 开发常用）
// ============================================

console.log('\n=== 3. 数组方法 ===');

let numbers = [1, 2, 3, 4, 5];

// 3.1 map - 转换数组（每个元素都处理）
let doubled = numbers.map(num => num * 2);
console.log('原数组:', numbers);
console.log('翻倍后:', doubled);

// 3.2 filter - 过滤数组（筛选符合条件的）
let evens = numbers.filter(num => num % 2 === 0);
console.log('偶数:', evens);

// 3.3 forEach - 遍历数组（执行操作，不返回新数组）
console.log('遍历打印:');
numbers.forEach(num => {
  console.log(`数字: ${num}`);
});

// 3.4 find - 查找第一个匹配的元素
let found = numbers.find(num => num > 3);
console.log('第一个大于3的数:', found);

// ============================================
// 4. Promise 与 async/await（API 调用必备）
// ============================================

console.log('\n=== 4. Promise 与 async/await ===');

// 4.1 Promise 基础（模拟异步操作）
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: '这是从服务器获取的数据' });
    }, 1000);
  });
}

// 4.2 使用 .then() 处理 Promise
fetchData().then(result => {
  console.log('Promise 结果:', result);
});

// 4.3 使用 async/await（更简洁，推荐）
async function getData() {
  try {
    const result = await fetchData();
    console.log('async/await 结果:', result);
  } catch (error) {
    console.error('错误:', error);
  }
}

getData();

// ============================================
// 5. 对象解构与展开（现代 JS 常用）
// ============================================

console.log('\n=== 5. 对象解构与展开 ===');

let person = {
  name: '李四',
  age: 30,
  city: '北京'
};

// 5.1 解构赋值（重命名避免与前面的 name 冲突）
let { name: personName, age: personAge } = person;
console.log('解构后的变量:', personName, personAge);

// 5.2 展开运算符
let newPerson = { ...person, job: '工程师' };
console.log('展开后的新对象:', newPerson);