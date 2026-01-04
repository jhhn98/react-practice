// App.tsx
import { useEffect, useState } from 'react'

export default function App() {
    const [todos, setTodos] = useState([])
    useEffect(() => { // useEffect는 컴포넌트가 렌더링된 후 특정 작업을 수행할 수 있게 해주는 훅이다. 의존성 배열을 빈 배열([])로 지정하면 컴포넌트가 처음 마운트될 때 단 한 번만 실행된다.
        const fetchData = async () => { // useEffect 훅 자체는 비동기 함수로 만들 수 없다. 따라서 useEffect 훅 내부에서 별도의 async 함수를 정의해 사용하는 방식이 일반적이다.
            try {
                const response = await fetch('http://localhost:3000/todos')
                const data = await response.json()
                setTodos(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData() // 정의한 fetchData() 함수를 호출해 서버(/todos)에 GET 요청을 보낸다. 응답 데이터는 setTodos()를 통해 상태에 저장된다.
    }, [])
    return (
        <div>
            <h1>Todos</h1>
            <pre>{JSON.stringify(todos)}</pre> {/* todos 상태 값을 사용하려면 원래는 타입을 지정해야 한다. 하지만 실습에서는 타입을 생략하고 JSON.stringify() 메서드를 사용해 상태를 JSON 문자열로 변환한 후 출력한다. 이 문자열을 <pre></pre>태그로 갑싸면 줄 바꿈과 들여쓰기가 적용되어 보기 좋게 렌더링된다.*/}
        </div>
    )
}