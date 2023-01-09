import { AiFillCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './accountResult.module.scss';
import Imgs from '~/components/FallBackImgs';
const cx = classNames.bind(styles);
function AccountItem({ padding, data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper', { padding: padding })}>
            <div className={cx('avatar')}>
                <Imgs src={data.avatar} />
            </div>
            <div className={cx('info')}>
                <div className={cx('info-name')}>
                    <p className={cx('name')}>{data.full_name}</p>
                    {data.tick && <AiFillCheckCircle className={cx('check')} />}
                </div>
                <p className={cx('alias')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
