"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const url = require("url");
let DashGateway = exports.DashGateway = class DashGateway {
    constructor() {
        this.clientsArr = [];
    }
    handleConnection(client) {
        console.log('有人链接了' + client.id);
    }
    handleDisconnect(client) {
        console.log('断开了' + client.id);
    }
    addCart(client, payload) {
        console.log(payload);
        const myUrl = url.parse(client.request.url, true);
        const roomid = myUrl.query.roomid;
        client.join(roomid);
        client.broadcast.to(roomid).emit('addCart', 'Server AddCart Ok');
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", Object)
], DashGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('addCart'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DashGateway.prototype, "addCart", null);
exports.DashGateway = DashGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(4000, {
        cors: {
            origin: '*',
        },
    })
], DashGateway);
//# sourceMappingURL=dash.gateway.js.map