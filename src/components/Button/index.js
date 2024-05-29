import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  onClick,
  children,
  disabled = false,
  text = false,
  primary = false,
  outline = false,
  round = false,
  large = false,
  leftIcon,
  className,
  ...passProps
}) {
  let Comp = "button";

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    large,
    text,
    disabled,
    round,
  });
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled){
    delete props.onClick
  }



    if (to) {
      props.to = to;
      Comp = Link;
    } else if (href) {
      props.href = href;
      Comp = "a";
    }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span  className={cx('title')}>{children}</span>
    </Comp>
  );
}

export default Button;
