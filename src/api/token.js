var CryptoJS = require('crypto-js');
export const getToken = (accessKey, secretKey, putPolicy) => {
  putPolicy = {
    scope: 'cc-admin-bucket',
    deadline:new Date().getTime() + 3600,
    returnBody: `{
      "name": $(fname),
      "size": $(fsize),
      "w": $(imageInfo.width),
      "h": $(imageInfo.height),
      "hash": $(etag),
    }`
  }
  accessKey = '' //你的accessKey
  secretKey = '' //你的secretKey
  let put_policy = JSON.stringify(putPolicy);

  let encoded = urlsafeBase64Encode(put_policy);

  let encoded_signed = hmacSha1(encoded, secretKey);

  let upload_token = accessKey + ":" + base64ToUrlSafe(encoded_signed) + ":" + encoded;
  return upload_token;
}



let urlsafeBase64Encode = function(jsonFlags) {
  let encoded = new Buffer(jsonFlags).toString('base64');
  return base64ToUrlSafe(encoded);
}

let base64ToUrlSafe = function(v) {
  return v.replace(/\//g, '_').replace(/\+/g, '-');
}

let hmacSha1 = function(encoded, secretKey) {
  let hash = CryptoJS.HmacSHA1(encoded, secretKey);
  return hash.toString(CryptoJS.enc.Base64);
}
