const fs = require('fs');
const path = require('path');
const uppercamelcase = require('uppercamelcase');
const endOfLine = require('os').EOL;

var args = process.argv.splice(2);

if (args.length == 0 ) {
	console.log('You must give a name to the new component!');
	process.exit();
}
var name = args[0];

const INDEX_TEMPLATE = `import ${uppercamelcase(name)} from './src/${name.toLowerCase()}.vue'

${uppercamelcase(name)}.install = function (Vue) {
	Vue.component(${uppercamelcase(name)}.name, ${uppercamelcase(name)})
}

export default ${uppercamelcase(name)}
`;
const VUE_TEMPLATE = `<template>
	<div>
		<slot></slot>
	</div>
</template>
<script>
	export default{
		name: 'n-${name}'
	}
</script>
`;

const JSON_PATH = path.resolve(__dirname, '../components.json');
const INDEX_PATH = path.resolve(__dirname, `../packages/${name}/index.js`);
const VUE_PATH = path.resolve(__dirname, `../packages/${name}/src/${name}.vue`);
const THEME_PATH = path.resolve(__dirname, `../packages/theme-default/${name}.less`);

var file = fs.readFileSync(JSON_PATH, 'utf8');
var jsonData = JSON.parse(file);

jsonData[name] = `./packages/${name}`;

fs.mkdirSync(path.resolve(__dirname, `../packages/${name}`));
fs.mkdirSync(path.resolve(__dirname, `../packages/${name}/src`));

fs.writeFileSync(JSON_PATH, JSON.stringify(jsonData), 'utf8');
fs.writeFileSync(INDEX_PATH, INDEX_TEMPLATE, 'utf8');
fs.writeFileSync(VUE_PATH, VUE_TEMPLATE, 'utf8');
fs.writeFileSync(THEME_PATH, '', 'utf8');

console.log('create new component ' + name + ' success!');