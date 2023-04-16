import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles"
import coffeLogo from '../../../src/assets/coffee-delivery-logo.svg';

export const Header = () => (
    <HeaderContainer>
        <div className="container">
            <img src={coffeLogo}></img>

            <HeaderButtonContainer>
                <HeaderButton/>
            </HeaderButtonContainer>
        </div>
    </HeaderContainer>)