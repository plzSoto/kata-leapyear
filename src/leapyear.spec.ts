import { leapYear } from './leapyear';

describe('Leap year', () => {
  it('should return false when year is not divisible by 4', () => {
    expect(leapYear(1997)).toBe(false);
  });

  it('should return true when year is divisible by 4', () => {
    expect(leapYear(1996)).toBe(true);
  });

  it('should return true when year is divisible by 400', () => {
    expect(leapYear(1600)).toBe(true);
  });

  it('should return false when year is divisible by 100 and not divisible by 400', () => {
    expect(leapYear(1800)).toBe(false);
  });
});
