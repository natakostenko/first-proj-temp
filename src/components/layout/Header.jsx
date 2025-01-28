import Logo from "./Logo";
import CartHeaderBtn from "../cart/CartHeaderBtn";
import UserAuth from "../auth/UserAuth";

const Header = (props) => {
    const { cart } = props;

    return (
        <header>
            <Logo />
            <UserAuth />
            <CartHeaderBtn data={cart} />
        </header>
    );
}

export default Header;