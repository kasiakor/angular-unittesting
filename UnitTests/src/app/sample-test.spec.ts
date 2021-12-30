describe('my first test', () => {
    //system under test
    //The variable under test is defined at the top-level scope -- the describe block
    let sut;

    //global function is called once before each spec in the describe
    //variable initialization code is moved into a beforeEach function
    //share variables:  spec's beforeEach/it/afterEach has the this as the same empty object that is set back to empty for the next spec's beforeEach/it/afterEach.
    //reset the state befoir the next spec
    beforeEach(() => {
        sut = {}
    })


    //Gl;obal Jasmine function, The string is the title of the spec and the function is the spec, or test. A spec contains one or more expectations that test the state of the code. An expectation in Jasmine is an assertion that is either true or false.
    it('should be true, if true', () => {

        //arrange - inputs and targets
        //set the state
        sut.a = false;

        //act - on the target behavior, calling a function or method, calling a REST API
        //change the state
        sut.a = true;

        //assert - expected outcomes
        expect(sut.a).toBe(true);
    })
})