import * as constants from '../multi'; 

describe('constants', () => {
  it('should be null', () => {
    expect(constants.n).toBeNull();
  });

  it('should be defined', () => {
    expect(constants.n).toBeDefined();
  });

  it('should be equal to 0', () => {
    expect(constants.number).toBe(0);
  });

  it('should be false', () => {
    expect(constants.notTrue).toBeFalsy();
  });

  it('should be true', () => {
    expect(constants.notFalse).toBeTruthy();
  });
});
