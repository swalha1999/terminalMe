import { printnln, println, scanf_promise } from "./util.js";


export async function printName() {
    printnln("What is your name?");
    const name = await scanf_promise();
    println(`Hello, ${name}`);
}