import React, {
  KeyboardEvent,
  FocusEvent,
} from "react";
import styles from "./inputes.module.scss";
import {
  CheckboxPropTypes,
  InputesPropTypes,
  TextAreaPropTypes,
} from "../../types";
import { classnames, regexpList } from "../../utils";

export const Input: React.FC<InputesPropTypes> = (props) => {
  const { className, inputSize = "normal", boldText, error, ...rest } = props;

  const CS = classnames({
    [className as string]: !!className,
    [styles.Input]: true,
    [styles.Error]: !!error,
  });

  const CSInput = classnames({
    [styles[inputSize]]: true,
    [styles.BoldText]: !!boldText,
  });

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    props.onKeyDown?.(event);
    if (
      props.type === "number" &&
      !regexpList.number.test(event.key) &&
      event.key !== "-" &&
      event.key !== "+" &&
      event.key.length <= 1
    ) {
      event.preventDefault();
    }
  };

  const onBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    props.onBlur?.({
      ...event,
      target: { ...event.target, name: props.name ?? "" },
    });
  };

  return (
    <div className={CS}>
      <input
        {...rest}
        className={CSInput}
        onKeyDown={handleKeyDown}
        onBlur={onBlur}
      />
      {!!error && <p className="p-s error">{error}</p>}
    </div>
  );
};

export const TextArea: React.FC<TextAreaPropTypes> = (props) => {
  const { className, error, boldText, ...rest } = props;

  const CS = classnames({
    [className as string]: !!className,
    [styles.TextArea]: true,
    [styles.Error]: !!error,
  });

  const CSInput = classnames({
    [styles.Area]: true,
    [styles.BoldText]: !!boldText,
  });

  const onBlur = (event: FocusEvent<HTMLTextAreaElement, Element>) => {
    props.onBlur?.({
      ...event,
      target: { ...event.target, name: props.name ?? "" },
    });
  };
  return (
    <div className={CS}>
      <textarea {...rest} onBlur={onBlur} className={CSInput} />
      {!!error && <p className="p-s error">{error}</p>}
    </div>
  );
};

export const CheckBox: React.FC<CheckboxPropTypes> = (props) => {
  const { label, value, disabled, onChange } = props;

  const CScheckbox = classnames({
    [styles.Checkbox]: true,
    [styles.Checked]: !!value,
    [styles.Disabled]: !!disabled,
  });

  const handleOnChange = () => {
    if (!disabled) onChange?.(!value);
  };

  return (
    <div className={styles.CheckboxWrapper} onClick={() => handleOnChange()}>
      <div className={CScheckbox} />
      <p className="p">{label}</p>
    </div>
  );
};
