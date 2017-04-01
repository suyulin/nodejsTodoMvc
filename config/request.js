const superagent = require('superagent');
const domain = require('./domain');

function requestAPI(path, data, mode = 'GET') {
    return new Promise((reslove, reject) => {
        let request = null;
        //const domainPath = `${domain}${path}`;
        const domainPath = path
        switch (mode.toUpperCase()) {
            case 'POST':
                request = superagent.post(domainPath);
                request.send(data);
                break;
            case 'GET':
                request = superagent.get(domainPath);
                request.query(data);
                break;
            case 'DELETE':
                request = superagent.del(domainPath);
                request.send(data);
                break;
            case 'PUT':
                request = superagent.put(domainPath);
                request.send(data);
                break;
            default:
        }
        request.withCredentials()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .end((err, {
                body
            } = {}) => {
                if (err) {
                    reject(err);
                    return;
                }
                reslove(body);
            });
    });
}
module.exports = requestAPI;