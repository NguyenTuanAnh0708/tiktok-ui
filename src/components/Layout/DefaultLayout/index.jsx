import classNames from 'classnames/bind';
import Header from '../components/Header';
import SideBars from '../components/SideBars';
import styles from './defaultLayout.module.scss';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <>
            <div className={cx('wapper')}>
                <Header />
                <div className={cx('container')}>
                    <SideBars />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;
