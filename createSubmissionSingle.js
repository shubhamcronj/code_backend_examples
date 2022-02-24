var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://judge0-ce.p.rapidapi.com/submissions',
  params: {base64_encoded: 'false', fields: '*'},
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    'x-rapidapi-key': 'ea89efcafbmsha04f43021537911p14ebe7jsn9b023311902e'
  },
  data: {
    language_id: 71,
    source_code: `print("Hello")`,
    stdin: ''
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

// Sample response
// { token: '9fcfc7aa-fc0a-469f-9c9b-afd93d6816b9' }