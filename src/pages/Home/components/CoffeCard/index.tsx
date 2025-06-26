import { ShoppingCart } from 'phosphor-react'
import { CartButton, CoffeCardFooter, CoffeCardHeader, CoffeCardMain, CoffeCardWrapper, Price, Tag, TagsWrapper } from "./styles";
import { Input } from '../../../../components/Input';
import { useState } from 'react';

interface CoffeCardProps {
    name: string,
    description: string,
    price: string,
    imagePath: string,
    tags: string[]
}

export function CoffeCard({ name, description, price, imagePath, tags }: CoffeCardProps) {

    const [quantity, setQuantity] = useState<number>(0)

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
                <CartButton><ShoppingCart size={22} weight="fill" /></CartButton>

            </CoffeCardFooter>
        </CoffeCardWrapper>
    )
}