/*<Formik initialValues={{ email: '', password: '' }} onSubmit={(values) => { console.log(values) }} validate = {(values) => { return {} }}>
    ...
</Formik>
*/
/*<ErrorMessage name='키' component='태그'/>*/
/**
<Formik initialValues={{ email: '', password: '' }} onSubmit={(values, formikHelpers) => {console.log(values) }}></Formik>
 * - values: 사용자가 입력한 값이 담긴 객체이다. 각 필드의 이름(name)속성과 그에 대응하는 입력 값이 포함된다.
 * - formik: Formik이 제공하는 다양한 도우미 함수가 들어 있는 객체이다.
 * ** Tip: 도우미 함수(helper function)는 폼을 제출하거나 상태를 초기화할 때 코드를 더 효율적으로 작성할 수 있도록 도와주는 보조 함수이다. Formik에서는 onSubmit 함수의 두 번째 인자인 formikHelpers에 있는 다양한 도우미 함수를 사용할 수 있다. 예를 들어, 폼을 초기 상태로 되돌리는 resetForm(), 제출 상태를 제어하는 setSubmitting() 함수 등이 여기에 포함된다.
 */

import { Formik } from "formik"

/** 
<Formik 
    initialValues={{ email: '', password: ''}} 
    onSubmit={(values, { setSubmitting }) => { 
        setSubmitting(true) //제출 중 상태로 전환
        setTimeout(() => { //서버로 요청을 보내는 대신 setTimeout()으로 지연 처리
            console.log('Form Data: ', values)
            setSubmitting(false) //제출 완료
        }, 1000)
    }}
>
</Formik>
*/ 
/**
<Formik
    ...
>
{() => (
    <Form>
        ...
    </Form>
)}
</Formik>
*/
import { ErrorMessage, Field, Form, Formik } from 'formik'

interface ErrorValues {
    email?: string
    password?: string
}
// 유효성 검사 함수가 반환할 수 있는 오류 객체의 타입을 정의한다. 각 필드는 선택적으로 설정해 오류가 발생한 필드만 포함하도록 한다.

export default function ValidationFormEx2() {
    return (
        <>
            <Formik 
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => { console.log(values) }}
                validateOnChange={false} // 입력 중에는 유효성 검사 비활성화
                validateOnBlur={true} // 포커스가 빠져나갈 때 유효성 검사 활성화
                validate={(values) => {
                    //validate()는 유효성 검사 로직을 수행하는 함수로, 폼의 현재 값(values)을 기반으로 조건을 검사한다. 오류가 있다면 errors 객체에 오류 메시지를 담아 반환하고, 오류가 없다면 return {}으로 빈 객체를 반환해 폼 제출을 허용한다.
                    const errors: ErrorValues = {};
                    if (!values.email) {
                        errors.email = '필수 입력 항목입니다.'
                    } else if (!values.email.includes('@')) {
                        errors.email = '올바르지 않은 이메일 형식입니다.'
                    }
                    if (!values.password) {
                        errors.password = '필수 입력 항목입니다.'
                    } else if (values.password.length < 4) {
                        errors.password = '비밀번호는 대소문자, 특수문자를 포함해 4자 이상이어야 합니다.'
                    }
                    return Object.keys(errors).length > 0 ? errors: {}
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field name='email' type='email' component='input'/>
                        <ErrorMessage name='email' component='div'/>
                        <Field name='password' type='password' component='input'/>
                        <ErrorMessage name='password' component='div'/>
                        <button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Loging ...' : 'Login'}</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}