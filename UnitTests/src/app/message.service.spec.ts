import { MessageService } from "./message.service";

describe('MessageService', () => {
    let messageService: MessageService;

    beforeEach(() => {
        messageService = new MessageService();
    })

    it('should have no messages to start', () => {
        //messageService = new MessageService();
        expect(messageService.messages.length).toBe(0);
    })

    it('should add a message to array', () => {
        //messageService = new MessageService();
        messageService.add('message1');

        expect(messageService.messages.length).toBe(1);
    })

    it('should have no messages after clear', () => {
        //messageService = new MessageService();
        messageService.add('message1');

        messageService.clear();

        expect(messageService.messages.length).toBe(0);
    })



})