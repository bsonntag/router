import { matchPath } from './match';

describe('matchPath(pathname, route)', () => {
  it('matches exact paths', () => {
    const result = matchPath('/foo/bar', { path: '/foo/bar' });

    expect(result).toEqual({
      params: {},
      path: '/foo/bar',
    });
  });

  it('matches exact paths with parameters', () => {
    const result = matchPath('/foo/1', { path: '/foo/:id' });

    expect(result).toEqual({
      params: { id: '1' },
      path: '/foo/:id',
    });
  });

  it('matches partial paths', () => {
    const result = matchPath('/foo/bar', {
      partial: true,
      path: '/foo',
    });

    expect(result).toEqual({
      params: {},
      path: '/foo',
    });
  });

  it('matches partial paths with parameters', () => {
    const result = matchPath('/foo/1/bar/2', {
      partial: true,
      path: '/foo/:id',
    });

    expect(result).toEqual({
      params: { id: '1' },
      path: '/foo/:id',
    });
  });

  it('returns null when the path does not match', () => {
    const result = matchPath('/bar/1', { path: '/foo/:id' });

    expect(result).toBe(null);
  });

  it('returns null when the path does not match at the start', () => {
    const result = matchPath('/foo/bar', { path: '/bar' });

    expect(result).toBe(null);
  });
});
