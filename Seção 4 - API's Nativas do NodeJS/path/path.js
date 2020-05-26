const path = require('path');

console.log(path.basename('c:\\temp\\arquivo.html'));

console.log
('normalize', path.normalize('c:\\temp/dir//subdir/dir/..'));

console.log('join path: ', path.join('/teste', 'teste2', 'teste3/teste4', '..'));

console.log('resolve path: ', path.resolve('path.js'));

console.log('extension: ', path.extname('path.js'));