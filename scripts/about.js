import { println, scanf_promise } from "./util.js";


export async function printName() {
    println("What is your name?");
    const name = await scanf_promise();
    println(`Hello, ${name}`);
}