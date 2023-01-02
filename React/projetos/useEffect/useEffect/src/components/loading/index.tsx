import styles from "./loading.module.css"
export default function Loading(){
    return (
        <div className={styles.modal}>
            <div className={styles.panel}>
                <div>Carregando</div>
            </div>
        </div>
    );
};