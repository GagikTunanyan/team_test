export const classnames = (obj: { [key: string]: boolean }) => {
  if (!obj) return "";
  return Object.keys(obj)
    .filter((item: string) => !!obj[item])
    .join(" ");
};

export const morePhotos = {
  checkMore: (rendrings: any[], all: any[]): undefined | string => {
    if (all.length - rendrings.length > 0) {
      return `Еще ${all.length - rendrings.length} фото `;
    }
    return undefined;
  },
};

export const regexpList = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,7}$/i,
  number: /^\d+$/,
  text: /^.*$/,
  phone: /^\+\d{1,3}\d{1,3}\d{3,4}\d{3,4}$/,
};

export const checkFields = (
  obj: { [key: string]: any },
  type?: "empty" | "full"
) => {
  return Object.values(obj)
    .map((item) => (type === "full" ? item !== "" : item === ""))
    .includes(true);
};
