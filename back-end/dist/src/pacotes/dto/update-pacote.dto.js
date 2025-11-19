"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePacoteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_pacote_dto_1 = require("./create-pacote.dto");
class UpdatePacoteDto extends (0, swagger_1.PartialType)(create_pacote_dto_1.CreatePacoteDto) {
}
exports.UpdatePacoteDto = UpdatePacoteDto;
//# sourceMappingURL=update-pacote.dto.js.map