export const classnames = (obj: { [key: string]: boolean }) => {
  if (!obj) return "";
  return Object.keys(obj)
    .filter((item: string) => !!obj[item])
    .join(" ");
};
