"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsAdapter = void 0;
const WebSocket = require("ws");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class WsAdapter {
    constructor(app) {
        this.app = app;
    }
    create(port, options = {}) {
        console.log('ws create');
        return new WebSocket.Server(Object.assign({ port }, options));
    }
    bindClientConnect(server, callback) {
        console.log('ws bindClientConnect, server:\n', server);
        server.on('connection', callback);
    }
    bindMessageHandlers(client, handlers, process) {
        console.log('[waAdapter]有新的连接进来');
        (0, rxjs_1.fromEvent)(client, 'message')
            .pipe((0, operators_1.mergeMap)((data) => this.bindMessageHandler(client, data, handlers, process)), (0, operators_1.filter)((result) => result))
            .subscribe((response) => client.send(JSON.stringify(response)));
    }
    bindMessageHandler(client, buffer, handlers, process) {
        let message = null;
        try {
            message = JSON.parse(buffer.data);
        }
        catch (error) {
            console.log('ws解析json出错', error);
            return rxjs_1.EMPTY;
        }
        const messageHandler = handlers.find((handler) => handler.message === message.event);
        if (!messageHandler) {
            return rxjs_1.EMPTY;
        }
        return process(messageHandler.callback(message.data));
    }
    close(server) {
        console.log('ws server close');
        server.close();
    }
}
exports.WsAdapter = WsAdapter;
//# sourceMappingURL=ws.adapter.js.map