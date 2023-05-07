import { sum } from './04.mock.04.module'

beforeEach(() => {
  jest.clearAllMocks()
})

const mockFunc = jest.fn(sum)

test('mock', () => {
  mockFunc(1, 1)
  expect(mockFunc).toHaveBeenCalledTimes(1)
})

test('mock again', () => {
  mockFunc(1, 2)
  expect(mockFunc).toHaveBeenCalledTimes(1)
})