// ./components/Input.tsx
/* 기본 Input component
type InputProps = React.ComponentPropsWithRef<'input'>

export default function Input({ children, ...props }: InputProps) {
    return (
        <>
            <label htmlFor='chk'>{children}</label>
            <input type='text' id='chk' {...props}/>
        </>
    )
}
*/
// useId 훅을 사용한 Input component
import { useId } from 'react'

type InputProps = React.ComponentPropsWithRef<'input'>

export default function Input({ children, ...props }: InputProps) {
    const uuid = useId()
    return (
        <>
            <label htmlFor={uuid}>{children}</label>
            <input type='text' id={uuid} {...props}/>
        </>
    )
}