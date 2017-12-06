const fs = require('fs');
const path = require('path');
const Components = require('../components.json');

let basePath = path.resolve(__dirname, '../packages/theme-default');

function fileExists(filePath){
	try{
		return fs.statSync(filePath).isFile();
	}catch(err){
		return false;
	}
}
let importContent = `@import './common/variables.less';\n`;

Object.keys(Components).forEach(key => {
	let fileName = key + '.less';
	let filePath = path.resolve(basePath, fileName);
	importContent += `@import './${fileName}';\n`;
	if (!fileExists(filePath)) {
		fs.writeFileSync(filePath, '', 'utf8');
		console.log('创建遗漏的 ',fileName,' 文件');
	}
});
fs.writeFileSync(path.resolve(basePath, 'index.less'),importContent);