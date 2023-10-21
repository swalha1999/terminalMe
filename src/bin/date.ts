import { println, printnln } from '../utils/utils';
import { calHelper } from '../utils/date';

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'Septemper', 'October', 'November', 'December'
];


export const date = async (args: string[]): Promise<void> => {
    println(new Date().toString());
};

export const cal = async (args: string[]): Promise<void> => {
        println(calHelper(args));
};
