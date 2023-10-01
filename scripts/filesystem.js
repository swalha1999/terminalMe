class FileSystem {
    constructor() {
      this.root = {};
    }
  
    createDirectory(path) {
      const directory = {};
      this.setCookie(path, JSON.stringify(directory));
      this.updateParentDirectory(path);
    }
  
    createFile(path, content) {
      this.setCookie(path, content);
      this.updateParentDirectory(path);
    }
  
    readDirectory(path) {
      const directoryString = this.getCookie(path);
      if (directoryString) {
        const directory = JSON.parse(directoryString);
        return Object.keys(directory);
      }
      return [];
    }
  
    readFile(path) {
      return this.getCookie(path);
    }
  
    updateParentDirectory(path) {
      const parentPath = this.getParentPath(path);
      if (parentPath) {
        const parentDirectoryString = this.getCookie(parentPath);
        if (parentDirectoryString) {
          const parentDirectory = JSON.parse(parentDirectoryString);
          const entryName = this.getEntryName(path);
          parentDirectory[entryName] = true;
          this.setCookie(parentPath, JSON.stringify(parentDirectory));
        }
      }
    }
  
    deleteEntry(path) {
      this.deleteCookie(path);
      const parentPath = this.getParentPath(path);
      if (parentPath) {
        const parentDirectoryString = this.getCookie(parentPath);
        if (parentDirectoryString) {
          const parentDirectory = JSON.parse(parentDirectoryString);
          const entryName = this.getEntryName(path);
          delete parentDirectory[entryName];
          this.setCookie(parentPath, JSON.stringify(parentDirectory));
        }
      }
    }
  
    setCookie(name, value) {
      document.cookie = `${name}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
    }
  
    getCookie(name) {
      const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${name}=`))
        ?.split('=')[1];
      return cookieValue ? decodeURIComponent(cookieValue) : null;
    }
  
    deleteCookie(name) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  
    getParentPath(path) {
      const parentPath = path.substring(0, path.lastIndexOf('/'));
      return parentPath || null;
    }
  
    getEntryName(path) {
      return path.substring(path.lastIndexOf('/') + 1);
    }
  }
  
  // Example usage
  const fileSystem = new FileSystem();
  
  // Create a directory
  fileSystem.createDirectory('/root');
  fileSystem.createDirectory('/root/documents');
  
  // Create a file
  fileSystem.createFile('/root/documents/file1.txt', 'This is the content of file1.txt');
  
  // Read the directory
  const directoryContents = fileSystem.readDirectory('/root/documents');
  console.log(directoryContents); // Output: ['file1.txt']
  
  // Read the file
  const fileContent = fileSystem.readFile('/root/documents/file1.txt');
  console.log(fileContent); // Output: 'This is the content of file1.txt'
  
  // Delete the file
  fileSystem.deleteEntry('/root/documents/file1.txt');