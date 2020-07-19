const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to image directory
const imageDirPath = resolve(__dirname, 'fabricpainting');

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

// Loop through each file that was retrieved
var i=0;
files.forEach(file => { rename(
  imageDirPath + `/${file}`,
  //imageDirPath + `/${'acrylicportrait_'+(++i).replace(' (','').replace(')','')}`,
  imageDirPath + `/${'fabricpainting'+(++i)+'.jpg'}`,
  err => console.log(err)
) 
});

// for(i=1;i<=47;i++){
//   var data =`{
//     "Img_name":"pic${i}.jpg",
//     "Img_description":""
//     },`;
//   console.log(data);
// }