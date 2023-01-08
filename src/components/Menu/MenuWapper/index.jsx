import TippyHeadless from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import { WapperPopper } from '~/components/Popper';
import MenuItem from '../MenuItem';
import styles from './menuWapper.module.scss';
import classNames from 'classnames/bind';
import MenuHeader from './headerMenu';
const cx = classNames.bind(styles);
function MenuWapper({ children, data = [], className }) {
    const [history, setHistory] = useState([{ data: data }]);
    const current = history[history.length - 1];
    console.log(history);
    return (
        <TippyHeadless
            delay={[0, 300]}
            placement="top-start"
            interactive
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
            render={(attrs) => (
                <div className={cx('more-setting-space')} tabIndex="-1" {...attrs}>
                    <WapperPopper className={className}>
                        {history.length > 1 && (
                            <MenuHeader
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('list-result')}>
                            {current.data.map((option, index) => {
                                const isParent = !!option.children;
                                return (
                                    <MenuItem
                                        key={index}
                                        data={option}
                                        onClick={() => {
                                            if (isParent) {
                                                setHistory((prev) => [...prev, option.children]);
                                            }
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </WapperPopper>
                </div>
            )}
        >
            {children}
        </TippyHeadless>
    );
}

export default MenuWapper;
