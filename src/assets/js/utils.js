/**
 * 创建唯一的字符串
 *
 * @returns {String}
 */
 export const createUniqueString = () => {
   const timestamp = +new Date() + '';
   const randomNum = parseInt((1 + Math.random()) * 65536) + '';
   return (+(randomNum + timestamp)).toString(32);
 }
