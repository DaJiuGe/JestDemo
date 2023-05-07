test('toHaveReturn&toHaveBeenCalled', () => {
  const mockFunc = jest.fn()

  mockFunc()
  mockFunc()

  expect(mockFunc).toHaveReturned()
  expect(mockFunc).toHaveBeenCalled()

  expect(mockFunc).toHaveReturnedTimes(2)
  expect(mockFunc).toHaveBeenCalledTimes(2)
})

test('toHaveReturnWith&toHaveBeenCalledWith', () => {
  const mockFunc = jest.fn(str => `jest_${str}`)

  mockFunc('foo')

  expect(mockFunc).toHaveReturnedWith('jest_foo')
  expect(mockFunc).toHaveBeenCalledWith('foo')
})
