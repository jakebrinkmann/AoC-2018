// --- Day 1: Chronal Calibration ---
import frequencyDrift from '../frequencyDrift';

test('ensure time device is calibrated', () => {
  expect(frequencyDrift([+1, +1, +1], 0)).toBe(3)
  expect(frequencyDrift([+1, +1, -2], 0)).toBe(0)
  expect(frequencyDrift([-1, -2, -3], 0)).toBe(-6)
})
