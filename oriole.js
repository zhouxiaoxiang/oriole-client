var oriole = require('node-nameko-client');

function connect(config, service, method, args, kwargs, cb) {
    oriole.connect(config)
        .then(rpc => rpc.call(service, method, args, kwargs, cb))
        .then(result => cb(result))
        .catch(error => console.error(error.stack));
}

exports.connect = connect
