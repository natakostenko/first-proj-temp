import Logo from "./Logo";
import CartHeaderBtn from "../cart/CartHeaderBtn";
import UserAuth from "../auth/UserAuth";

const Header = (props) => {
    const { cart, isAdmin, setIsAdmin } = props;

    return (
        <header>
            <Logo />
            <UserAuth
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
            />
            <CartHeaderBtn data={cart} />
        </header>
    );
}

export default Header;