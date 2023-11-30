import root from '../utils/fileSystem';
import { println } from '../utils/utils';


let currentPath = root;

export const ls = async (args: string[]): Promise<void> => {
    const path = args.join(' ');
    let result = `${currentPath.getFolders()}  ${currentPath.getFiles()}`;
    if (path === '-l') {
        result = `${result}  ${currentPath.getFiles()}`;
    }
    if (result !== '  ') {
        console.log(result);
        println(result);
    }
};

export const cd = async (args: string[]): Promise<void> => {
    const path = args.join(' ');
    const folder = currentPath.getFolder(path);
    if (path === '..') {
        currentPath = currentPath.getParent() || currentPath;
    } else if (folder) {
        currentPath = folder;
    } else {
        println('No such folder');
    }
};

