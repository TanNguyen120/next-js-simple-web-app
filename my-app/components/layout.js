import styles from './layout.module.css';


// Đóng vai trò như là một container trong bootstrap
export default function layout({ children }) {
    return (
        <div className={styles.container}>{children}</div>
    )
}