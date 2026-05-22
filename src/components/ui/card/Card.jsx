import styles from './Card.module.css';

export const Card = ({ children, style }) => {
    return (
        <div className={styles['card']} style={style}>
            {children}
        </div>
    );
};
