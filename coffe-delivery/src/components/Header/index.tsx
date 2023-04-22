import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles"
import coffeLogo from '../../../src/assets/coffee-delivery-logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';

export const Header = () => (
    <HeaderContainer>
        <div className="container">
            <img src={coffeLogo}></img>

            <HeaderButtonContainer>
                <HeaderButton variant="purple">
                    <MapPin size={20} weight="fill" />
                    São José, SC
                </HeaderButton>
                <HeaderButton variant="yellow">
                    <ShoppingCart size={20} weight="fill" />
                </HeaderButton>
            </HeaderButtonContainer>
        </div>
    </HeaderContainer>)