import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './button.module.scss';
const cx = classNames.bind(styles);
function Button({ children, href, to, onClick, primary = false, outline = false, size = 'medium', ...passProps }) {
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
    const classes = cx('wrapper', {
        primary,
        outline,
        [size]: true,
    });
    return (
        <Comp {...props} className={classes}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
