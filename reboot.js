
/* Fill in the access code and your router IP below */
var routerAccessCode = "";
var routerIP = "192.168.1.254";
/****************************************************/

var querystring = require('querystring');
var request = require('request');

function RebootRouter() {

    var form = {
        "ADM_PASSWORD" : routerAccessCode,
        "NEXTPAGE" : 'A_0_0' 
    };

    var formData = querystring.stringify(form);
    var contentLength = formData.length;
    var cookieJar = request.jar();  
    request({

        headers: {
        'Content-Length': contentLength,
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        uri: 'http://' + routerIP + '/xslt?PAGE=login_post',
        jar: cookieJar,
        body: formData,
        method: 'POST'
    }, function (err, res, body) { 
        
        var nonce=body.substr(body.indexOf("NONCE")).toLowerCase();
        nonce=nonce.substr(nonce.indexOf("value=")+7);
        nonce=nonce.substr(0,nonce.indexOf("\"")); 

        doRestart(cookieJar,nonce);
        
    });
}
  
function doRestart(cookieJar, nonce){
 
    var form = {
        "RESET_BB" : 'Restart', 
        "THISPAGE" : 'A_0_0',
        "NEXTPAGE" : 'A_0_0_POST',
        "NONCE": nonce, 
        "CMSKICK": ""
    };
    var formData = querystring.stringify(form);
    var contentLength = formData.length;

    request({
        headers: {
        'Content-Length': contentLength,
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        uri: 'http://' + routerIP + '/xslt?PAGE=A_0_0_POST&NEXTPAGE=A_0_0_POST',
        jar: cookieJar,
        body: formData,
        method: 'POST'
    }, function (err, res, body) { 

        if (err) {
            console.log('Failed Reboot.');            
            return;
        }

        console.log('Router Rebooting.');  

    });

}
 
RebootRouter();
