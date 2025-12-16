/**
 * <Formmik initialValues={} onSubmit={}></Formmik>
 * - initialValues 속성: 각 입력 요소에 대응하는 초깃값 객체를 전달한다. 이는 일반적인 컴포넌트에서 useState 훅으로 상태를 초기화하는 방식과 유사하다.
 * - onSubmit: 폼이 제출될 때 실행할 콜백 함수를 작성한다. 이 함수는 사용자가 입력한 값을 받아 서버에 전송하거나 추가 로직을 수행할때 사용한다.
 * 
 * Formik 컴포넌트 내부에서 <form> 요소 대신 Form 컴포넌트를 사용할때의 장점
 * - 폼 상태 자동 연결: Formik이 내부적으로 관리하는 상태와 자동으로 연동되기 때문에 별도의 useState 훅 코드 없이도 입력 값을 손쉽게 관리할 수 있다.
 * - 이벤트 핸들링 간소화: <form> 요소처럼 직접 onSubmit 이벤트 핸들러를 지정하는 대신, Formik 컴포넌트에 지정한 onSubmit 속성에 콜백 함수를 작성하면 제출 이벤트가 자동으로 처리된다.
 * - 접근성 지원: <Form>은 접근성을 고려해서 만들어졌기 때문에 사용자가 Enter 키를 눌러 폼을 제출하는 등 기본적인 키보드 동작을 자동으로 지원한다.
 */

/**
 * <Field name='email' type='email' component='input'/>
 * - name: 입력 값으 이름. initialValues 객체의 키와 일치해야 해당 값과 연결된다.
 * - type: 'text', 'email' 등 <input> 요소에서 사용하는 타입과 동일하다.
 * - component: 실제로 어떤 HTML 요소를 렌더링할지 지정하는 송성이다. 예를 들어, component='input'은 <input> 요소로 렌더링하고, component='textarea'는 <textarea> 요소로 렌더링한다. 이 속성을 생략하면 기본값인 component='input'으로 처리된다.
 */
import { Field, Form, Formik } from 'formik'

export default function ValidationFormEx() {
    return (
        <>
            <Formik initialValues={{ email: '', password: ''}} onSubmit={(values) => { console.log(values) }} validate={(values) => { return {} }}>
                <Form>
                    <Field name='email' type='email' component='input'/>
                    <Field name='passowrd' type='password' component='input'/>
                    <button type='submit'>Login</button>
                </Form>
            </Formik>
        </>
    )
}