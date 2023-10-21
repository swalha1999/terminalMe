import { println } from '../utils/utils';
import { calHelper } from '../utils/date';


export const date = async (args: string[]): Promise<void> => {
    println(new Date().toString());
};

export const cal = async (args: string[]): Promise<void> => {
        println(calHelper(args));
};
