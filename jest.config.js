module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.{ts|tsx}?$': ['ts-jest', {
      babel: true,
      tsConfig: 'tsconfig.json',
    }],
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
};