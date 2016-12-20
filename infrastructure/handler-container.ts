import {CommandHandler} from "./command-handler"

class HandlerContainer {
    private kernel = {};

    RegisterHandler<TRequest>(request: { new(): TRequest; }, handler: CommandHandler<TRequest,any>) {
        let requestKey = this.GetTypeName(new request());
        this.kernel[`{requestKey}`] = handler;
    }

    ResolveHandler<TRequest, TResponse>(request: TRequest): 
        CommandHandler<TRequest, TResponse> {
            let requestKey: string = this.GetTypeName(request);
            return <CommandHandler<TRequest, TResponse>>this.kernel[`{requestKey}`];
        }

    private GetTypeName(request: any): string {
        return request.constructor['name'].toLowerCase();
    }
}

let singletonContainer = new HandlerContainer();
export default singletonContainer;

