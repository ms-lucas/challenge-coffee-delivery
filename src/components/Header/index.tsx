import { MapPin, ShoppingCart } from 'phosphor-react'
import appLogo from './../../assets/app-logo.svg'
import { HeaderWrapper, LocationButton, ShoppingCartButton } from './styles'

export function Header() {
    return (
        <HeaderWrapper>
            <img src={appLogo} />
            <div>
                <LocationButton><MapPin size={22} weight="fill" /> Porto Alegre, RS</LocationButton>
                <ShoppingCartButton><ShoppingCart size={22} weight="fill" />
                    <span>1</span>
                </ShoppingCartButton>
            </div>
        </HeaderWrapper>
    )
}