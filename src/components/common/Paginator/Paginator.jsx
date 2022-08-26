import { useState } from "react";
import styles from "./Paginator.module.css"

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize) //ceil вернет близжайшее большее или =если целое

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortion = (portionNumber - 1) * portionSize + 1
    let rightPortion = portionNumber * portionSize

    return (
        <div className={styles.allPortion}>
            {portionNumber > 1 &&
                <button className={styles.buttonPortion} onClick={() =>{setPortionNumber(portionNumber - 1)}}>«</button>}

           <div className={styles.pagesPortion}>
           {pages
            .filter(p => p >= leftPortion && p <= rightPortion)
            .map(p => {
                return <span className={currentPage === p ? styles.selectedPage : styles.classicPage}
                    onClick={(e) => { onPageChanged(p) }}>{p}</span>
            })}
           </div>

            {portionNumber < portionCount &&
                <button className={styles.buttonPortion} onClick={() =>{setPortionNumber(portionNumber + 1)}}>»</button>
            }
        </div>
    )
}

export default Paginator