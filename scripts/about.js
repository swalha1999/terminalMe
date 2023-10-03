import { println, scanf_promise, printnln } from "./util.js";

export async function printName() {
    for (let i = 0; i < 3; i++) {
        println("What is your name?");
        const name = await scanf_promise();
        println(`Hello, ${name}`);
    }
}