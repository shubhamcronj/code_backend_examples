var request = require('request');


// https://c6fbe968.compilers.sphere-engine.com/api/v4

// define access parameters
var accessToken = '788f67a7246b57f09645ade6ed49f792';
var endpoint = 'c6fbe968.compilers.sphere-engine.com';

// send request
// request({
//     url: 'https://' + endpoint + '/api/v4/compilers?access_token=' + accessToken,
//     method: 'GET'
// }, function (error, response, body) {
    
//     if (error) {
//         console.log('Connection problem');
//     }
    
//     // process response
//     if (response) {
//         if (response.statusCode === 200) {
//             console.log(JSON.parse(response.body)); // list of compilers in JSON
//         } else {
//             if (response.statusCode === 401) {
//                 console.log('Invalid access token');
//             }
//         }
//     }
// });

// // define request parameters
// var submissionData = {
//     compilerId: 116,
//     source: `print("Hello")`
// };

// // send request
// request({
//     url: 'https://' + endpoint + '/api/v4/submissions?access_token=' + accessToken,
//     method: 'POST',
//     form: submissionData
// }, function (error, response, body) {
    
//     if (error) {
//         console.log('Connection problem');
//     }
    
//     // process response
//     if (response) {
//         if (response.statusCode === 201) {
//             console.log(JSON.parse(response.body)); // submission data in JSON
//         } else {
//             if (response.statusCode === 401) {
//                 console.log('Invalid access token');
//             } else if (response.statusCode === 402) {
//                 console.log('Unable to create submission');
//             } else if (response.statusCode === 400) {
//                 var body = JSON.parse(response.body);
//                 console.log('Error code: ' + body.error_code + ', details available in the message: ' + body.message)
//             }
//         }
//     }
// });

// define request parameters
var submissionsIds = [304835294];

// send request
request({
	url: 'https://' + endpoint + '/api/v4/submissions?ids=' + submissionsIds.join() + '&access_token=' + accessToken,
    method: 'GET'
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    // process response
    if (response) {
        if (response.statusCode === 200) {
            // console.log(JSON.parse(response.body)); // list of submissions in JSON
            console.log(response.body); // list of submissions in JSON
        } else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            } else if (response.statusCode === 400) {
                var body = JSON.parse(response.body);
                console.log('Error code: ' + body.error_code + ', details available in the message: ' + body.message)
            }
        }
    }
});