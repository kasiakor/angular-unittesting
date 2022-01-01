import { MessageService } from "./message.service";
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroService } from "./hero.service";
import { HttpClient } from "@angular/common/http";

describe('HeroService', () => {
    let mockMessageService: MessageService;
    let httpTestingController: HttpTestingController;
    let service: HeroService;
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
        //mocking and flushing of requests
        httpTestingController = TestBed.inject(HttpTestingController);

        service = TestBed.inject(HeroService);
    })

    describe('getHero', () => {
        it('should call get with correct url', () => {
            //call getHero
            //w eneed to subscribe
            service.getHero(4).subscribe(
                //hero => {
                //expect(hero.id).toBe(4);
            //}
            );
            //service.getHero(3).subscribe();

            //test if correct url was used
            const req = httpTestingController.expectOne('api/heroes/4');

            //flush, we decide wht will be sent back from the http get request to a specific url
            req.flush({ id: 4, name: 'SuperGood', strength: 100});

            //expect(req.request.method).toBe('GET');

            //will make only one call
            httpTestingController.verify();
        })

    })
})