const fs = require ("fs"); 
const utils = require ("daveutils");
const davezip = require ("davezip");

var theArchive = davezip.createArchive (__dirname + '/archive.zip', function (err, data) {
	if (err) {
		console.log (err.message);
		}
	else {
		console.log (utils.jsonStringify (data));
		}
	});
theArchive.addFileToArchive ("image.png", {name: "testimage.png"});
theArchive.addDirectoryToArchive ("testFiles/", "Test Files");
theArchive.finalize ();
