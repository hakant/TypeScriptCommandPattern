import executor from "../infrastructure/command-executor";
import {TestRequest, TestResponse} from "../handlers/async-test-handler";


async function main() {
    let request = new TestRequest();
    request.name = "Hakan";

    let response = await executor.ExecuteAsync<TestRequest, TestResponse>(request);
    console.log(response.message);
}

main();