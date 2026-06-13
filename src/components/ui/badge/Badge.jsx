import styles from './Badge.module.css';

export const Badge = ({ children }) => {
    return <div className={styles['badge']}>{children}</div>;
};
