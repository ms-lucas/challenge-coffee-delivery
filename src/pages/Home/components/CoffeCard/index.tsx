import { ShoppingCart } from 'phosphor-react'
import { CartButton, CoffeCardFooter, CoffeCardHeader, CoffeCardMain, CoffeCardWrapper, Price, Tag, TagsWrapper } from "./styles";
import { Input } from '../../../../components/Input';
import { useContext, useState } from 'react';
import { CartContext } from '../../../../contexts/CartContext';

interface CoffeCardProps {
    id: string,
    name: string,
    description: string,
    price: number,
    imagePath: string,
    tags: string[]
}

export function CoffeCard({ id, name, description, price, imagePath, tags }: CoffeCardProps) {
    const [quantity, setQuantity] = useState<number>(0)

    const { addNewItem } = useContext(CartContext)

    function handleAddNewItem() {

        if(quantity === 0) {
            alert("Quantitidade não informada")
            return
        }

        addNewItem({
            id,
            name,
            description,
            imagePath,
            quantity,
            price,
            tags
        })

        setQuantity(0)
    }

    function incrementQuantity() {
        if (quantity >= 99) {
            return;
        }
        setQuantity((state) => state + 1)
    }

    function decrementQuantity() {
        if (quantity <= 0) {
            return;
        }

        setQuantity((state) => state - 1)
    }

    return (
        <CoffeCardWrapper>
            <CoffeCardHeader>
                <img src={imagePath} />
                <TagsWrapper>
                    {tags.sort(
                        (a, b) => a.length - b.length
                    ).map((tag) => <Tag>{tag}</Tag>)}
                </TagsWrapper>
            </CoffeCardHeader>

            <CoffeCardMain>
                <h1>{name}</h1>
                <p>{description}</p>
            </CoffeCardMain>

            <CoffeCardFooter>
                <Price>
                    <small>R$</small>
                    {price}
                </Price>
                <Input
                    variant='number'
                    quantity={quantity}
                    onIncrementValue={incrementQuantity}
                    onDecrementValue={decrementQuantity}
                />
                <CartButton onClick={handleAddNewItem}><ShoppingCart size={22} weight="fill" /></CartButton>

            </CoffeCardFooter>
        </CoffeCardWrapper>
    )
}