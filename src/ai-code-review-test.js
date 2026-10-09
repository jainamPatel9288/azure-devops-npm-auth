// ai-code-review-test.js
// Intentionally flawed code for AI code review testing.
// Do not use in production.

const fs = require('fs');
const crypto = require('crypto');

// CASE 01: Hardcoded credential-like value
const API_KEY = 'FAKE_TEST_SECRET_DO_NOT_USE';

// CASE 02: Unused variable
const debugMode = true;

// CASE 03: Loose equality
function isEqual(a, b) {
  return a == b;
}

// CASE 04: Assignment instead of comparison
function isAdmin(role) {
  return (role = 'admin');
}

// CASE 05: Missing input validation
function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

// CASE 06: Division by zero
function calculatePercentage(completed, total) {
  return (completed / total) * 100;
}

// CASE 07: Incorrect defaulting for zero
function getPageSize(size) {
  return size || 10;
}

// CASE 08: Unsafe property access
function getUserName(user) {
  return user.profile.name;
}

// CASE 09: Unsafe JSON parsing
function parseUser(json) {
  return JSON.parse(json);
}

// CASE 10: Empty catch block
function readConfig(path) {
  try {
    return fs.readFileSync(path, 'utf8');
  } catch (error) {}
}

// CASE 11: Synchronous file I/O blocks the event loop
function loadLargeFile(path) {
  return fs.readFileSync(path, 'utf8');
}

// CASE 12: Path traversal risk if filename is untrusted
function readUserFile(filename) {
  return fs.readFileSync('./uploads/' + filename, 'utf8');
}

// CASE 13: Command injection risk
function executeCommand(command) {
  const { exec } = require('child_process');
  exec('echo ' + command);
}

// CASE 14: Potential regular expression denial of service
function validateInput(input) {
  return /^(a+)+$/.test(input);
}

// CASE 15: Weak randomness for security tokens
function generateToken() {
  return Math.random().toString(36).substring(2);
}

// CASE 16: Sensitive information in logs
function loginUser(username, password) {
  console.log('Login attempt:', username, password);
}

// CASE 17: Prototype pollution risk
function mergeSettings(target, source) {
  for (const key in source) {
    target[key] = source[key];
  }
  return target;
}

// CASE 18: Array mutation
function sortUsers(users) {
  return users.sort((a, b) => a.name.localeCompare(b.name));
}

// CASE 19: Inefficient repeated array searches
function findMatchingUsers(users, ids) {
  return users.filter((user) => ids.includes(user.id));
}

// CASE 20: Missing timer cleanup
function startPolling(callback) {
  setInterval(callback, 1000);
}

// CASE 21: Potential memory leak from event listener
function registerListener(emitter, callback) {
  emitter.on('data', callback);
}

// CASE 22: Promise rejection is ignored
function loadData(fetchData) {
  fetchData().then((data) => {
    console.log(data);
  });
}

// CASE 23: Missing HTTP status validation
async function fetchUsers() {
  const response = await fetch('https://example.com/api/users');
  return response.json();
}

// CASE 24: Unhandled errors
async function processUser(user) {
  return await saveUser(user);
}

async function saveUser(user) {
  if (!user) {
    throw new Error('User is required');
  }
  return user;
}

// CASE 25: Incorrect object comparison
function hasSameSettings(first, second) {
  return first === second;
}

// CASE 26: Incorrect numeric parsing
function parseQuantity(value) {
  return parseInt(value);
}

// CASE 27: Unbounded resource consumption
function createLargeArray(size) {
  return new Array(size).fill('data');
}

// CASE 28: Race condition from shared mutable state
let balance = 100;

async function updateBalance(amount, delay) {
  const currentBalance = balance;
  await new Promise((resolve) => setTimeout(resolve, delay));
  balance = currentBalance + amount;
  return balance;
}

// CASE 29: Weak cryptographic usage
function hashPassword(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}

// CASE 30: Insecure comparison of secrets
function verifySecret(input, expected) {
  return input === expected;
}

// Export functions for testing
module.exports = {
  isEqual,
  isAdmin,
  calculateAge,
  calculatePercentage,
  getPageSize,
  getUserName,
  parseUser,
  readConfig,
  loadLargeFile,
  readUserFile,
  executeCommand,
  validateInput,
  generateToken,
  loginUser,
  mergeSettings,
  sortUsers,
  findMatchingUsers,
  startPolling,
  registerListener,
  loadData,
  fetchUsers,
  processUser,
  hasSameSettings,
  parseQuantity,
  createLargeArray,
  updateBalance,
  hashPassword,
  verifySecret,
};