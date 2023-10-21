const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'Septemper', 'October', 'November', 'December'
];

export const calHelper = (args: string[]): string => {
    let calString = '';

    calString += `current Date is ${new Date().toString()}\n`;
    const inputYear = args[0] ? parseInt(args[0]) : new Date().getFullYear();
    const inputMonth = args[1] ? parseInt(args[1]) - 1 : new Date().getMonth();
    const date = new Date(inputYear, inputMonth, 1);
    const month = date.getMonth();
    const year = date.getFullYear();

    calString += `    ${months[month]} ${year}\n`;

    for (let i = 0; i < 7; i++) {
        calString += `${days[i]} `;
    }
    calString += '\n';

    const firstDay = new Date(year, month, 1).getDay();
    for (let i = 0; i < firstDay; i++) {
        calString += '   ';
    }
    for (let i = 1; i <= 31; i++) {
        const day = new Date(year, month, i);
        if (day.getMonth() !== month) {
            break;
        }
        if (i < 10) {
            calString += ' ';

        }
        calString += `${i} `;
        if (day.getDay() === 6) {
            calString += '\n';
        }
    }
    calString += '\n';

    return calString;
};
