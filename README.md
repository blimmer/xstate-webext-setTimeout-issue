# XState WebExt `setTimeout` issue

This is a simple example reproducing issue https://github.com/davidkpiano/xstate/issues/1703. You can see more detailed information about this
problem on the issue page.

## Quick Start

Prerequisite: ensure you have the Firefox browser installed on your machine.

1. Clone this repository.
1. Install dependencies with `npm ci`.
1. Run `npm run launch` to start Firefox with the example extension loaded.
1. Visit [https://xstate.js.org](https://xstate.js.org) in the Firefox window that launched with the previous command.

You'll see an error message in the console (where you ran `npm run launch`) that looks like:

```console
[firefox/index.js][debug] Firefox stderr:
JavaScript error: moz-extension://a8edca36-2b42-ae48-9222-c7045410696c/cs.js, line 5250:
TypeError: 'setTimeout' called on an object that does not implement interface Window.
```

![video screenshot](screenshot.gif)

## Workaround

You can work-around the problem by uncommenting the alternate definition of `lightService` in [src/cs.ts](src/cs.ts).
