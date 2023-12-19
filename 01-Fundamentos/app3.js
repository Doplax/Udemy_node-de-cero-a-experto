/**
 * Queremos contar cuantas palabras hay en el fichero
 */
const fs = require('node:fs');

const content = fs.readFileSync('./README.md', 'utf8');

//const wordCount = content.split(' ')
//const angularWordCount = words.filter(word => word.toLowerCase().includes('angular')).length
const angularWordCount = content.match(/angular/gi ?? []).length;



console.log(angularWordCount);

