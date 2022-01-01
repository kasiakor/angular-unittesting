import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "../heroes/heroes.component";
import { HeroComponent } from '../hero/hero.component';

describe('HeroesComponent (deep integration test)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
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
            declarations: [HeroesComponent, HeroComponent],
            providers: [
                {
                    provide: HeroService, useValue: mockHeroService
                }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
        fixture = TestBed.createComponent(HeroesComponent);
    });

    it('should render each hero as a HeroComponent', () => {
        //tell hero service what it should return
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        //trigger lifecycle events for parent/components, call ngOnInit
        fixture.detectChanges();

        //we ask parent to go to the template and find all the specified directives

        //heroComponentDEs are debug elements
        const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));

        expect(heroComponentDEs.length).toEqual(3);

        //heroComponentDEs is an array of hero components
        //hero is a property on hero component

        //loop through child components

        for( let i = 0; i < heroComponentDEs.length; i++ ) {
            expect(heroComponentDEs[i].componentInstance.hero).toEqual(HEROES[i]);
        }
    })
})