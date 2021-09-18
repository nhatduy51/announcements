export const hideUID = (uid: string) => {
  const first = uid.substring(0, 3);
  const last = uid.substring(uid.length - 3, uid.length);
  return first + '****' + last;
};
