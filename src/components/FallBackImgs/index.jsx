import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './FallBackImgs.module.scss';
const cx = classNames.bind(styles);
function Imgs({
    className,
    src,
    alt,
    fallback: fallbackOut = 'https://dummyimage.com/600x400/000/fff&text=Avatar-Error',
    ...props
}) {
    const [fallback, SetFallBack] = useState('');
    const handelError = () => {
        SetFallBack(fallbackOut);
    };
    return <img className={className} src={fallback || src} alt={alt} {...props} onError={handelError} />;
}

export default Imgs;
