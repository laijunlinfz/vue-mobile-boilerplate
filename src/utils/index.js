import crypto from'crypto';

// 校验手机号码
export const isPhone = phone => {
  return /^1(3|4|5|6|7|8|9)\d{9}$/.test(phone);
};

export const md5 = str => crypto.createHash('md5').update(str).digest('hex');
