const fs = require('fs');
const config = require('../config/default')

// add url-route in /controllers:
function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = config.rootpath + url.substring(4);
            router.get(path, mapping[url]);
            console.log(`addMapping register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = config.rootpath + url.substring(5);
            router.post(path, mapping[url]);
            console.log(`addMapping register URL mapping: POST ${path}`);
        } else if (url.startsWith('PUT ')) {
            var path = config.rootpath + url.substring(4);
            router.put(path, mapping[url]);
            console.log(`addMapping register URL mapping: PUT ${path}`);
        } else if (url.startsWith('DELETE ')) {
            var path = config.rootpath + url.substring(7);
            router.del(path, mapping[url]);
            console.log(`addMapping register URL mapping: DELETE ${path}`);
        } else {
            console.log(`addMapping invalid URL: ${url}`);
        }
    }
}

function addControllers(router, dir) {
    fs.readdirSync(__dirname + '/' + dir).filter((f) => {
        return f.endsWith('.js');
    }).forEach((f) => {
        console.log(`addControllers controller: ${f}...`);
        let mapping = require(__dirname + '/' + dir + '/' + f);
        addMapping(router, mapping);
    });
}

module.exports = function (dir) {
    console.log(`controllers.js `+dir);
    let
        controllers_dir = dir || '../controllers',
        router = require('koa-router')();
    addControllers(router, controllers_dir);
    return router.routes();
};