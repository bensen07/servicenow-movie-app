import { MovieFilterPipe } from './movie-filter.pipe';

describe('MovieFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new MovieFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
