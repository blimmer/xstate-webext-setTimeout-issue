import { createMachine, interpret } from "xstate";

// This machine is pulled from the examples page:
// https://xstate.js.org/docs/guides/delays.html?#delayed-transitions
const toggleMachine = createMachine({
  id: "lightDelay",
  initial: "green",
  states: {
    green: {
      after: {
        // after 1 second, transition to yellow
        1000: "yellow",
      },
    },
    yellow: {
      after: {
        // after 0.5 seconds, transition to red
        500: "red",
      },
    },
    red: {
      after: {
        // after 2 seconds, transition to green
        2000: "green",
      },
    },
  },
});

// This default usage shows the exceptions being thrown in the console, e.g.,
// [firefox/index.js][debug] Firefox stderr: JavaScript error: moz-extension://a8edca36-2b42-ae48-9222-c7045410696c/cs.js, line 5250: TypeError: 'setTimeout' called on an object that does not implement interface Window.
const toggleService = interpret(toggleMachine)
  .onTransition((state) => console.log(state.value))
  .start();

// Whereas this behavior works as expected.
// const toggleService = interpret(toggleMachine, {
//   clock: {
//     setTimeout: (f, ms) => {
//       setTimeout(f, ms);
//     },
//     clearTimeout: (id) => {
//       clearTimeout(id);
//     },
//   },
// })
//   .onTransition((state) => console.log(state.value))
//   .start();
