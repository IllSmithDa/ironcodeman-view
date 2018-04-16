const CommandData = [
  { 
    type: "Command Intro",
    command: "ls",
    description: "lists the content of directory. Will not work in windows command line" 
  },
  { 
    type: "Command Intro",
    command: "ls -la",
    description: "lists the content of directory including hidden files. Will not in windows command line" 
  },
  {
    type: "Command Intro",
    command: "dir",
    description: `list content of directory and works in windows command line. Does not work in Unix command line`
  },
  { 
    type: "Command Intro",
    command: "cd directoryName",
    description: `changes and navigates to directory 'directoryName'. 'directoryName' needs to 
    be listed under the current directory for this command to work` 
  },
  { 
    type: "Command Intro",
    command: "cd ..",
    description: "navigates to the parent directory" 
  },
  { 
    type: "Command Intro",
    command: "mkdir folderName",
    description: "creates a new directory/folder in the current directory/folder" 
  },
  { 
    type: "Command File Linux",
    command: "rm fileName",
    description: "deletes file called fileName." 
  },
  {
    type: "Command File Linux",
    command: "rm -f fileName",
    description: "force delete file calle fileName."
  }, 
  {
    type: "Command File Linux",
    command: "mv fileName newFileName",
    description: "changes the file name 'FileName' to 'newFileName'."
  },
  {
    type: "Command File Linux",
    command: "mv fileName folderName",
    description: `moves the file 'fileName' into directory 'folderName' overwriting existing file with the same name`
  },
  {
    type: "Command File Linux",
    command: "cp filename folderName",
    description: "copies the file 'fileName' into directory 'folderName' and overwriting existing files with same name"
  },
  {
    type: "Command File Linux",
    command: "cp folderName folderName2",
    description: "Copy directory folderName and its contents into the directory folderName2"
  },
  {
    type: "Command File Linux",
    command: "find folderName -name fileName",
    description: "looks in directory 'folderName' and searches for the file 'fileName"
  },
  {
    type: "Command File Windows",
    command: "del filename",
    description: "Deletes File called fileName and works for windows command line. Does not work in Unix command line"
  },
  {
    type: "Command File Windows",
    command: "del /f filename",
    description: "Force delete file called fileName on windows command line. Does note work with Unix"
  }, 
  {
    type: "Command File Windows",
    command: `move fileName.txt C:\Filepath`,
    description: "moves the file 'fileName.txt' from the current directory to the directory path C:\Filepath"
  },
  {
    type: "Command File Windows",
    command: "move filename.txt folderName",
    description: "moves the filename.txt to the directory folderName which exists right inside current directory"
  },
  {
    type: "Command File Windows",
    command: "move folder1 folder2",
    description: "Moves folder1 and all its contents into folder2 and both exist in current directory"
  },
  {
    type: "Command File Windows",
    command: "copy fileName.txt C:\Filepath",
    description: "Copies fileName.txt into the directory path C:\Filepath"
  },
  {
    type: "Command File Windows",
    command: "copy fileName.txt folderName",
    description: "Copies fileName.txt into the folder 'folderName' which is under current directory"
  },
  {
    type: "Command File Windows",
    command: "find folderName fileName.txt",
    description: "Searches the folder 'folderName' for the file 'fileName.txt'"
  },
];

export default CommandData;