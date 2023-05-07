import { formatUserAge } from './04.mock.05.api'

jest.mock('./utils/request', () => ({
  getUserInfo: jest.fn((name: string) => ({ name, age: 2023 }))
}))

test('should format user info', () => {
  expect(formatUserAge('peter')).resolves.toBe('peter 2023')
})