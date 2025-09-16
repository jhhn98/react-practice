import { Fragment } from "react/jsx-runtime"
interface ButtonProps {
    text: string;
    handleClick: () => void;
}
export default function Button(props: ButtonProps) {

    const { text, handleClick } = props;
    
    return(
        <Fragment>
            <button onClick={handleClick}>{text}</button>
        </Fragment>
    )
}