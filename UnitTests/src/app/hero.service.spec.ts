import { MessageService } from "./message.service";
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroService } from "./hero.service";
import { HttpClient } from "@angular/common/http";

describe('HeroService', () => {
    let mockMessageService: MessageService;
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
         //mock the service
        mockMessageService = jasmine.createSpyObj(['add', 'clear']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],   
            providers: [
                HeroService,
                {
                    provide: MessageService, useValue: mockMessageService
                }
            ]        
        })
        //gives us a handle to a service
        httpTestingController = TestBed.inject(HttpTestingController);
    })
})