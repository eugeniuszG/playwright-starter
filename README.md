# 🎭 Playwright

Playwright is a framework for Web Testing and Automation. It allows testing [Chromium](https://www.chromium.org/Home), [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [WebKit](https://webkit.org/) with a single API. Playwright is built to enable cross-browser web automation that is **ever-green**, **capable**, **reliable** and **fast**.

## Installation

Playwright has its own test runner for end-to-end tests, we call it Playwright Test.

### Using init command

The easiest way to get started with Playwright Test is to run the init command.

```Shell
# Run from your project's root directory
npm init playwright@latest
# Or create a new project
npm init playwright@latest new-project
```

This will create a configuration file, optionally add examples, a GitHub Action workflow and a first test example.spec.ts. You can now jump directly to writing assertions section.

### Manually

Add dependency and install browsers.

```Shell
npm i -D @playwright/test
# install supported browsers
npx playwright install
```

You can optionally install only selected browsers, see [install browsers](https://playwright.dev/docs/cli#install-browsers) for more details. Or you can install no browsers at all and use existing [browser channels](https://playwright.dev/docs/browsers).

* [Getting started](https://playwright.dev/docs/intro)
* [Installation configuration](https://playwright.dev/docs/installation)
* [API reference](https://playwright.dev/docs/api/class-playwright)

## Commands
```Shell
# Run all tests in ./src/tests
npm run tests
# Run singe test demo-pom-todo-app.spec
npm run tests-pom
# Show report
npm run report
# Run codegen 
npm run report
```

## Capabilities

### Resilient • No flaky tests

**Auto-wait**. Playwright waits for elements to be actionable prior to performing actions. It also has a rich set of introspection events. The combination of the two eliminates the need for artificial timeouts - a primary cause of flaky tests.

**Web-first assertions**. Playwright assertions are created specifically for the dynamic web. Checks are automatically retried until the necessary conditions are met.

**Tracing**. Configure test retry strategy, capture execution trace, videos and screenshots to eliminate flakes.

### No trade-offs • No limits

Browsers run web content belonging to different origins in different processes. Playwright is aligned with the architecture of the modern browsers and runs tests out-of-process. This makes Playwright free of the typical in-process test runner limitations.

**Multiple everything**. Test scenarios that span multiple tabs, multiple origins and multiple users. Create scenarios with different contexts for different users and run them against your server, all in one test.

**Trusted events**. Hover elements, interact with dynamic controls and produce trusted events. Playwright uses real browser input pipeline indistinguishable from the real user.

Test frames, pierce Shadow DOM. Playwright selectors pierce shadow DOM and allow entering frames seamlessly.

### Full isolation • Fast execution

**Browser contexts**. Playwright creates a browser context for each test. Browser context is equivalent to a brand new browser profile. This delivers full test isolation with zero overhead. Creating a new browser context only takes a handful of milliseconds.

**Log in once**. Save the authentication state of the context and reuse it in all the tests. This bypasses repetitive log-in operations in each test, yet delivers full isolation of independent tests.

### Powerful Tooling

**[Codegen](https://playwright.dev/docs/codegen)**. Generate tests by recording your actions. Save them into any language.

**[Playwright inspector](https://playwright.dev/docs/inspector)**. Inspect page, generate selectors, step through the test execution, see click points and explore execution logs.

**[Trace Viewer](https://playwright.dev/docs/trace-viewer)**. Capture all the information to investigate the test failure. Playwright trace contains test execution screencast, live DOM snapshots, action explorer, test source and many more.

Looking for Playwright for [TypeScript](https://playwright.dev/docs/intro), [JavaScript](https://playwright.dev/docs/intro), [Python](https://playwright.dev/python/docs/intro), [.NET](https://playwright.dev/dotnet/docs/intro), or [Java](https://playwright.dev/java/docs/intro)?


## Resources

* [Documentation](https://playwright.dev/docs/intro)
* [API reference](https://playwright.dev/docs/api/class-playwright/)
* [Changelog](https://github.com/microsoft/playwright/releases)
