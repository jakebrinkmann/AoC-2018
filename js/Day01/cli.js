// Read Frequency Drifts from STDIN, and run the calibration

// Node File System
import fs from 'fs'

// Frequency drift tracking
import { frequencyDrift } from './'

// Read from STDIN as array, split on line-breaks
function readStdIn() {
  let STDIN_FILENO = 0
  let stdinBuffer = fs.readFileSync(STDIN_FILENO)
  let regex = /\r?\n/
  return stdinBuffer.toString().split(regex).filter((x) => x)
}

// Read line-by-line as a list of signed integers
function readFrequencyDrifts () {
  // Convert all input lines to number (e.g. "+1")
  return frequencyDrift(readStdIn().map(Number))
}

// TODO: in js/index.js this module is just imported...so execute now
console.log(readFrequencyDrifts())