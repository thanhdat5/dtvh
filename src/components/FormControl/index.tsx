import { useState } from "react";
import hidePasswordIcon from '../../assets/images/icons/eye-hide.svg';
import showPasswordIcon from '../../assets/images/icons/eye-show.svg';
import "./index.scss";

interface TNGFormControlProps {
    name: string,
    value: string,
    label: string
    required?: boolean
    className?: string
    type?: "text" | "email" | "password"
    onChange?: (newValue: any) => void
}
const TNGFormControl = ({ name, label, value, type = 'text', className = '', onChange }: TNGFormControlProps) => {
    const [inputType, setInputType] = useState(type);

    const togglePasswordShow = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    }

    return <div className={`tbg-form-control ${className}`}>
        <input name={name} value={value} autoComplete="off" type={inputType} placeholder={label} onChange={onChange} />
        {label ? <label>{label}</label> : <></>}
        {type === 'password' ? <img onClick={togglePasswordShow} src={inputType === 'password' ? showPasswordIcon : hidePasswordIcon} alt="" /> : <></>}
    </div>
}
export default TNGFormControl