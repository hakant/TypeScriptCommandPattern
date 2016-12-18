import { CommandHandler } from "../infrastructure/command-handler"
import container from "../infrastructure/handler-container";

class TestHandler implements CommandHandler<TestRequest, TestResponse> {

    Handle(request: TestRequest): TestResponse {
        var result = new TestResponse();

        if (request.Id > 0) {
            result.message = "Hello positive number";
        } else {
            result.message = "Hello zero or negative number";
        }

        return result;
    }
}


export class TestRequest {
    Id: number;
}

export class TestResponse {
    message: string;
}

let testHandler = new TestHandler();
container.RegisterHandler(new TestRequest().constructor['name'], testHandler);

export default testHandler;