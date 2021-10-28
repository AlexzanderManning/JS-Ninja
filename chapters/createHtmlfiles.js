var fs = require('fs');

// fs.readFile('filelist.txt', 'utf-8', function (err, data) {
// 	if (err) throw err;

// 	console.log(typeof data); // string

// 	data.replace(/\.\/+/, 'myString');
// });

// console.log(
// 	'Path of file in parent dir:',
// 	require('path').resolve(__dirname, '../app.js')
// );

// fs.readFile(
// 	__dirname + '/chapter-01/chapter-01-table-of-contents.html',
// 	'utf-8',
// 	function (err, data) {
// 		if (err) throw err;

// 		console.log(data); // string
// 	}
// );

for (let i = 1; i < 15; i++) {
	writeFile(i);
}

async function writeFile(chapterNumber) {
	let count = chapterNumber > 9 ? chapterNumber : `0${chapterNumber}`;
	const files = fs.readdirSync(
		__dirname + `/chapter-${count}`,
		(err, files) => {
			// console.log(`Chapter ${count} file length: `, files.length);
			testCount = files.length;
			return files.length;
		}
	);

	let TLcount = 0;
	const trueLength = files.forEach((str) => {
		if (str.includes('listing')) {
			TLcount++;
		}
	});

	let sectionLength = TLcount;

	console.log(TLcount);
	const newFile = createHtml(chapterNumber, sectionLength);
	fs.writeFile(
		__dirname + `/chapter-${count}/chapter-${count}-table-of-contents.html`,
		newFile,
		'utf-8',
		function (err, data) {
			if (err) throw err;
		}
	);
}

function createHtml(chapterNumber, sectionCount) {
	// console.log(`Chapter # : ${chapterNumber}, Section Count : ${sectionCount}`);
	const subSections = (sectionCount) => {
		let str = '';
		for (let i = 1; i <= sectionCount; i++) {
			str += `<h2><a href="listing-${chapterNumber}.${i}.html">Listing ${chapterNumber}.${i}</a></h2> \n`;
		}
		return str;
	};

	const list = subSections(sectionCount);

	// console.log(`Chapter ${chapterNumber}'s sub sections : `, list);

	return `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="/index.css" />
		<title>Chapter ${chapterNumber}</title>
	</head>
	<body>
		<div class="body">
			<div class="container">
		<h1>Sections</h1>
    <div>
			<ul>
				${list}
			</ul>
		</div>
		</div>
		</div>
	</body>
</html>
`;
}
