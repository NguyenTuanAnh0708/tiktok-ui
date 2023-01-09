import TippyHeadless from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

import { AiFillCloseCircle, AiOutlineLoading3Quarters, AiOutlineUser } from 'react-icons/ai';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

import { AccountItemResult } from '~/components/Account';
import { WapperPopper } from '~/components/Popper';
import style from './seachHeader.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);
function Seach() {
    const [seachValue, setSeachValue] = useState('');
    const [seachResult, setSeachResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    useEffect(() => {
        if (!seachValue.trim()) {
            setSeachResult([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(seachValue)}&type=less`)
            .then((response) => response.json())
            .then((res) => {
                setSeachResult(res.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
            });
    }, [seachValue]);
    const handelShowResult = () => {
        setShowResult(false);
    };
    const handelClear = () => {
        setSeachValue('');
        setSeachResult([]);
        inputRef.current.focus();
    };
    return (
        <TippyHeadless
            onClickOutside={handelShowResult}
            interactive
            visible={showResult && seachResult.length > 0}
            render={(attrs) => (
                <div className={cx('header-result')} tabIndex="-1" {...attrs}>
                    <WapperPopper>
                        <h4 className={cx('label-result')}>Kết quả tiềm kiếm</h4>
                        <div className={cx('list-result')}>
                            {seachResult.map((data) => (
                                <AccountItemResult padding key={data.key} data={data} />
                            ))}
                        </div>
                    </WapperPopper>
                </div>
            )}
        >
            <div className={cx('header-seach')}>
                <input
                    ref={inputRef}
                    placeholder="Tìm kiếm tài khoảng và video"
                    value={seachValue}
                    onChange={(e) => setSeachValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {/* close */}
                {!!seachValue && !loading && (
                    <button className={cx('close')} onClick={handelClear}>
                        <AiFillCloseCircle />
                    </button>
                )}
                {/* Loading*/}
                {loading && <AiOutlineLoading3Quarters className={cx('loading')} />}
                {/* Seach */}
                <button className={cx('header-seach-btn')}>
                    <HiOutlineMagnifyingGlass className={cx('header-seach-icon')} />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Seach;
