import fakeModule, { sum } from './04.mock.04.module'

jest.mock('./04.mock.04.module', () => {
  const originalModule = jest.requireActual('./04.mock.04.module')

  return {
    __esModule: true,
    ...originalModule,
    sum: jest.fn((a: number, b: number) => 100)
  }
})

describe('mock module-part', () => {
  test('test sum', () => {
    sum(1, 1)

    expect(sum).toHaveBeenCalled()
    expect(sum).toHaveReturnedWith(100)
  })

  test('test minus', () => {
    jest.spyOn(fakeModule, 'minus')

    fakeModule.minus(1, 0)

    expect(fakeModule.minus).toHaveBeenCalled()
    expect(fakeModule.minus).toHaveReturnedWith(1)
  })
})