import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { AiFillCloseCircle, AiOutlineLoading3Quarters, AiOutlineUser } from 'react-icons/ai';
import { BiCoinStack, BiHelpCircle } from 'react-icons/bi';
import { BsChatLeftDots, BsKeyboard } from 'react-icons/bs';
import { GrLanguage } from 'react-icons/gr';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { IoMdAdd } from 'react-icons/io';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { MdOutlineNightlight } from 'react-icons/md';
import 'tippy.js/dist/tippy.css'; // optional

import imgs from '~/assets/imgs';
import { AccountItemResult } from '~/components/Account';
import Button from '~/components/Button';
import Imgs from '~/components/FallBackImgs';
import { Chaticon, SendIcon } from '~/components/Icons';
import { MenuWapperHeader } from '~/components/Menu';
import { WapperPopper } from '~/components/Popper';
import styles from './header.module.scss';
const cx = classNames.bind(styles);
console.log(imgs.logo);
function Header() {
    const currentUser = true;
    const moreMenuHeader = [
        {
            title: 'Tiếng Việt',
            icon: <GrLanguage />,
            children: {
                title: 'Ngôn Ngữ',
                data: [
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vn',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            title: 'Phản hồi và trợ giúp',
            icon: <BiHelpCircle />,
        },
        {
            title: 'Phím tắt và trợ giúp',
            icon: <BsKeyboard />,
        },
        {
            title: 'Chế độ tối',
            icon: <MdOutlineNightlight />,
        },
    ];
    // user
    const CurrentUserMoreHeader = [
        {
            title: 'Xem Hồ Sơ ',
            icon: <AiOutlineUser />,
            to: '/Nguyentuananh',
        },
        {
            title: 'Nhận xu',
            icon: <BiCoinStack />,
        },
        ...moreMenuHeader,
    ];
    const [seachResult, setSeachResult] = useState([]);
    useEffect(() => {
        setTimeout(() => setSeachResult([1, 2, 3, 4, 5]), 0);
    }, []);
    return (
        <div className={cx('wapper')}>
            <div className={cx('inner-header')}>
                <div className={cx('header-logo')}>
                    <img src={imgs.logo} alt="TikTok" />
                </div>
                <TippyHeadless
                    interactive
                    render={(attrs) => (
                        <div className={cx('header-result')} tabIndex="-1" {...attrs}>
                            <WapperPopper>
                                <h4 className={cx('label-result')}>Kết quả tiềm kiếm</h4>
                                <div className={cx('list-result')}>
                                    <AccountItemResult padding check={false} />
                                    <AccountItemResult padding check={true} />
                                    <AccountItemResult padding check={false} />
                                    <AccountItemResult padding check={false} />
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
                <div className={cx('header-action')}>
                    {currentUser ? (
                        <>
                            <Button leftIcon={<IoMdAdd />} outline_dark>
                                Tải lên
                            </Button>
                            <Tippy content="Tin nhắn">
                                <button className={cx('action-btn')}>
                                    <SendIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư">
                                <button className={cx('action-btn')}>
                                    <Chaticon width="3.2rem" height="3.2rem" />
                                </button>
                            </Tippy>
                            <MenuWapperHeader className={cx('MenuWapperHeader')} data={CurrentUserMoreHeader}>
                                <div className={cx('current_user-avatar')}>
                                    {/* <img src="https://i.pravatar.cc/150?img=8" alt="" /> */}
                                    <Imgs
                                        src="http/s://i.pravatar.cc/150?img=8"
                                        fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                    />
                                </div>
                            </MenuWapperHeader>
                        </>
                    ) : (
                        <>
                            <Button outline_primary>Đăng ký</Button>
                            <Button primary>Đăng Ký</Button>
                            <MenuWapperHeader className={cx('MenuWapperHeader')} data={moreMenuHeader}>
                                <button className={cx('more-setting')}>
                                    <IoEllipsisVerticalSharp />
                                </button>
                            </MenuWapperHeader>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
