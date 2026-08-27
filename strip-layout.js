const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  if (filePath.endsWith('layout.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to remove <nav>...</nav> block
  const navRegex = /<nav[\s\S]*?<\/nav>/;
  content = content.replace(navRegex, '');
  
  // Regex to remove <header>...</header> block
  const headerRegex = /<header[\s\S]*?<\/header>/;
  content = content.replace(headerRegex, '');
  
  // The pages now start with something like:
  // return (
  //   <>
  //      <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
  // We need to strip the <main> wrapper since it's now in the layout.
  // Actually, wait, <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
  // We can just keep it as `<main className="flex-1 flex flex-col w-full">` or strip the main wrap entirely.
  // The layout has:
  // <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
  //   <Header />
  //   {children}
  // </div>
  // If children has another <main className="flex-1 md:ml-64..."> it will double the margin!
  // Let's replace `<main className="flex-1 md:ml-64 flex flex-col min-h-screen">` with `<main className="flex-1 flex flex-col w-full">`
  
  const mainRegex1 = /<main className="flex-1 md:ml-64 flex flex-col min-h-screen">/;
  content = content.replace(mainRegex1, '<main className="flex-1 flex flex-col w-full">');
  
  // Or if it was just `<main className="...">`
  const mainRegex2 = /<main className="flex-1 lg:ml-64 flex flex-col min-h-screen">/;
  content = content.replace(mainRegex2, '<main className="flex-1 flex flex-col w-full">');

  fs.writeFileSync(filePath, content);
  console.log('Processed', filePath);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, 'src/app'));
