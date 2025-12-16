type InputProps = React.ComponentPropsWithRef<'input'> & {
    label: string
}
export default function Input({ label, ref, ...rest }: InputProps) { //forwardRef() 없이도 ref 객체를 { ref, ...rest } 형태로 간단히 받을 수 있다.
    const id = rest.id || rest.name //id를 label과 연결하기 위해 설정
    return (
        <div className='input-group'> {/*<div>로 감싸 입력 그룹을 시각적으로 묶어줌*/}
            {label && <label htmlFor={id}>{label}</label>}
            <input ref={ref} {...rest}/> {/*ref 객체가 <input> 요소에 직접 연결되어 부모 컴포넌트에서 포커스 제어 등을 할 수 있다.*/}
        </div>
    )
}