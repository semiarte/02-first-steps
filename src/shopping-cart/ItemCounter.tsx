import { useState } from "react";

// import './itemCounter.css';
import styles from './itemCounter.module.css';

interface Product {
    name: string,
    quantity?: number,
}

export const ItemCounter = ({ name, quantity = 1 }: Product) => {

    {/* Introduction to testing slideshow
        https://www.canva.com/design/DAGoGXkqs3c/DfUKwmHLVYZo1DUkQiR5LA/view?utm_content=DAGoGXkqs3c&utm_campaign=designshare&utm_medium=link&utm_source=viewer
    */}

    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(count + 1);
    }
    const handleSubtract = () => {
        if (count === 1) { return; }
        setCount(count - 1);
    }

    return (
        <section className={styles.itemRow}>
            <span
                className={styles['item-text']}
                  style={{
                      color: count === 1 ? 'red' : 'black',
                  }}
            >{name}</span>
            <button
                onClick={handleAdd}
            >+1</button>
            <span>{count}</span>
            <button
                onClick={handleSubtract}
            >-1</button>
        </section>
    )
}