var axios = require("axios").default;

var submissionToken = "9fcfc7aa-fc0a-469f-9c9b-afd93d6816b9";

var options = {
  method: 'GET',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/'+submissionToken,
  params: {base64_encoded: 'false', fields: '*'},
  headers: {
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    'x-rapidapi-key': 'ea89efcafbmsha04f43021537911p14ebe7jsn9b023311902e'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

// Sample Response
// {
//     source_code: 'print("Hello")',
//     language_id: 71,
//     stdin: '',
//     expected_output: null,
//     stdout: 'Hello\n',
//     status_id: 3,
//     created_at: '2022-01-19T07:41:13.305Z',
//     finished_at: '2022-01-19T07:41:14.081Z',
//     time: '0.034',
//     memory: 7000,
//     stderr: null,
//     token: '9fcfc7aa-fc0a-469f-9c9b-afd93d6816b9',
//     number_of_runs: 1,
//     cpu_time_limit: '5.0',
//     cpu_extra_time: '1.0',
//     wall_time_limit: '10.0',
//     memory_limit: 128000,
//     stack_limit: 64000,
//     max_processes_and_or_threads: 60,
//     enable_per_process_and_thread_time_limit: false,
//     enable_per_process_and_thread_memory_limit: false,
//     max_file_size: 1024,
//     compile_output: null,
//     exit_code: 0,
//     exit_signal: null,
//     message: null,
//     wall_time: '0.068',
//     compiler_options: null,
//     command_line_arguments: null,
//     redirect_stderr_to_stdout: false,
//     callback_url: null,
//     additional_files: null,
//     enable_network: false,
//     status: { id: 3, description: 'Accepted' },
//     language: { id: 71, name: 'Python (3.8.1)' }
//   }