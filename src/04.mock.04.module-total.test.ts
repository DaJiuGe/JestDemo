import fakeModule from './04.mock.04.module'

jest.mock('./04.mock.04.module', () => ({
  sum: jest.fn((a: number, b: number) => 100)
}))

describe('mock module-total', () => {
  test('test sum', () => {
    fakeModule.sum(1, 1)

    expect(fakeModule.sum).toHaveBeenCalled()
    expect(fakeModule.sum).toHaveReturnedWith(100)
  })

  // can not pass the test, because the mock implementation does not contain this function
  // test('test minus', () => {
  //   fakeModule.minus(1, 0)
  //   expect(fakeModule.minus).toHaveBeenCalled()
  // })
})