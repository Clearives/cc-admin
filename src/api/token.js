import CryptoJS from 'crypto-js'
import config from './qiniu-config'
export const getToken = (accessKey, secretKey, putPolicy) => {
  putPolicy = {
    scope: config.bucket_name,
    deadline:new Date().getTime() + 3600
  }
  accessKey = config.accessKey
  secretKey = config.secretKey
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
