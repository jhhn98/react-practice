export default function Radio() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //비제어 컴포넌트에서 ref객체는 하나의 DOM요소만 참조 할수 있다. 하지만 라디오버튼은 같은 name 속성으로 묶여 있어 논리적으로 하나의 입력 값을 의미한다.
        //라디오 버튼은 FormData 객체를 사용하는 것이 가장 효율적이다.
        //FormData는 <form> 요소를 인자로 받아 내부의 모든 입력값을 자동으로 수집한다.
        //formData.get('option')처럼 FormData 객체의 get() 메서드를 사용해 선택된 라디오 버튼의 값을 간단히 가져올 수 있다.
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        console.log('Selected option: ', formData.get('option'))
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <input type='radio' name='option' value='option1' defaultChecked/>
                    {/* 라디오버튼은 초깃값을 반드시 지정해야 한다. defaultChecked 속성을 사용한다. 초깃값을 지정하지 않으면 의도하지 않은 동작이 발생할 수 있다.*/}
                    Option1
                </label>
            </div>
            <div>
                <label>
                    <input type='radio' name='option' value='option2'/>
                    Option2
                </label>
            </div>
            <div>
                <label>
                    <input type='radio' name='option' value='option3'/>
                    Option3
                </label>
            </div>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}