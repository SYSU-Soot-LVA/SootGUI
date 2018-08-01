const { spawnSync } = require('child_process');


var exce = {
    exce(cName, mName) {
        return new Promise((rel, rej) => {
            try {
                const re = spawnSync('lva.LvaMain', [cName, mName]);
                rel(re.stdout, re.stderr)
            } catch (e) {
                rej(e)
            }
        })
    }
}

module.exports = exce;