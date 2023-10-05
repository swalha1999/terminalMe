import { getIp, println } from "../utils/utils";

export async function ipconfig(args: string[]): Promise<void> {
    println(`Your current ip is: ${getIp()}`);
}

export async function ifconfig(args: string[]): Promise<void> {
    println(`Your current ip is: ${getIp()}`);
}