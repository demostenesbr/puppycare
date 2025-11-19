"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsAppService = void 0;
const axios_1 = __importDefault(require("axios"));
class WhatsAppService {
    phoneNumberId;
    token;
    base = 'https://graph.facebook.com/v20.0';
    constructor(phoneNumberId = process.env.WHATSAPP_PHONE_ID, token = process.env.META_TOKEN) {
        this.phoneNumberId = phoneNumberId;
        this.token = token;
    }
    async sendTemplate(to, template, lang = 'pt_BR', components) {
        const url = `${this.base}/${this.phoneNumberId}/messages`;
        const payload = {
            messaging_product: 'whatsapp',
            to,
            type: 'template',
            template: { name: template, language: { code: lang }, components },
        };
        const { data } = await axios_1.default.post(url, payload, {
            headers: { Authorization: `Bearer ${this.token}` },
        });
        return data;
    }
    async sendText(to, body) {
        const url = `${this.base}/${this.phoneNumberId}/messages`;
        const payload = {
            messaging_product: 'whatsapp',
            to,
            type: 'text',
            text: { preview_url: false, body },
        };
        const { data } = await axios_1.default.post(url, payload, {
            headers: { Authorization: `Bearer ${this.token}` },
        });
        return data;
    }
}
exports.WhatsAppService = WhatsAppService;
