
const path = require('path')
const content = 'write some content'
// const joinPath = path.join(__dirname, '/haha', '/123', 'test.txt')
// console.log('joinPath', joinPath);
const fs = require('fs')
// fs.readFile('./text1.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log('error', err)
//   }
//   console.log('data', data)
// })

// fs.writeFile('text1.txt', content, err => {
//   if (err) {
//     console.log("写入失败")
//   }
//   console.log('写入成功')
// })

// try {
//   fs.writeFileSync('text1.txt', content);
//   console.log("写入成功")
//   // file written successfully
// } catch (err) {
//   console.error(err);
// }


// fs.appendFile('text1.txt', content, err => {
//   if (err) {
//     console.log(err)
//   }
//   console.log('新增成功')
// })


// const folderName = 'folder2'
// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName);
//   } else {
//     console.log('该文件夹已经存在了')
//   }

// } catch (err) {
//   console.error(err);
// }

const folderPath = path.join(__dirname, 'folder', 'imgs1')
// const folderList = fs.readdirSync('./folder');
// fs.mkdir(folderPath, 'img')
// fs.mkdirSync(folderPath, { recursive: true }, (err) => {
//   if (err) {
//     console.error('Error creating folder:', err);
//   } else {
//     console.log('Folder created successfully');
//   }
// });

// fs.rmdir(folderPath, err => {
//   if (err) {
//     console.log("删除失败", err)
//   }
//   console.log('文件夹删除成功')
// })


fs.rm(folderPath, { recursive: true, force: true }, err => {
  if (err) {
    throw err;
  }

  console.log(`${folderPath} is deleted!`);
});