/* global describe, it, expect */
import { transform, compose } from '../src/transform'

describe('transform', () => {
  const m1 = {
    a: 1,
    c: 0,
    e: 40,
    b: 0,
    d: 1,
    f: 40
  }
  const m2 = {
    a: 2,
    c: 0,
    e: 0,
    b: 0,
    d: 2,
    f: 0
  }

  const m12 = {
    a: 2,
    c: 0,
    e: 40,
    b: 0,
    d: 2,
    f: 40
  }
  const m123 = {
    a: 2,
    c: 0,
    e: -40,
    b: 0,
    d: 2,
    f: -40
  }

  it('should throw exception', () => {
    expect(() => {
      transform()
    }).toThrow()
    expect(() => {
      transform([])
    }).toThrow()
  })

  it('should return m1', () => {
    expect(transform(m1)).toEqual(m1)
    expect(transform([m1])).toEqual(m1)
  })

  it('should return m1 * m2 = m12 ', () => {
    expect(transform(m1, m2)).toEqual(m12)
    expect(transform([m1, m2])).toEqual(m12)
  })

  it('should return m1 * m2 * m3 = m123', () => {
    const m1 = {
      a: 1,
      c: 0,
      e: 40,
      b: 0,
      d: 1,
      f: 40
    }
    const m2 = {
      a: 2,
      c: 0,
      e: 0,
      b: 0,
      d: 2,
      f: 0
    }
    const m3 = {
      a: 1,
      c: 0,
      e: -40,
      b: 0,
      d: 1,
      f: -40
    }
    expect(transform(m1, m2, m3)).toEqual(m123)
    expect(transform([m1, m2, m3])).toEqual(m123)
  })
})

describe('compose', () => {
  const m1 = {
    a: 1,
    c: 0,
    e: 40,
    b: 0,
    d: 1,
    f: 40
  }
  const m2 = {
    a: 2,
    c: 0,
    e: 0,
    b: 0,
    d: 2,
    f: 0
  }

  const m12 = {
    a: 2,
    c: 0,
    e: 40,
    b: 0,
    d: 2,
    f: 40
  }

  it('should return m1 * m2 = m12 ', () => {
    expect(compose(m1, m2)).toEqual(m12)
    expect(compose([m1, m2])).toEqual(m12)
  })
})
