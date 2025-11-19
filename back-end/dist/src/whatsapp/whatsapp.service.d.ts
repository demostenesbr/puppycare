export declare class WhatsAppService {
    private phoneNumberId;
    private token;
    private base;
    constructor(phoneNumberId?: string, token?: string);
    sendTemplate(to: string, template: string, lang?: string, components?: any[]): Promise<any>;
    sendText(to: string, body: string): Promise<any>;
}
