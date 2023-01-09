import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { AiOutlineUser } from 'react-icons/ai';
import { BiCoinStack, BiHelpCircle } from 'react-icons/bi';
import { BsKeyboard } from 'react-icons/bs';
import { GrLanguage } from 'react-icons/gr';
import { IoMdAdd } from 'react-icons/io';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';
import { MdOutlineNightlight } from 'react-icons/md';

import imgs from '~/assets/imgs';
import Button from '~/components/Button';
import Imgs from '~/components/FallBackImgs';
import { Chaticon, SendIcon } from '~/components/Icons';
import { MenuWapperHeader } from '~/components/Menu';
import Seach from '../Seach';
import classNames from 'classnames/bind';
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
    return (
        <div className={cx('wapper')}>
            <div className={cx('inner-header')}>
                <div className={cx('header-logo')}>
                    <img src={imgs.logo} alt="TikTok" />
                </div>
                {/* seach */}
                <Seach />
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
                                        src="https://i.pravatar.cc/150?img=8"
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
