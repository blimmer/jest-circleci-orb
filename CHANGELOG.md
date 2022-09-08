# Changelog

## v1.1.0

- Added the `test-result-path` parameter to the `jest/test` job. This value is passed to CircleCI's
  [`store_test_results` command](https://circleci.com/docs/configuration-reference#storetestresults), which displays
  test results inside the UI. Check out their [documentation](https://circleci.com/docs/collect-test-data#jest) for
  details on configuring your test suite.

## v1.0.0

Version 1.0.0 represents the first stable major release of this orb.

Breaking Changes from pre-1.0.0 releases:

- This orb now uses the upstream [circleci/node orb](https://circleci.com/developer/orbs/orb/circleci/node) to cache
  dependencies from the specified `package-manager` between job runs. This should speed up your dependency installation
  time! You can opt-out of this behavior by setting the `package-manager-cache` parameter to `false`.
- There is now first-class support for using `yarn` instead of `npm`. To use yarn, set the `package-manager` parameter
  to `yarn` if you're using yarn v1 (a.k.a yarn classic) or `yarn-berry` for yarn v2 or newer.
  - If you're using `yarn` or `yarn-berry` as your package manager, we'll use `yarn jest` instead of `npx --no-install jest`
    by default. You can override this command via the `jest-command-override` parameter.
  - If you're using `yarn` as your package manager, we'll use `yarn install --frozen-lockfile` by default to install
    dependencies. You can override this command via the `package-manager-install-command-override` parameter.
  - If you're using `yarn-berry` as your package manager, we'll use `yarn install --immutable` by default to install
    dependencies. You can override this command via the `package-manager-install-command-override` parameter.
- The `jest-command` parameter was renamed to `jest-command-override`.
- The `npm-install-command` parameter was renamed to `package-manager-install-command-override`.
