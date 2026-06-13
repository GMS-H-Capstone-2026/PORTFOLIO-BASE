import styles from './Divider.module.css';

export const Divider = ({ text, orientation = 'horizontal', color, fontSize, borderWidth }) => {
    return (
        <div className={`${styles['divider']} ${styles[orientation]}`} style={{ '--divider-color': color, '--divider-width': borderWidth }}>
            {text && (
                <span className={styles['divider-text']} style={{ color, fontSize }}>
                    {text}
                </span>
            )}
        </div>
    );
};
