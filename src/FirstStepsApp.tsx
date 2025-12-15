import { ItemCounter } from "./shopping-cart/ItemCounter.tsx";

interface ItemInCart {
    productName: string;
    productQuantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: "Nintendo Switch 2", productQuantity: 1 },
    { productName: "Pro Controller", productQuantity: 2 },
    { productName: "Smash Bros", productQuantity: 5 },
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito</h1>
            {
                itemsInCart.map(({productName, productQuantity}) => (
                    <ItemCounter key={productName} name={productName} quantity={productQuantity} />
                ))
            }
        </>
    )
}