# jest-circleci-orb

This orb makes running [jest](https://jestjs.io/) tests fast and easy. The primary
functionality this orb provides is saving / restoring the jest cache, which makes
subsequent test runs faster.

## Benefits of Storing the Jest Cache

Jest stores useful information in the cache, which improves the performance of your
test suite.

- **Reduced startup time** Jest stores information about the file structure and mocks you create in your
  tests. By restoring the previous `jest-haste-map` data, it reduces the amount of work jest has to do at startup.

- **Even distribution of test suites across workers** If you're running your test suites in parallel (enabled by default),
  jest will cache information about how long each of your test suites takes to run. It then uses this information
  to evenly distribute your test suites across the jest workers, so they all complete their work around the same time.
  This prevents one slow test suite from holding up the entire jest run.

- **Fast fail with `bail` config.** Jest also stores whether each individual test succeeded or failed on the previous run, and
  runs failed tests as soon as possible on the next run. This is very handy when used in conjunction with the
  [`bail`](https://jestjs.io/docs/en/configuration.html#bail-number--boolean) configuration, so you get super-fast feedback
  on previously failed tests.

- **Faster Typescript transpiling.** If you're using TypeScript with jest, your files are likely transpiled to Javascript
  before each run. By restoring the cache, jest will only transpile changed files.

If you want to learn more about the jest cache, check out [Jest Architecture video](https://youtu.be/3YDiloj8_d0) on YouTube.

<div style='display: flex; align-items: center; justify-content: center;'>
  <a href='https://youtu.be/3YDiloj8_d0'>
    <img src=https://img.youtube.com/vi/3YDiloj8_d0/0.jpg>
  </a>
</div>

## Usage

See the [orb registry listing](https://circleci.com/developer/orbs/orb/blimmer/jest) for usage details.

## Configuration

To save / restore the jest cache between runs, you must set jest's
[`cacheDirectory` configuration property](https://jestjs.io/docs/en/configuration#cachedirectory-string) to a predictable
location.

In your jest configuration file (e.g. `jest.config.js`, `jest.config.ts` or in your `package.json`), set
`cacheDirectory` to `.jest-cache`. For example,

```js
// jest.config.js
module.exports = {
  // other configuration properties
  cacheDirectory: '.jest-cache'
}
```

You should also `gitignore` this directory. Add `.jest-cache` to your `.gitignore` file.

If you don't have a jest configuration file, refer to the [documentation](https://jestjs.io/docs/en/configuration)
to learn how to create one.

## Examples

```yml
version: 2.1

orbs:
  # Replace x.y.z. with a real version number. All versions are listed here:
  # https://circleci.com/developer/orbs/orb/blimmer/jest
  jest: blimmer/jest@x.y.z

  workflows:
    test:
      jobs:
        - jest/test
```

Refer to the [orb registry listing](https://circleci.com/developer/orbs/orb/blimmer/jest) for more examples.

## Breaking Changes

Breaking changes, such as those between 0.x and 1.x, are described in [CHANGELOG.md](/CHANGELOG.md).

## Contributing

I welcome [issues](https://github.com/blimmer/jest-circleci-orb/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) and
[pull requests](https://github.com/blimmer/jest-circleci-orb/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc) against this
repository!

## About the Author

You can learn more about the author [here](https://benlimmer.com/freelance/).
