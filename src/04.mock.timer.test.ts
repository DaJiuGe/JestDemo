import { after1000ms } from './04.mock.timer';

test('after1000ms', () => {
  const callback = jest.fn()

  jest.useFakeTimers()
  after1000ms(callback)
  jest.runAllTimers()

  expect(callback).toBeCalled()
})
