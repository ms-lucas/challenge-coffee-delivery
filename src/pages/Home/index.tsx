import { CoffeCard } from "./components/CoffeCard";
import { Hero } from "./components/Hero";

import coffeList from "./coffes.json"

import { CoffeList, CoffeSectionWrapper } from './styles'

export function Home() {
    return (
        <>
            <Hero />
            <CoffeSectionWrapper>
                <h1>Nossos Cafés</h1>
                <CoffeList>
                     {coffeList.map((coffe) => {
                        return <CoffeCard 
                            key={coffe.id} 
                            id={coffe.id}
                            name={coffe.name} 
                            description={coffe.description} 
                            imagePath={coffe.imagePath} 
                            price={coffe.price}
                            tags={coffe.tags}
                        />
                             
                     })}
                </CoffeList>
            </CoffeSectionWrapper>
        </>
    )
}