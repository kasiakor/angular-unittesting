import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {

    it('should display week if strength is 1', () => {
        let pipe = new StrengthPipe();

        expect(pipe.transform(1)).toEqual('1 (weak)');
    })
    it('should display unbelievable if strength is 99', () => {
        let pipe = new StrengthPipe();
        expect(pipe.transform(99)).toEqual('99 (unbelievable)');
    })
})