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

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('is NOT divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });

    it('is NOT divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });

  });

});
