import {CommandHandler} from "./command-handler"

class HandlerContainer {
    private kernel = {};

    RegisterHandler(requestKey: string, handler: CommandHandler<any,any>) {
        requestKey = requestKey.toLowerCase();
        this.kernel[`{requestKey}`] = handler;
    }

    ResolveHandler<TRequest, TResponse>(request: TRequest): 
        CommandHandler<TRequest, TResponse> {
            let requestKey: string = request.constructor['name'].toLowerCase();
            return <CommandHandler<TRequest, TResponse>>this.kernel[`{requestKey}`];
        }
}

let singletonContainer = new HandlerContainer();
export default singletonContainer;

