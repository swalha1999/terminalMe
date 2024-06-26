import { getQuote } from '../utils/apiReq';
import { println } from '../utils/utils';

export const cowsay = async (args: string[] = []): Promise<void> => {
    const quote = (await getQuote()).quote;
    println(quote);
};
