import classNames from 'classnames/bind';
import styles from './wapper.module.scss';
const cx = classNames.bind(styles);
function Wapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Wapper;
