"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashModule = void 0;
const common_1 = require("@nestjs/common");
const dash_service_1 = require("./dash.service");
const dash_gateway_1 = require("./dash.gateway");
let DashModule = exports.DashModule = class DashModule {
};
exports.DashModule = DashModule = __decorate([
    (0, common_1.Module)({
        providers: [dash_gateway_1.DashGateway, dash_service_1.DashService],
        exports: [dash_gateway_1.DashGateway, dash_service_1.DashService],
    })
], DashModule);
//# sourceMappingURL=dash.module.js.map