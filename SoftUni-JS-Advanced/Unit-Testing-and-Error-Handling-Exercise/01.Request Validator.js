function requestValidator(obj = {}) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const version = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriRegex = /^([\w\d\.]+|\*)$/g;
    const messageRegex = /^([^<>\\&'"]*)$/g;

    if (obj['method'] == undefined || !methods.includes(obj['method'])) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (!uriRegex.test(obj['uri']) || obj['uri'] == undefined) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (obj['version'] == undefined || !version.includes(obj['version'])) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (!messageRegex.test(obj['message']) || obj['message'] == undefined) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return obj;
}
console.log(requestValidator({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
}));