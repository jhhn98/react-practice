import useInputEx from '../hooks/useInputEx'

export default function Dynamic() {
    const { value: name, error: nameError, onChange: handleNameChange, validate: validateName } = useInputEx<string>({
        initialValue: '',
        validateFn: (value) => {
            if (!value) return '이름은 필수입니다.'
            return undefined
        }
    })
    const { value: email, error: emailError, onChange: handleEmailChange, validate: validateEmail } = useInputEx<string>({
        initialValue: '',
        validateFn: (value) => {
            if (!value.includes('@')) return '올바른 이메일을 입력하세요.'
            return undefined
        }
    })
    const { value: phone, error: phoneError, onChange: handlePhoneChange, validate: validatePhone } = useInputEx<string>({
        initialValue: '',
        validateFn: (value) => {
            if (!value.match(/^\d{11}$/)) return '전화번호는 11자리여야 합니다.'
            return undefined
        }
    })
    const { value: isAgreed, error: isAgreedError, onChange: handleAgreeChange, validate: validateAgree } = useInputEx<boolean>({
        initialValue: false,
        validateFn: (value) => {
            if (!value) return '약관에 동의해야 합니다.'
            return undefined
        },
        type: 'checkbox'
    })
    const { value: gender, error: genderError, onChange: handleGenderChange, validate: validateGender } = useInputEx<string>({
        initialValue: 'male',
        validateFn: (value) => {
            if (!value) return '성별을 선택하세요.'
            return
        },
        type: 'radio'
    })
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if( validateName() && validateEmail() && validatePhone() && validateAgree() && validateGender() ) {
            console.log('Form submit: ', { name, email, phone, isAgreed, gender })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type='text' value={name} onChange={handleNameChange}/>
                    {nameError && <p>{nameError}</p>}
                </div>
                <div>
                    <label>Email: </label>
                    <input type='text' value={email} onChange={handleEmailChange}/>
                    {emailError && <p>{emailError}</p>}
                </div>
                <div>
                    <label>Contact: </label>
                    <input type='text' value={phone} onChange={handlePhoneChange}/>
                    {phoneError && <p>{phoneError}</p>}
                </div>
                <div>
                    <label>
                        <input type='checkbox' checked={isAgreed} onChange={handleAgreeChange}/> Agreed
                    </label>
                    {isAgreedError && <p>{isAgreedError}</p>}
                </div>
                <div>
                    <label>Gender: </label>
                    <label>
                        <input type='radio' name='gender' value='male' checked={gender === 'male'} onChange={handleGenderChange}/> Male
                    </label>
                    <label>
                        <input type='radio' name='gender' value='famale' checked={gender === 'famale'} onChange={handleGenderChange}/> Famale
                    </label>
                    {genderError && <p>{genderError}</p>}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}