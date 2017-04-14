var oriole = require("oriole-client");

service = "log_service";
method = "ping";
arg = [];
kwargs = {};
config = {
    host: '127.0.0.1',
    login: 'test',
    password: 'test'
};

oriole.connect(config, service,
    method, arg,
    kwargs,
    (e, r) => console.log(r));
