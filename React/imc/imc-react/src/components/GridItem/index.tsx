import { Level } from "../../helpers/Imc";
import styles from "./gridItem.module.css";
import upImages from "../../assets/up.png";
import downImages from "../../assets/down.png";


type Props = {
    item: Level;
}

export const GridItem = ({item} : Props) =>{
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                
                <img src={item.icon == "down" ?  downImages : upImages} alt="" width="30" />
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            <div className={styles.gridInfo}>
                <>
                    IMC entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>

        </div>
    );
}