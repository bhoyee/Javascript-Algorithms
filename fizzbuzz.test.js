
const app = require('./fizzbuzz');

describe('fizzbuzz', () => {

  const exec = () => {
    const log = jest.fn()
    global.console = { log }

    return log;
  }
    
    it('should show error if input is not a number or empty', () => {
        expect(() => { app.fizzbuzz('a') }).toThrow();
        expect(() => {app.fizzbuzz(null) }).toThrow();
        expect(() => {app.fizzbuzz(undefined) }).toThrow();
        expect(() => {app.fizzbuzz({})}).toThrow();
    });

    it('should show FizzBuzz if input is divisible by 3 and 5', () => {
        const log = exec();
        app.fizzbuzz(15);
        expect(log).toHaveBeenCalledWith('FizzBuzz')
      
    });

    it('should show Fizz, if input is divisible by 3', () => {
       const log = exec();
        app.fizzbuzz(3);
        expect(log).toHaveBeenCalledWith('Fizz')
        
    });

    it('should show Buzz, if input is divisible by 5', () => {
        const log = exec();
        app.fizzbuzz(5);
        expect(log).toHaveBeenCalledWith('Buzz');
    });

    it('should return input , if it is not divisible by 3 & 5', () => {
        const log = exec();
        app.fizzbuzz(1);
        expect(log).toHaveBeenCalledWith(1);
    });
});
