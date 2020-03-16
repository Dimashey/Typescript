/**
 * Built-in Generics
 * */

// const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000)
});

/**
 * Creating a Generic Function and Working with Constrains
 * */

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Dima'}, {age: 19});

/*
* Another Generic Function
* */

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 0) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' elements';
    }

    return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

/*
* The keyof Constrains
* */

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return `Value: ${obj[key]}`;
}

extractAndConvert({name: 'Dima'}, 'name');

/*
* Generic Classes
* */

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Dima");
textStorage.addItem("Vlad");
textStorage.removeItem("Vlad");

console.log(textStorage);

const numberStorage = new DataStorage<number>();

numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);

console.log(numberStorage);

/*
* Generic Utility Types
* */

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Dima', 'Vlad'];