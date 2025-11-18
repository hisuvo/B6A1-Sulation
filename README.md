# B6A1-Sulation

## What is the use of the keyof keyword in TypeScript? Provide an example

TypeScript এর ভিতরে keyof operator ব্যবহার করা হয় object type structer এর
key গুলোর ইউনিয়ন টাইপ তৈর করার জন্য।

### keyof অপারেটর কোন কোন type এর ক্ষেত্রে ব্যবহার করা হয় তা নিম্নে দেওয়া হলো

১। type alias
২। interface
৩। object type
৪। mapped type

### type alias এর ক্ষেত্র -

    type Person = {
        name: string;
        age: number;
        country: string;
        email: string;
    };

    type PersonKey = keyof Person

### interface এর ক্ষেত্র -

    interface Person  {
        name: string;
        age: number;
        country: string;
        email: string;
    };

    type PersonKey = keyof Person

### mapped type এর ক্ষেত্র -

    type MapUser = {
       readonly [K in keyof User]: User[K];
    };

এখানে [K in keyof User] মানে হচ্ছে User টাইপের প্রতিটি কী-এর জন্য নতুন প্রপার্টি তৈরি করা এবং User[K] মানে ঐ কী-এর টাইপ

### keyof operator এর ব্যবহার সুবিধা

ভুল key এর ব্যবহার হতে বাঁচা যায়

    type User = {
      name: string;
      age: number;
    }

    function getValue(obj: User, key: keyof User) {
      return obj[key];
    }

    const user = {
      name: "B",
      age: 2
    }

    getValue(user, "name"); // ✔
    getValue(user, "nam"); // ভুল বানান, TypeScript error throw

Dynamic key access করা যায়

Generice type এর মাধ্যমে Reuseable function ব্যবহার করা যাই

    function getValue<T, K extends keyof T>(obj: T, key: K) {
      return obj[key];
    }

টাইপ তৈরি করা এবং পরিচালনা করা সহজ হয়

    type Person = {
      name: string;
      age: number;
      country: string;
      email: string;
    };

    type PersonKey = keyof Person

type PersonKey = "name" | "age" | "country" | "email" ব্যবহার করতে হয় না ।
