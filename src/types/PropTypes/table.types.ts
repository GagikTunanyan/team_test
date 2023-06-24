export interface TablePropTypes {
  head: { displayValue: string; value: string; col?: number }[];
  body: { [key: string]: string | number }[];
  className?: string;
}
