# TypeScriptCommandPattern
Toying with the idea of a [MediatR](https://github.com/jbogard/MediatR) style command pattern in TypeScript.

## Usage

See the [index.ts](https://github.com/hakant/TypeScriptCommandPattern/blob/master/app/index.ts) file to see how a command 
is invoked with an expected TResponse.

## Handlers

As seen in the example handler [test-handler.ts](https://github.com/hakant/TypeScriptCommandPattern/blob/master/handlers/test-handler.ts), each handler is responsible with initializing and registering itself in a singleton manner.

## A very simple Container

The only thing the [container](https://github.com/hakant/TypeScriptCommandPattern/blob/master/infrastructure/command-handler-container.ts) knows is to map an incoming request type name to a pre-registered handler.
