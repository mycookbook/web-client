module.exports = {
    verbose: true,
    roots: ["<rootDir>/src/", "<rootDir>/test/specs/"],
    moduleFileExtensions: ['js', 'vue'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        "^.+\\.vue$": "vue-jest", 
        "^.+\\.js$": "babel-jest"
    },
    snapshotSerializers: [
      "<rootDir>/node_modules/jest-serializer-vue"
    ]
  }
  