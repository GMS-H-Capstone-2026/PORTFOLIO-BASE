import styles from './Image.module.css';

export const Image = ({ src, alt = '', style, fit = 'cover', radius = 'md', ratio = 'auto', loading = 'lazy', decoding = 'async' }) => {
    const frameClassName = [styles['image-frame'], styles[`radius-${radius}`], ratio !== 'auto' ? styles[`ratio-${ratio}`] : ''].filter(Boolean).join(' ');

    if (!src) {
        return (
            <div className={frameClassName} style={style} role="img" aria-label={alt || 'image placeholder'}>
                <div className={styles['image-empty']}>NO IMAGE</div>
            </div>
        );
    }

    return (
        <div className={frameClassName} style={style}>
            <img className={`${styles['image']} ${styles[`fit-${fit}`]}`} src={src} alt={alt} loading={loading} decoding={decoding} />
        </div>
    );
};
