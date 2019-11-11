import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('should display weak if stength is 5', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5 (weak)');
  });

  it('should display strong if stength is 10', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(10)).toEqual('10 (strong)');
  });

  it('should display unbelievable if greather than 20', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(20)).toEqual('20 (unbelievable)');
  });

});
