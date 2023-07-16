let variable = "hello";
variable = "hi";
let age = 18;

let ageWithType: number = 12;

let testString: string;

testString = "hello";

let testBoolean: boolean;

testBoolean = false;

let testStringOrNumber: string | number;

testStringOrNumber = 10;
testStringOrNumber = "10";

let names = ["john", "jane", "tom"];

// names.push(3)
names.push("mike");

let numbers = [11, 22, 35];

// numbers.push(true)

numbers.push(92);

let testStringArray: string[];

// testStringArray = [1, 2, 3]
testStringArray = ["nayeem", "galib"];

let testNumberArray: number[];

// testNumberArray = [true, false]
testNumberArray = [1, 2, 3];

let testStringOrNumberArray: (string | number)[];

testStringOrNumberArray = [1, "two", 3];

//Objects

let user = {
  userName: "john",
  age: 22,
  isAdmin: false,
};

user.userName = "jane";
// user.age = 'eighteen'
user.age = 29;
// user.isAdmin = 'no'
user.isAdmin = true;

// user.phone = '+12345678'

let userObj: {
  userName: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  userName: "john",
  age: 23,
  isAdmin: true,
  //   phone: '+1234567'
};

let userObj2: {
  userName: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  userName: "jane",
  age: 43,
  isAdmin: false,
  phone: "+1234567",
};

// Any
let testAny: any;

testAny = 12;
testAny = "hello";
testAny = true;
testAny = [true];
testAny = {};

let testAnyArray: any[];

testAnyArray = [1, "two", false, []];

// Functions

let sayHi = () => {
  console.log("Hi, welcome");
};

// sayHi = "hi";

let funcReturnString = (): string => {
  console.log("hi");
  return "Web Pro Nayeem";
};

let multiple = (num: number) => {
  return num * 2;
};

let multiple2 = (num: number): number => {
  return num * 2;
};

let multiple3 = (num: number): void => {
  //   return num * 2;
  // do something but don't return
};

let sum = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};

sum(2, 3);

let func = (user: { userName: string; age: number; phone?: string }) => {
  console.log(user.userName);
};

// Type aliases
type UserType = {
  userName: string;
  age: number;
  phone?: string;
};

let betterFunc = (user: UserType) => {
  console.log(user.userName);
};

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + "times" + str);
};

type UserType2 = {
  userName: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme: UserType2 = {
  userName: "john",
  age: 43,
  // theme: 'pink',
  theme: "dark",
};

// Interface

interface IUser {
  userName: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  userName: "tom",
  email: "tom@gmail.com",
  age: 43,
  employeeId: 1,
};

const client: IUser = {
  userName: "tom",
  email: "tom@gmail.com",
  age: 43,
  //   employeeId: 1,
};

// Generics

interface IAuthor {
  id: number;
  userName: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<String> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: ["str", "str2"],
};

const testM2: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, userName: "john" }],
};
