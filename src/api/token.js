import CryptoJS from 'crypto-js';
import config from './qiniu-config';


export const base64ToUrlSafe = v => v.replace(/\//g, '_').replace(/\+/g, '-');

export const urlsafeBase64Encode = (jsonFlags) => {
  let encoded = new Buffer(jsonFlags).toString('base64');
  return base64ToUrlSafe(encoded);
};

export const hmacSha1 = (encoded, secretKey) => {
  let hash = CryptoJS.HmacSHA1(encoded, secretKey);
  return hash.toString(CryptoJS.enc.Base64);
};

const getToken = (accessKey, secretKey, putPolicy) => {
  putPolicy = {
    scope: config.bucket_name,
    deadline: new Date().getTime() + 3600
  };
  accessKey = config.accessKey;
  secretKey = config.secretKey;
  let putPolicyStr = JSON.stringify(putPolicy);
  let encoded = urlsafeBase64Encode(putPolicyStr);

  let encodedSigned = hmacSha1(encoded, secretKey);

  let token = `${accessKey}:${base64ToUrlSafe(encodedSigned)}:${encoded}`;
  return token;
};

export default getToken;
