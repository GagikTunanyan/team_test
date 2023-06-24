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
  handleClickMore: (
    setInitial: CallableFunction,
    all: any[],
    count: number
  ) => {
    
  },
};
