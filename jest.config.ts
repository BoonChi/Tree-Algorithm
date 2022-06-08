import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  coveragePathIgnorePatterns: ['./dist/', './node_modules/', './coverage/'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
}
export default config
