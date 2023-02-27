import main from './main';

describe('main', () => {
  it('should do something', async () => {
    const actual = await main();
    debugger;
    expect(actual).toEqual('world');
  });
});
