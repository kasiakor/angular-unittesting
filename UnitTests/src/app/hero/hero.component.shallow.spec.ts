import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { HeroComponent } from "./hero.component";

describe('HeroComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        //testing comppnent and template running together
        //create special moduel just for testing purposes
        // it is like app.module but we only need the declatation property
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            //Can't bind to 'routerLink' since it isn't a known property of 'a'.
            schemas: [NO_ERRORS_SCHEMA]   
        })
        //component fixture is a wrapper for hero component
        fixture = TestBed.createComponent(HeroComponent);
        //containce out actual component
        //fixture.componentInstance.delete
    })

    it('should have a correct hero', () => {
        //we create a hero ourselves as it is not a nested component with passed value
        //hero comes from the input property
        fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};
        
        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    })
    //test if template is rendered correctly
    it('should render the hero name in the anchor tag', () => {
        fixture.componentInstance.hero = {id: 1, name: 'SuperDude', strength: 3};
        //native element represents the container for the template

        //tell angular to implement the bindings
        //tells component to run change detection and update bindings
        fixture.detectChanges();

        //wrapper over the element, gives access to compoment, directives
        expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('SuperDude');
        //expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
    })
})