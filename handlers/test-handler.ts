import { CommandHandler } from "../infrastructure/command-handler"
import container from "../infrastructure/command-handler-container";

class TestHandler implements CommandHandler<TestRequest, TestResponse> {

    Handle(request: TestRequest): TestResponse {
        var result = new TestResponse();

        result.message = `Hello ${request.name}!`;

        return result;
    }
}

export class TestRequest {
    name: string;
}

export class TestResponse {
    message: string;
}

let testHandler = new TestHandler();
container.RegisterHandler(TestRequest, testHandler);

export default testHandler;