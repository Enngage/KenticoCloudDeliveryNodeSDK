const path = require('path');
const fs = require('fs');
const appVersion = require('../package.json').version;
const packageId = require('../package.json').name;

console.log('\nRunning pre-build tasks');

const versionFilePath = path.join(__dirname + '/../lib/library-version.ts');

const src = `
export const version = '${appVersion}';
export const packageId = '${packageId}';
export const repoHost = 'npmjs.com'
`;

// ensure version module pulls value from package.json
fs.writeFile(versionFilePath, src, { flat: 'w' }, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log(`Updating application version ${appVersion}`);
    console.log(`${'Writing version module to '}${versionFilePath}\n`);
});