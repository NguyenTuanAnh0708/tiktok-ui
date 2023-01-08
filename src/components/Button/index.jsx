import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './button.module.scss';
const cx = classNames.bind(styles);
function Button({
    className = '',
    children,
    leftIcon,
    rightIcon,
    href,
    to,
    onClick,
    primary = false,
    disable = false,
    outline_primary = false,
    outline_dark = false,
    rounded = false,
    hover = false,
    size = 'medium',
    ...passProps
}) {
    const props = {
        children,
        href,
        to,
        onClick,
        ...passProps,
    };
    let Comp = 'button';
    if (href) {
        Comp = 'a';
    } else if (to) {
        Comp = Link;
    }
    // remove event listener
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline_primary,
        outline_dark,
        disable,
        rounded,
        hover,
        [size]: true,
    });
    return (
        <Comp {...props} className={classes}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
