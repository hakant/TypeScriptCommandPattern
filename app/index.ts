import executor from "../infrastructure/command-executor";
import {TestRequest, TestResponse} from "../handlers/test-handler";

let request = new TestRequest();
request.Id = 1;


let response = executor.Execute<TestRequest, TestResponse>(request);

console.log(response.message);


