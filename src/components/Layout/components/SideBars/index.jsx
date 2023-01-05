import classNames from 'classnames/bind';
import styles from './sideBars.module.scss';
const cx = classNames.bind(styles);
function SideBars() {
    return (
        <div className={cx('wapper')}>
            <h1>Sidebars</h1>
        </div>
    );
}

export default SideBars;
