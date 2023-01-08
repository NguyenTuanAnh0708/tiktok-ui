import { IoIosArrowBack } from 'react-icons/io';

import classNames from 'classnames/bind';
import styles from './menuWapper.module.scss';
const cx = classNames.bind(styles);
function MenuHeader({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button onClick={onBack} className={cx('header-back')}>
                <IoIosArrowBack />
            </button>
            <h4 className={cx('header-title')}>Menu Title</h4>
        </header>
    );
}
export default MenuHeader;
