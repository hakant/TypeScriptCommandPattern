import container from "./command-handler-container";

class CommandExecutor {

    Execute<TRequest, TResponse>(request: TRequest): TResponse {
        let handler = container.ResolveHandler<TRequest, TResponse>(request);
        return handler.Handle(request);
    }

    async ExecuteAsync<TRequest, TResponse>(request: TRequest): Promise<TResponse> {
        let handler = container.ResolveAsyncHandler<TRequest, TResponse>(request);
        return await handler.HandleAsync(request);
    }

}

let executor = new CommandExecutor();
export default executor;