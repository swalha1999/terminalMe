import { println, scanf_promise, printnln } from "./util.js";


export async function printName() {
    println("What is your name?");
    const name = await scanf_promise();
    printnln(`Hello, ${name}`);
}