import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles"
import coffeLogo from '../../../src/assets/coffee-delivery-logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';

export const Header = () => (
    <HeaderContainer>
        <div className="container">
            <img src={coffeLogo}></img>

            <HeaderButtonContainer>
                <HeaderButton>

                </HeaderButton>
            </HeaderButtonContainer>
        </div>
    </HeaderContainer>)