import styles from './Button.module.css';

export const Button = ({ children, style }) => {
    return (
        <button className={styles['button']} style={style}>
            {children}
        </button>
    );
};
