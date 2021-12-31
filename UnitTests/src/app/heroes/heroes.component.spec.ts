import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;        

    beforeEach(() => {
        HEROES = [
            {id:1, name: 'SpiderDude', strength:8},
            {id:2, name:'Wonderful Woman', strength:24},
            {id:3, name: 'SuperDude', strength:55}
        ]
        //mock obj to mock hero service, pass array of methods names
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])
        component = new HeroesComponent(mockHeroService);
   
    })

    //test delete method on the component
    describe('delete', () => {
        it('should delete hero from the heroes list', () => {
            //value true comes out of the observable
            //in heroes component delete method, we subscribe to the result of calling delete hero  method, it returns an observable
            //we dont care about what the observable is
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;
           

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
            expect(component.heroes).toEqual([HEROES[0], HEROES[1]]);
        })
    })
})