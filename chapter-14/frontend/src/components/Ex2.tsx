import { useState } from 'react'

export default function Ex2() {
    const [todoId, setTodoId] = useState('') // 할 일을 등록하면 서버에서 ID 값이 자동으로 생성된다. 이 값은 현재 시간을 기준으로 만들어지기 때문에 미리 알 수 없다. 따라서 이후에 할 일을 수정, 삭제, 완료 처리할 때는 해당 할 일의 ID 값을 직접 입력할 수 있도록 상태를 하나 정의한다. 이 상태를 <input> 입력 요소와 연결한다.
    const [todos, setTodos] = useState<
    { id: number; title: string; done: boolean }[]
    >([]) // 할 일 전체를 저장하기 위한 상태를 정의한다. 여기서 중요한 점은 useState 훅을 사용할 때 상태에 들어갈 데이터의 타입을 명시한다는 점이다. 타입스크립트를 사용하는 리액트에서는 API로부터 받은 데이터를 그대로 상태에 저장하려면 해당 데이터의 구조를 미리 알려줘야 타입 오류가 발생하지 않는다. 여기서 사용하는 API 서버는 id, title, done 이라는 3가지 속성을 가진 할 일 객체들의 배열을 반환하므로 이에 맞춰 타입을 지정해야한다.
    // GET 요청: 할 일 목록 조회
    const getTodos = async () => { // 할 일 목록을 불러오는 함수이다. 이 함수는 GET 메서드를 사용해 /todos 주소로 요청을 보낸다. 서버로부터 응답이 정상적으로 도착하면 JSON 데이터를 파싱해 todos 상태에 저장한다. useState 훅으로 관리하는 상태는 값이 변경되면 리액트가 자동으로 화면을 리렌더링하기 때문에 별도로 화면을 업데이트하지 않아도 최신 데이터가 즉시 반영된다.
        try {
            const response = await fetch('http://localhost:3000/todos')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            setTodos(data)
        } catch (error) {
            console.error(error)
        }
    }
    // POST 요청: 할 일 추가
    const postTodo = async () => { // 할 일을 등록하는 함수이다. 이 함수는 POST 메서드를 사용해 /todos 주소로 새로운 할 일을 서버에 추가한다. 참고로, 할 일 목록을 가져올 때도 동일한 /todos 주소를 사용하지만 GET과 POST처럼 HTTP 메서드가 다르면 요청의 목적과 동작이 완전히 달라진다. 이러한 방식은 REST API의 핵심 개념 중 하나다. API 서버는 할 일을 등록할 때 title 값만 전달하면 되므로 요청의 body에 title 값을 포함해 전송한다. 이때 headers에 'Content-Type': 'application/json'을 반드시 지정해야 서버가 이 요청이 JSON 형식의 데이터임을 올바르게 해석할 수 있다. 요청이 성공하면 서버는 새로 등록된 할 일 데이터를 응답으로 보내고, 이 데이터를 기존의 todos 상태에 추가하면 화면이 곧바로 업데이트 된다. 즉, 다시 GET 요청을 하지 않아도 최신 상태가 화면에 반영되는 셈이다.
        try {
            const response = await fetch('http://localhost:3000/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: 'New Todo',
                }),
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            setTodos([...todos, data])
        } catch (error) {
            console.error(error)
        }
    }
    // PATCH 요청: 완료 상태 토글
    const toggleTodo = async () => { // 할 일의 완료 상태를 변경하는 함수이다. 이 함수는 PATCH 메서드를 사용해 /todos/:id/done 주소로 요청을 보낸다. 여기서 :id는 완료 상태를 변경할 할 일의 고유한 ID이며, 사용자가 <input> 입력 요소에 직접 입력하도록 구성되어 있다. 이 요청은 해당 할 일의 done 값을 반대로 바꾸는 역할을 한다. 즉, true면 false로, false면 true로 전환되며, 마치 스위치를 켜고 끄는 것처럼 완료 상태를 토글하는 기능이다. 이 작업은 별도의 데이터를 전송할 필요 없이 요청 주소에 ID 값만 포함하면 된다. 요청이 성공하면 응답으로 받은 done 값을 기준으로 todos 상태를 업데이트해 화면에 최신 상태를 반영한다.
        try {
            const response = await fetch(`http://localhost:3000/todos/${todoId}/done`, {
                method: 'PATCH',
            })
            const data = await response.json()
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            setTodos(
                prerenderToNodeStream.map((todo) => todo.id === Number(todoId) ? { ...todo, done: data.done } : todo)
            )
        } catch (error) {
            console.error(error)
        }
    }
    // PUT 요청: 할 일 수정
    const updateTodo = async () => { // 할 일을 수정하는 함수이다. 이 함수는 PUT 메서드를 사용해 /todos/:id 주소로 요청을 보낸다. 여기서 :id는 수정할 할 일의 고유한 ID이다. 수정할 내용을 보낼 때는 body 속성에 title 값을 담아 함께 전송한다. 그러면 백엔드는 해당 ID의 할 일을 찾아 title값을 새로운 내용으로 덮어씌운다. 요청이 성공하면 서버는 수정된 할 일 데이터를 응답으로 보내준다. 이 데이터를 받아 기존 todos 상태에서 해당 항목만 업데이트하면 다시 GET 요청을 보내지 않고도 화면이 최신 상태로 유지된다.
        try {
            const response = await fetch(`http://localhost:3000/todos/${todoId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: 'Updated Todo',
                }),
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            setTodos(todos.map((todo) => (todo.id === Number(todoId) ? data : todo)))
        } catch (error) {
            console.error(error)
        }
    }
    // DELETE 요청: 할 일 삭제
    const deleteTodo = async () => { // 할 일을 삭제하는 함수이다. 이 함수는 DELETE 메서드를 사용하여 /todos/:id 주소로 요청을 보낸다. :id는 삭제할 할 일의 고유한 ID이며, 요청 주소의 일부로 포함되는 동적 세그먼트이다. 요청이 성고하면 서버는 해당 ID의 할 일을 삭제한다. 이때는 별도의 데이터를 요청하거나 응답을 처리할 필요가 없다. 응답으로 반환된 값을 사용하지 않기 때문에 클라이언트에서 filter() 메서드를 사용해 todos 상태에서 해당 항목을 제거하면 된다. 이렇게 하면 다시 GET 요청을 보내지 않아도 화면이 최신 상태로 유지된다.
        try {
            const response = await fetch(`http://localhost:3000/todos/${todoId}`, {
                method: 'DELETE',
            })
            if (!response.ok) {
                throw new Error('Netswork response was not ok')
            }
            setTodos(todos.filter((todo) => todo.id !== Number(todoId)))
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <h1>Todos</h1>
            <pre>{JSON.stringify(todos)}</pre>
            {/* ID 입력칸 */}
            <div>
                <input type='text' value={todoId} onChange={(e) => setTodoId(e.target.value)} />
            </div>
            {/* API 호출 버튼: 버튼 클릭 시 각 함수 실행 */}
            <button onClick={getTodos}>Get Todos(GET)</button>
            <button onClick={postTodo}>Insert Todos(POST)</button>
            <button onClick={toggleTodo}>Toggle Todos(PATCH)</button>
            <button onClick={updateTodo}>Update Todos(PUT)</button>
            <button onClick={deleteTodo}>Delete Todos(DELETE)</button>
        </div>
    )
}
