/* global describe, it, expect */
import {
  decompose,
  compose,
  identity,
  translate,
  rotate,
  scale
} from '../src'

describe('decompose', () => {
  it('should not return transformations on identity decomposition', () => {
    const decomposition = decompose(identity())
    expect(decomposition).toMatchSnapshot()
  })

  it('should decompose positive translation', () => {
    const composition = compose(
      identity(),
      translate(20, 30)
    )
    const decomposition = decompose(composition)

    expect(decomposition).toMatchSnapshot()
  })

  it('should decompose negative translation', () => {
    const composition = compose(
      identity(),
      translate(-20, -30)
    )
    const decomposition = decompose(composition)

    expect(decomposition).toMatchSnapshot()
  })

  it('should decompose positive rotation', () => {
    const deg = 40
    const composition = compose(
      identity(),
      rotate(Math.PI * deg / 180)
    )
    const decomposition = decompose(composition)

    expect(decomposition).toMatchSnapshot()
  })

  it('should decompose negative rotation', () => {
    const deg = -40
    const composition = compose(
      identity(),
      rotate(Math.PI * deg / 180)
    )
    const decomposition = decompose(composition)

    expect(decomposition).toMatchSnapshot()
  })

  it('should decompose positive rotation (3th quadrant)', () => {
    const deg = 260
    const composition = compose(
      identity(),
      rotate(Math.PI * deg / 180)
    )
    const decomposition = decompose(composition)

    expect(decomposition).toMatchSnapshot()
    expect(decomposition.rotate).toBeLessThan(0)
  })

  it('should decompose negative rotation (4th quadrant)', () => {
    const deg = 280
    const composition = compose(
      identity(),
      rotate(Math.PI * deg / 180)
    )
    const decomposition = decompose(composition)

    expect(decomposition).toMatchSnapshot()
    expect(decomposition.rotate).toBeLessThan(0)
  })

  it('should decompose proportional scaling', () => {
    const composition = compose(
      identity(),
      scale(1.5)
    )
    const decomposition = decompose(composition)

    expect(decomposition).toMatchSnapshot()
  })

  it('should decompose distortion scaling', () => {
    const composition = compose(
      identity(),
      scale(1.5, 1)
    )
    const decomposition = decompose(composition)

    expect(decomposition).toMatchSnapshot()
  })
})
