import container from "./handler-container";

class CommandExecutor {

    Execute<TRequest, TResponse>(request: TRequest): TResponse {
        let handler = container.ResolveHandler<TRequest, TResponse>(request);
        return handler.Handle(request);
    }

}

let executor = new CommandExecutor();
export default executor;