import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "../heroes/heroes.component";

describe('HeroesComponent (shallow test)', () => {
    let fixture: ComponentFixture<HeroesComponent>
    let mockHeroService;
    let HEROES;

    beforeEach(() => {
        //mock data
        HEROES = [
            {id:1, name: 'SpiderDude', strength:8},
            {id:2, name:'Wonderful Woman', strength:24},
            {id:3, name: 'SuperDude', strength:55}
        ]
        //mock the service
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        //configure testing module
        //testbedding is a method of testing a particular module (function, class, or library) in an isolated fashion
        //configures and initializes environment for unit testing and provides methods for creating components and services in unit tests.
        TestBed.configureTestingModule({
            declarations: [HeroesComponent],
            providers: [
                {
                    provide: HeroService, useValue: mockHeroService
                }
            ],
            //ignores child component
            schemas: [NO_ERRORS_SCHEMA]
        })
        TestBed.createComponent(HeroesComponent);
    })
    it('should set heroes correctly from the service', () => {
        //return value is an observable
        mockHeroService.getHeroes.add.returnValue(of(HEROES));
        //changeDecetction method causes lifecycle events to run like ngOnInit for getHeroes
        fixture.detectChanges();
        expect(fixture.componentInstance.heroes.length).toBe(3);
    })
})