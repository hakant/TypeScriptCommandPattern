import { AsyncCommandHandler } from "../infrastructure/command-handler"
import container from "../infrastructure/command-handler-container";

class AsyncTestHandler implements AsyncCommandHandler<TestRequest, TestResponse> {

    async HandleAsync(request: TestRequest): Promise<TestResponse> {
        var result = new TestResponse();

        await this.delay(5000);
        result.message = `Hello ${request.name}!`;

        return result;
    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export class TestRequest {
    name: string;
}

export class TestResponse {
    message: string;
}

let testHandler = new AsyncTestHandler();
container.RegisterAsyncHandler(TestRequest, testHandler);

export default testHandler;