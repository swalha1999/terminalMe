import { getWeather } from '../utils/apiReq';
import { println } from '../utils/utils';

export const weather = async (args: string[]): Promise<void> => {
    const city = args.join('+');

    if (!city) {
      println('Usage: weather [city]. Example: weather haifa for specific city');
    }

    const weather = await getWeather(city);

    println(weather);
};

export const w = weather;
