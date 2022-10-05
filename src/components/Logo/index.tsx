import logo from '../../assets/images/logo.png';
import logo2 from '../../assets/images/game-over.png';
import "./index.scss";

interface TNGLogoProps {
    size?: "sm" | "lg"
}
const TNGLogo = ({ size = 'sm' }: TNGLogoProps) => {
    return <div className={`tng-logo ${size}`}>
        <img src={logo} alt="TNG" />
    </div>
}

export const TNGLogoFailed = ({ size = 'sm' }: TNGLogoProps) => {
    return <div className={`tng-logo ${size}`}>
        <img src={logo2} alt="TNG" />
    </div>
}
export default TNGLogo