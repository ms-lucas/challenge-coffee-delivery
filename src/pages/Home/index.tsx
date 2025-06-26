import { CoffeCard } from "./components/CoffeCard";
import { Hero } from "./components/Hero";

import expressoTradicionalImage from '../../assets/expresso-tradicional.svg'

import { CoffeList, CoffeSectionWrapper } from './styles'

export function Home() {
    return (
        <>
            <Hero />
            <CoffeSectionWrapper>
                <h1>Nossos Cafés</h1>
                <CoffeList>
                    <CoffeCard 
                        name="Expresso Tradicional" 
                        description="O tradicional café feito com água quente e grãos moídos"
                        price="9,90"
                        imagePath={expressoTradicionalImage}
                        tags={['TRADICIONAL', 'GELADO', 'COM LEITE']}
                    />

                     <CoffeCard 
                        name="Expresso Tradicional" 
                        description="O tradicional café feito com água quente e grãos moídos"
                        price="9,90"
                        imagePath={expressoTradicionalImage}
                        tags={['TRADICIONAL', 'GELADO', 'COM LEITE', 'TRADICIONAL']}
                    />
                     <CoffeCard 
                        name="Expresso Tradicional" 
                        description="O tradicional café feito com água quente e grãos moídos"
                        price="9,90"
                        imagePath={expressoTradicionalImage}
                        tags={['TRADICIONAL', 'GELADO', 'COM LEITE', 'TRADICIONAL']}
                    /> <CoffeCard 
                        name="Expresso Tradicional" 
                        description="O tradicional café feito com água quente e grãos moídos"
                        price="9,90"
                        imagePath={expressoTradicionalImage}
                        tags={['TRADICIONAL', 'GELADO', 'COM LEITE', 'TRADICIONAL']}
                    />
                     <CoffeCard 
                        name="Expresso Tradicional" 
                        description="O tradicional café feito com água quente e grãos moídos"
                        price="9,90"
                        imagePath={expressoTradicionalImage}
                        tags={['TRADICIONAL', 'GELADO', 'COM LEITE', 'TRADICIONAL']}
                    /> <CoffeCard 
                        name="Expresso Tradicional" 
                        description="O tradicional café feito com água quente e grãos moídos"
                        price="9,90"
                        imagePath={expressoTradicionalImage}
                        tags={['TRADICIONAL', 'GELADO', 'COM LEITE', 'TRADICIONAL']}
                    />
                     <CoffeCard 
                        name="Expresso Tradicional" 
                        description="O tradicional café feito com água quente e grãos moídos"
                        price="9,90"
                        imagePath={expressoTradicionalImage}
                        tags={['TRADICIONAL', 'GELADO', 'COM LEITE', 'TRADICIONAL']}
                    />
                </CoffeList>
            </CoffeSectionWrapper>
        </>
    )
}