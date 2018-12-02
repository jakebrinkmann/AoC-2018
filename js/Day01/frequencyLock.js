// --- Part Two ---

// Returns if the current frequency has been repeated
function frequencyLock(frequencies, f0=0) {
  // Assuming the input is small, we can keep all frequencies in
  // memory, and continously check if we've repeated a value
  // WARNING: THERE IS NO GUARANTEE THIS LOOP WILL CONVERGE!

  let frequency = f0
  let previousFrequencies = [ f0 ]

  let i = 0
  while (true) {
    // Re-cycle the input stream
    if (i >= frequencies.length) i = 0

    // Update our current frequency
    frequency += frequencies[i]

    // Compare to frequencies already visited
    if (previousFrequencies.includes(frequency)) return frequency

    // Frequency not found, continue tuning...
    previousFrequencies.push(frequency)
    i++
  }
}

// Export module for later imports (tests)
export default frequencyLock