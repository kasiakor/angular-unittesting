import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "../heroes/heroes.component";

describe('HeroesComponent (shallow test)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;

@Component({
    selector: 'app-hero',
    template: '<div></div>',
  })
  class FakeHeroComponent {
    @Input() hero: Hero;
    //@Output() delete = new EventEmitter();
  }

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
            declarations: [HeroesComponent, FakeHeroComponent],
            providers: [
                {
                    provide: HeroService, useValue: mockHeroService
                }
            ]
            //ignores child component
            //schemas: [NO_ERRORS_SCHEMA]
        })
        fixture = TestBed.createComponent(HeroesComponent);
    });
    it('should set heroes correctly from the service', () => {
        //return value is an observable
        mockHeroService.getHeroes.and.returnValue(of(HEROES))
        fixture.componentInstance.heroes = HEROES;    
        //changeDecetction method causes lifecycle events to run like ngOnInit for getHeroes
        fixture.detectChanges();
        expect(fixture.componentInstance.heroes.length).toBe(3);
    })

    it('should create one line for each hero', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES))

        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);

    })
})