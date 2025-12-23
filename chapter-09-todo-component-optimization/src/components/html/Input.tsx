type Inputprops = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & {
    type?: 'text'
}
/**
 * Omit<타입, '속성'>은 타입스크립트에서 해당 타입에서 특정 속성만 제외한 새 타입을 만들 때 사용한다. 인터섹션(Intersection) 타입은 타입스크립트에서 여러 타입을 모두 만족하는 값을 표현할 때 사용한다. 쉽게 말해 A & B 는 'A타입이면서 동시에 B타입'이라는 뜻이다.
 * @param props 
 * @returns 
 */
/**
 * <input> 태그의 type 속성을 안전하게 다루는 방법
 * 특정 타입을 허용하고 싶을 때는 다음처럼 HTMLInputType을 리터럴 타입으로 직접 정의한 다음에 제거하고 싶은 타입만 Omit 유틸리티 타입으로 명시해서 사용하는 방법도 있다. 예를 들어, <input> 태그의 type 속성이 허용하는 값 중에서 radio와 checkbox만 제외하고 싶으면 다음과 같이 작성한다.
 * 
 * type HTMLInputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'file' | 'hidden' | 'image' | 'submit' | 'reset' | 'button' | 'color' | 'range' | 'checkbox' | 'radio'
 * type Inputprops = Omit<React.ComponentpropsWithRef<'input'>, 'type'> & {
 *     type?: Exclude<HTMLInputType, 'radio' | 'checkbox'>
 * }
 * export default function Input(props: Inputprops) {
 *     const { ...rest } = props
 *     return <input {...rest}/>
 * }
 * 
 * 이렇게 작성하면 text, password, email 등 다양한 타입을 지원하면서도 의도적으로 제외한 radio와 checkbox는 사용할 수 없도록 제한할 수 있다. 어떤 방식을 써도 무방하니 상황에 맞게 적절한 방식을 사용하면 된다.
 * 
 * 또한 HTMLInputType처럼 여러 타입 값을 나열한 타입 정의는 다른 컴포넌트에서도 재사용할 수 있다. 따라서 다음과 같이 src/type/form.d.ts 파일로 분리하면 관리하기가 편하다.
 * 
 * src/types/form.d.ts
 * type HTMLInputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'file' | 'hidden' | 'image' | 'submit' | 'reset' | 'button' | 'color' | 'range' | 'checkbox' | 'radio'
 * @param props 
 * @returns 
 */
export default function Input(props: Inputprops) {
    const { ...rest } = props
    return (
        <input {...rest }/>
    )
}