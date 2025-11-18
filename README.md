# B6A1-Sulation

## What are some differences between interfaces and types in TypeScript?

TypeScript ডেভোলপারদের মধ্যো একটা commmon প্রশ্ন ইন্টারফেস অ্যান্ড টাইপ এর মধ্যো পাথক্য কী এবং কখন ব্যবহার করবো । আজকের ব্লগে এই বিষয় নিয়ে আলোচনা করবো -

#### তবে সর্বপ্রথম জানবো ইন্টারফেস অ্যান্ড টাইপ alies কি?

টাইপস্ক্রিপ্টে ইন্টারফেস এবং টাইপ এলিয়াস হলো দুটি উপায় যা দিয়ে কোনো অবজেক্ট বা ডেটার গঠন define করা যায়।

### ইন্টারফেস অ্যান্ড টাইপ পার্থক্যগুলো -

#### ডিক্লারেশন মার্জিং

একই নামের একাধিক ইন্টারফেস ঘোষণা করা হলে, TypeScript স্বয়ংক্রিয়ভাবে সেগুলোকে একটি একক ইন্টারফেসে একত্রিত (merge) করে ফেলে। কিন্তু type মার্জিং সমর্থন করে না। একই নামের দুটি type ডিক্লেয়ার করলে কম্পাইলার এরর (error) দেখাবে

    interface User {
      name: string;
    }

    interface User {
      age: number;
    }

    // result

    interface{
      name: string;
      age: number;
    }

#### ডেটা টাইপ এর নমনীয়তা

ইন্টারফেস প্রধানত অবজেক্টের কাঠামো এবং class contracts define করার জন্য ডিজাইন করা হয়েছে। এটি প্রিমিটিভ টাইপ (যেমন: string, number, boolean, Union type, tuple) define করতে পারে না। কিন্তু টাইপ অপেরেটর অবজেক্ট ছাড়াও প্রিমিটিভ টাইপ, ইউনিয়ন টাইপ, ইন্টারসেকশন টাইপ (&), এবং টাপল টাইপ সংজ্ঞায়িত করতে পারে

#### Extends করা

ইন্টারফেস অন্য একটি বা একাধিক ইন্টারফেসকে extends কীওয়ার্ড ব্যবহার করে এক্সটেন্ড করতে পারে। এটি অবজেক্ট-অরিয়েন্টেড (object-oriented) ইনহেরিটেন্সের জন্য পরিষ্কার কাঠামো দেয়। কিন্তু টাইপ অপেরেটর অন্য টাইপ বা ইন্টারফেসকে সরাসরি extends করতে পারে না। তবে, ইন্টারসেকশন (&) অপারেটর ব্যবহার করে একাধিক টাইপকে একত্রিত করে এক্সটেন্ড করার মতো কাজ করা পারে।

#### ক্লাসের সাথে ব্যবহার

উভয়কেই implements কীওয়ার্ড ব্যবহার করে ক্লাসে প্রয়োগ করা যায়। তবে, একটি ক্লাস কোনো ইউনিয়ন টাইপ (type A | B) ইমপ্লিমেন্ট করতে পারে না, কিন্তু একটি ইন্টারফেস তা করতে পারে যদি সেটি একটি নির্দিষ্ট কাঠামো মেনে চলে।

### ইন্টারফেস অ্যান্ড টাইপ কখন ব্যবহার করবো

যখন object বা class-এর structure define করতে হয়, declaration merging প্রয়োজন তখন ইন্টারফেস ব্যবহার করব । আর টাইপ অপারেটর primitive type, function signature define, union বা complex type define করতে ব্যবহার করবো।

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
