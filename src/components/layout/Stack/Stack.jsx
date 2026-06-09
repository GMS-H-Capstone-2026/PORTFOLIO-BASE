import styles from './Stack.module.css';

export const Stack = ({ organization = 'vertical', style, children }) => {
    return (
        <div className={`${styles['stack']} ${styles[`stack-${organization}`]}`} style={style}>
            {children}
        </div>
    );
};
