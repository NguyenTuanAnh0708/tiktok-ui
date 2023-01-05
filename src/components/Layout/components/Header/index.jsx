import { AiOutlineLoading3Quarters, AiFillCloseCircle } from 'react-icons/ai';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import TippyHeadless from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { AccountItemResult } from '~/components/Account';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import imgs from '~/assets/imgs';
import { WapperPopper } from '~/components/Popper';
const cx = classNames.bind(styles);
console.log(imgs.logo);
function Header() {
    const [seachResult, setSeachResult] = useState([]);
    useEffect(() => {
        setTimeout(() => setSeachResult([1, 2, 3, 4, 5]), 0);
    });
    return (
        <div className={cx('wapper')}>
            <div className={cx('inner-header')}>
                <div className={cx('header-logo')}>
                    <img src={imgs.logo} alt="TikTok" />
                </div>
                <TippyHeadless
                    visible={seachResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('header-resault')} tabIndex="-1" {...attrs}>
                            <WapperPopper>
                                <h4 className={cx('label-resault')}>Kết quả tiềm kiếm</h4>
                                <div className={cx('list-resault')}>
                                    <AccountItemResult />
                                </div>
                            </WapperPopper>
                        </div>
                    )}
                >
                    <div className={cx('header-seach')}>
                        <input placeholder="Tìm kiếm tài khoảng và video" />
                        {/* close */}
                        <AiFillCloseCircle className={cx('close')} />
                        {/* Loading*/}
                        <AiOutlineLoading3Quarters className={cx('loading')} />
                        {/* Seach */}
                        <button className={cx('header-seach-btn')}>
                            <HiOutlineMagnifyingGlass className={cx('header-seach-icon')} />
                        </button>
                    </div>
                </TippyHeadless>
                <div className={cx('header-action')}>action</div>
            </div>
        </div>
    );
}

export default Header;
