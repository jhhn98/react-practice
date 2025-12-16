import React, { forwardRef } from 'react' //react 패키지에서 forwardRef() 함수를 불러온다.

type InputProps = React.ComponentPropsWithRef<'input'> & { lagel: string }

const Input = forwardRef<HTMLInputElement, InputProps>( //forwardRef()로 감싼 컴포넌트는 ref를 props처럼 받아 내부 DOM에 연결할 수 있다. 이때 타입 안정성을 보장하기 위해 ref가 어떤 요소를 가리키는지 명확히 지정해야 한다. 여기서 HTMLInputElement는 ref가 가리킬 요소고, InputProps는 컴포넌트가 받을 props의 타입이다.
    ({ label, ...rest }, ref) => { //forwardRef()로 감싼 컴포넌트는 두 번째 매개변수로 부모 컴포넌트에서 전달한 ref 객체를 받을 수 있다.
        const id = rest.id
        return (
            <div>
                {label && <label htmlFor={id}>{label}</label>}
                <input ref={ref} {...rest}/> {/** 이렇게 받은 ref 객체를 <input ref={ref}/> 형태로 입력 요소의 ref 속성과 연결하면 해당 요소에 직접 접근할 수 있다. */}
            </div>
        )
    }
)
Input.displayName = 'Input'
export default Input