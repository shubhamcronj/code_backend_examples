var axios = require("axios").default;

const submissionTokens = '3174510b-e7e2-4595-8c1c-2505858db734,bbec70a1-e2ff-49a2-93a9-b9f1565824a1';

var options = {
  method: 'GET',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
  params: {
    tokens: submissionTokens,
    base64_encoded: 'false',
    fields: '*'
  },
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

// SAMPLE RESPONSE
// {
//     submissions: [
//       {
//         source_code: 'print("hello from python")',
//         language_id: 71,
//         stdin: null,
//         expected_output: null,
//         stdout: 'hello from python\n',
//         status_id: 3,
//         created_at: '2022-01-19T07:51:50.041Z',
//         finished_at: '2022-01-19T07:51:51.155Z',
//         time: '0.009',
//         memory: 3160,
//         stderr: null,
//         token: '3174510b-e7e2-4595-8c1c-2505858db734',
//         number_of_runs: 1,
//         cpu_time_limit: '5.0',
//         cpu_extra_time: '1.0',
//         wall_time_limit: '10.0',
//         memory_limit: 128000,
//         stack_limit: 64000,
//         max_processes_and_or_threads: 60,
//         enable_per_process_and_thread_time_limit: false,
//         enable_per_process_and_thread_memory_limit: false,
//         max_file_size: 1024,
//         compile_output: null,
//         exit_code: 0,
//         exit_signal: null,
//         message: null,
//         wall_time: '0.01',
//         compiler_options: null,
//         command_line_arguments: null,
//         redirect_stderr_to_stdout: false,
//         callback_url: null,
//         additional_files: null,
//         enable_network: false,
//         status: [Object],
//         language: [Object]
//       },
//       {
//         source_code: 'console.log("hello from node")',
//         language_id: 63,
//         stdin: null,
//         expected_output: null,
//         stdout: 'hello from node\n',
//         status_id: 3,
//         created_at: '2022-01-19T07:51:50.056Z',
//         finished_at: '2022-01-19T07:51:50.387Z',
//         time: '0.019',
//         memory: 7220,
//         stderr: null,
//         token: 'bbec70a1-e2ff-49a2-93a9-b9f1565824a1',
//         number_of_runs: 1,
//         cpu_time_limit: '5.0',
//         cpu_extra_time: '1.0',
//         wall_time_limit: '10.0',
//         memory_limit: 128000,
//         stack_limit: 64000,
//         max_processes_and_or_threads: 60,
//         enable_per_process_and_thread_time_limit: false,
//         enable_per_process_and_thread_memory_limit: false,
//         max_file_size: 1024,
//         compile_output: null,
//         exit_code: 0,
//         exit_signal: null,
//         message: null,
//         wall_time: '0.046',
//         compiler_options: null,
//         command_line_arguments: null,
//         redirect_stderr_to_stdout: false,
//         callback_url: null,
//         additional_files: null,
//         enable_network: false,
//         status: [Object],
//         language: [Object]
//       }
//     ]
//   }