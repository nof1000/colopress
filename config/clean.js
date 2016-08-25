const path = require('path');
const fs = require('fs');

const cfg = require('./config.js');

function clean(dir) {
    let current;

    if (fs.statSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            current = path.join(dir, file);

            if (fs.statSync(current).isDirectory()) {
                return clean(current);
            }

            fs.unlinkSync(current);
        });

        fs.rmdirSync(dir);
    }
};

try { clean(cfg.dir.build); } catch (e) {}
console.log('all cleaned');
