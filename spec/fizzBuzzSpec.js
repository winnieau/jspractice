describe('JavaBuzz', function(){

  beforeEach(function() {
     javabuzz = new Javabuzz();
   });

  describe('knows when a number is', function() {

    it('divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('is NOT divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

  });

});
