const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

// Load custom categories from config file
const config = require('./config.json');

// Function to organize files
const organizeFiles = () => {
  const folderPath = process.argv[2] || __dirname;
  const files = fs.readdirSync(folderPath);

  const originalPaths = [];

  files.forEach(file => {
    const ext = path.extname(file).slice(1);
    let destFolder = config[ext] || ext;

    // Find destination folder based on custom config
    for (let [folder, extensions] of Object.entries(config)) {
      if (extensions.includes(ext)) {
        destFolder = folder;
        break;
      }
    }

    const destPath = path.join(folderPath, destFolder);

    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(destPath);
    }

    const oldPath = path.join(folderPath, file);
    const newPath = path.join(destPath, file);

    // Store original paths for undo
    originalPaths.push({ file, oldPath });

    fs.renameSync(oldPath, newPath);
  });

  // Save original paths to a temporary file for undo
  fs.writeFileSync('undo.json', JSON.stringify(originalPaths));

  console.log("Files organized successfully!");
};

// Function to undo the last organizing operation
const undoOrganize = () => {
  if (fs.existsSync('undo.json')) {
    const data = fs.readFileSync('undo.json');
    const originalPaths = JSON.parse(data);

    originalPaths.forEach(({ file, oldPath }) => {
      const currentPath = path.join(path.dirname(oldPath), file);
      fs.renameSync(currentPath, oldPath);
    });

    fs.unlinkSync('undo.json'); // Remove the undo file after operation
    console.log("Undo successful!");
  } else {
    console.log("No previous operation to undo.");
  }
};

// Function to watch the directory and organize new files
const watchDirectory = () => {
  const folderPath = process.argv[2] || __dirname;
  const watcher = chokidar.watch(folderPath);

  watcher.on('add', (filePath) => {
    console.log(`${filePath} has been added`);
    organizeFiles();
  });

  console.log("Watching directory for changes...");
};

// Command line argument handling
if (process.argv.includes('--undo')) {
  undoOrganize();
} else if (process.argv.includes('--watch')) {
  watchDirectory();
} else {
  organizeFiles();
}
