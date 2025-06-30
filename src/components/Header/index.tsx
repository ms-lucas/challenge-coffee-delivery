import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import appLogo from './../../assets/app-logo.svg'
import { HeaderWrapper, LocationButton, ShoppingCartButton } from './styles'


export function Header() {

    const navigate = useNavigate()

    const { cartItems } = useContext(CartContext)

    return (
        <HeaderWrapper>
            <Link to="/">
                <img src={appLogo} />
            </Link>
            <div>
                <LocationButton><MapPin size={22} weight="fill" /> Porto Alegre, RS</LocationButton>
                <ShoppingCartButton onClick={() => navigate('/checkout')}><ShoppingCart size={22} weight="fill" />
                    {cartItems.length > 0 && <span>{cartItems.length}</span>}
                </ShoppingCartButton>
            </div>
        </HeaderWrapper>
    )
}