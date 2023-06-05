"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDashDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dash_dto_1 = require("./create-dash.dto");
class UpdateDashDto extends (0, mapped_types_1.PartialType)(create_dash_dto_1.CreateDashDto) {
}
exports.UpdateDashDto = UpdateDashDto;
//# sourceMappingURL=update-dash.dto.js.map