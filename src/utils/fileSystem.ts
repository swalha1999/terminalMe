// class to save file names and add new files to the list

class Folder {

    public folders: Folder[] = [];

    public files: Files[] = [];

    public parent: Folder | null = null;

    constructor(public name: string, parent?: Folder) {
        this.name = name;
        this.parent = parent || null;
    }

    public addFolder(name: string): void {
        const file = new Folder(name, this);
        this.folders.push(file);
    }

    public getFolders(): string | null {
        const result = this.folders.map(folder => folder.name).join('  ');
        return result;
    }

    public getFoldersArray(): Folder[] {
        return this.folders;
    }

    public getFilesArray(): Files[] {
        return this.files;
    }


    public getParent(): Folder | null {
        return this.parent;
    }

    public getFolder(name: string): Folder | null {
        const folder = this.folders.find(folder => folder.name === name);
        return folder || null;
    }

    public addFile(name: string): Files {
        const files = new Files(name, '');
        this.files.push(files);
        return files;
    }

    public getFiles(): string | null {
        const result = this.files.map(file => `*${file.name}`).join('  ');
        return result;
    }

    public getFile(name: string): Files | null {
        const files = this.files.find(file => file.name === name);
        return files || null;
    }

  }

class Files {

    public color = '';

    constructor(public name: string, public content: string, public InputColor?: string) {
        this.name = name;
        this.content = content;
        this.color = InputColor || '';
    }

    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getColor(): string {
        return this.color;
    }


}

const root = new Folder('');

root.addFolder('bin');
root.addFolder('dev');
root.addFolder('home');
root.addFolder('lib');
root.addFolder('lib64');
root.addFolder('lost+found');
root.addFolder('mnt');
root.addFolder('sbin');
root.addFolder('proc');
root.addFolder('run');
root.addFolder('snap');
root.addFolder('boot');
root.addFolder('sys');
root.addFolder('usr');
root.addFolder('boot');
root.addFolder('etc');
root.addFolder('init');
root.addFolder('lib32');
root.addFolder('libx32');
root.addFolder('media');
root.addFolder('opt');
root.addFolder('root');
root.addFolder('sbin');
root.addFolder('srv');
root.addFolder('tmp');
root.addFolder('var');
root.getFolder('home')?.addFolder('swalha');
root.getFolder('home')?.addFolder('user');

export default root;

