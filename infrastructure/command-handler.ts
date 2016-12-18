export interface CommandHandler<TRequest, TResponse> {
    Handle(request: TRequest): TResponse;
}