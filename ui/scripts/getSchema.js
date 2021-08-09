const http = require('http')
const fs = require('fs');
var path = require('path');
var appDir = path.dirname(require.main.filename);

http.get('http://localhost:4000/schema', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  // Any 2xx status code signals a successful response but
  // here we're only checking for 200.
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } else if (!/^text\/plain/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
                      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // Consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    console.log(`${appDir.replace("\\scripts", '')}/schema.graphql`)
    try {
      fs.writeFileSync(`${appDir.replace('\\scripts', '')}/schema.graphql`, rawData)
    } catch (e) {
      console.error(e.message);
    }
  });
})