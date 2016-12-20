import executor from "../infrastructure/command-executor";
import {TestRequest, TestResponse} from "../handlers/test-handler";

let request = new TestRequest();
request.name = "Hakan";


let response = executor.Execute<TestRequest, TestResponse>(request);

console.log(response.message);


