import styles from './Grid.module.css';

const GridRoot = ({ children }) => {
    return <div className={styles['grid']}>{children}</div>;
};

const GridItem = ({ children }) => {
    return <div className={styles['grid-item']}>{children}</div>;
};

const Grid = Object.assign(GridRoot, { Item: GridItem });

export { Grid };
