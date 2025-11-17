type ValueType = string | number | boolean;
function formatValue(value: ValueType): ValueType {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

function getLength(value: string | string[] | number[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Rating = {
  title: string;
  rating: number;
};
function filterByRating(arr: Rating[]): Rating[] {
  return arr.reduce((table, book) => {
    if (book.rating >= 0 && book.rating <= 5) {
      if (book.rating >= 4) {
        table.push(book);
      }
    }
    return table;
  }, [] as Rating[]);
}

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
function filterActiveUsers(value: User[]): User[] {
  return value.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (value: Book) => {
  console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${
      value.publishedYear
    }, Available: ${value.isAvailable ? "yes" : "NO"}`
  );
};

function getUniqueValues<T extends number | string>(arr1: T[], arr2: T[]): T[] {
  let uniqueArray: T[] = [];

  function addUnique(item: T) {
    let isExist = false;

    for (let i = 0; i < uniqueArray.length; i++) {
      if (uniqueArray[i] === item) {
        isExist = true;
        break;
      }
    }

    if (!isExist) uniqueArray.push(item);
  }

  for (let i = 0; i < arr1.length; i++) {
    addUnique(arr1[i]);
  }

  for (let j = 0; j < arr2.length; j++) {
    addUnique(arr2[j]);
  }

  return uniqueArray;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
const calculateTotalPrice = (products: Product[]) => {
  return products.reduce((total, product) => {
    let discount =
      product.discount !== undefined
        ? Math.max(Math.min(product.discount, 100), 0)
        : 0;

    let productTotalPrice =
      product.price * product.quantity * (1 - discount / 100);

    return total + productTotalPrice;
  }, 0);
};
