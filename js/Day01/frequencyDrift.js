// --- Day 1: Chronal Calibration ---

// Calculate frequency drift
function frequencyDrift(frequencies, f0=0) {
  // Addition is a linear operation, the order doesn't matter
  // so we can use a map/reduce
  return frequencies.reduce((total, f) => total + f, f0)
}

// Export module for later imports (tests)
export default frequencyDrift