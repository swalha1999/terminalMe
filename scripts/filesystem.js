class Folder {
  constructor(name, parent) {
    this.name = name;
    this.parent = parent;
    this.folders = [];
    this.files = [];
  }

  addFolder(name) {
    const folder = new Folder(name, this);
    this.folders.push(folder);
  }

  getFolders() {
    return this.folders.map((folder) => folder.name).join(' ');
  }

  getParent() {
    return this.parent;
  }

  getFolder(name) {
    return this.folders.find((folder) => folder.name === name);
  }

  addFile(name) {
    const file = new Files(name, '');
    this.files.push(file);
    return file;
  }

  getFiles() {
    return this.files.map((file) => '*' + file.name).join(' ');
  }

  getFile(name) {
    return this.files.find((file) => file.name === name);
  }
}

class Files {
  constructor(name, content) {
    this.name = name;
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  setContent(content) {
    this.content = content;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

const root = new Folder('');

export default root;
