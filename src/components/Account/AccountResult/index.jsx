import { AiFillCheckCircle } from 'react-icons/ai';

import classNames from 'classnames/bind';
import styles from './accountResult.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <img src="https://i.pravatar.cc/150?img=8" alt="" />
            </div>
            <div className={cx('info')}>
                <div className={cx('info-name')}>
                    <p className={cx('name')}>Nguyễn Tuấn anh</p>
                    <AiFillCheckCircle className={cx('check')} />
                </div>
                <p className={cx('alias')}>Oh nhí nhảnh</p>
            </div>
        </div>
    );
}

export default AccountItem;
