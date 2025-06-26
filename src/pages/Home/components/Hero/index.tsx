import coffeImage from './../../../../assets/coffe-img.svg'
import { BenefitsItem } from './components/BenefitsItem'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { BenefitsSectionWrapper, HeadlineWrapper, HeroContentWrapper, HeroWrapper } from './styles'

export function Hero() {
    return (
            <HeroWrapper>
                <HeroContentWrapper>
                    <HeadlineWrapper>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </HeadlineWrapper>

                    <BenefitsSectionWrapper>
                        <BenefitsItem background='yellow-dark' text='Compra simples e segura' Icon={ShoppingCart} />
                        <BenefitsItem background='gray' text='Embalagem mantém o café intacto' Icon={Package} />
                        <BenefitsItem background='yellow' text='Entrega rápida e rastreada' Icon={Timer} />
                        <BenefitsItem background='purple' text='O café chega fresquinho até você' Icon={Coffee} />
                    </BenefitsSectionWrapper>
                </HeroContentWrapper>

                <img src={coffeImage} />
            </HeroWrapper>
    )
}