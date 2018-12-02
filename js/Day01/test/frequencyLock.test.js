// --- Part Two ---
import frequencyLock from '../frequencyLock';

test('find when the first frequency reoccurs', () => {
  expect(frequencyLock([+1, -1])).toBe(0)
  expect(frequencyLock([+3, +3, +4, -2, -4])).toBe(10)
  expect(frequencyLock([-6, +3, +8, +5, -6])).toBe(5)
  expect(frequencyLock([+7, +7, -2, -7, -4])).toBe(14)
})
