var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
  params: {base64_encoded: 'false'},
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    'x-rapidapi-key': 'ea89efcafbmsha04f43021537911p14ebe7jsn9b023311902e'
  },
  data: {
    submissions: [
      {language_id: 71, source_code: `print("hello from python")`},
      {language_id: 63, source_code: `console.log("hello from node")`}
    ]
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

// Sample Response
// [
//     { token: '3174510b-e7e2-4595-8c1c-2505858db734' },
//     { token: 'bbec70a1-e2ff-49a2-93a9-b9f1565824a1' }
// ]