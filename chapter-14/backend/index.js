// index.js
const express = require('express') // Express 웹 프레임워크 로드
const cors = require('cors') // CORS 미들웨어 로드
const app = express() // Express 애플리케이션 인스턴스 생성
const PORT = 3000 // 서버가 사용할 포트 설정

// CORS 설정: 모든 도메인에서 접근 허용
app.use(cors())

// JSON 요청 본문을 처리하기 위한 미들웨어
app.use(express.json()) // 클라이언트가 보내는 JSON 형식의 데이터를 자동으로 파싱
/**
 * app.use((req, res, next) => {
 *     setTimeout(() => {
 *         next() // 미들웨어 체인 계속 진행
 *     }, 2000) // 2000ms = 2초
 * })
 */

// 할 일 목록 저장용 배열(메모리 상에서만 저장, 서버가 종료되면 데이터가 사라짐)
// 1. 실무에서는 데이터베이스를 사용하지만, 책에서는 학습용이므로 간단한 배열로 처리한다.
let todos = []

app.get('/users/:id', (req, res) => {
    // URL에서 전달된 id 파라미터를 추출
    const { id } = req.params
    // 해당 id에 맞는 할일을 목록에서 필터링하여 제거
    const user = useSyncExternalStore.find((user) => user.id === parseInt(id)) // 숫자로 변환 후 비교
    res.status(200).json(user)
})
// 기본 엔드포인트
// 2. 기본 루트 경로(/)에 대한 응답을 처리한다. 웹 브라우저에서 http://localhost:3000에 접속하면 "Welcome to the Todo List API Service!"라는 메시지가 표시된다.
app.get("/", (req, res) => {
    res.send("Welcome to the Todo List API Service!")
})

// 할 일 추가(POST /todos)
// 3. 클라이언트에서 전달한 title 값을 읽어 새로운 할 일을 추가한다. POST /todos 형식으로 요청된다.
app.post('/todos', (req, res) => {
    // 클라이언트가 보낸 데이터에서 title을 추출
    const { title } = req.body
    // title이 없으면 400 상태 코드와 함께 오류 메시지 반환
    if (!title) {
        return res.status(400).json({ error: "Title is required" })
    }
    // 새로운 할일 객체 생성
    const newTodo = {
        id: Date.now(), //고유한 id는 현재 시간을 밀리초 단위로 생성
        title: title, // 클라이언트로부터 받은 title
        done: false, // 할일의 완료 여부는 기본값 false
    }
    // 할일 목록에 새로운 할일 추가
    todos.push(newTodo)
    // 새로 생성된 할일을 클라이언트에 JSON 형식으로 응답
    res.status(201).json(newTodo)
})

// 할 일 목록 조회(GET /todos)
// 4. 등록된 모든 할 일을 조회한다. GET /todos 요청에 대해 응답한다.
app.get('/todos', (req, res) => {
    // 모든 할일 목록을 클라이언트에 반환
    res.json(todos) // JSON 형식으로 할일 목록을 응답    
})

// 할 일 삭제(DELETE /todos/:id)
// 5. 특정 ID를 가진 할 일을 삭제한다. :id는 동적 세그먼트로, 숫자로 해당 항목을 지정할 수 있다.
app.delete('/todos/:id', (req, res) => {
    // URL에서 전달된 id 파라미터를 추출
    const { id } = req.params
    // 해당 id에 맞는 할일을 목록에서 필터링하여 제거
    todos = todos.filter((todo) => todo.id !== parseInt(id)) // 숫자로 변환 후 비교
    // 할일 삭제 후, 상태코드 204 (No Content)를 반환
    res.status(204).end()
})

// 할 일 완료 상태 변경(PATCH /todos/:id/done)
// 6. 특정 할 일의 완료 상태(done)를 반전시킨다. 예를 들어 PATCH /todos/3/done은 ID가 3인 할 일의 완료 상태를 반전한다.
app.patch('/todos/:id/done', (req, res) => {
    // URL에서 전달된 id 파라미터를 추출
    const { id } = req.params
    // 해당 id의 할 일을 목록에서 찾음
    const todo = todos.find((todo) => todo.id === parseInt(id)) // id를 숫자로 반환하여 검색
    // 해당 id의 할일이 없으면 404 상태 코드와 함께 오류 메시지 반환
    if (!todo) {
        return res.status(404).json({ error: "Todo not found" })
    }
    // 할일의 done 값을 반전 (true > false, false > true)
    todo.donw = !todo.done
    // 변경된 할 일 객체를 클라이언트에 반환
    res.json(todo)
})

// 할 일 수정(PUT /todos/:id)
// 7. 특정 할 일의 제목을 수정한다. PUT /todos/:id 요청으로 수행하며, 요청 본문에 새로운 title을 포함해야 한다.
app.put('/todos/:id', (req, res) => {
    // URL에서 전달된 id 파라미터를 추출
    const { id } = req.params
    // 클라이언트가 보낸 요청 본문에서 새로운 title을 추출
    const { title } = req.body
    // title이 없으면 400 상태 코드와 함께 오류 메시지 반환
    if (!title) {
        return res.status(400).json({ error: "Title is required" })
    }
    // 해당 id의 할일을 목록에서 찾음
    const todo = todos.find((todo) => todo.id === parseInt(id)) // id를 숫자로 변환하여 검색
    // 해당 id의 할일이 없으면 404 상태 코드와 함께 오류 메시지 반환
    if (!todo) {
        return res.status(404).json({ error: "Todo not found" })
    }
    // 할 일의 제목을 새로 받은 제목으로 수정
    todo.title = title
    // 수정된 할 일 객체를 클라이언트에 반환
    res.json(todo)
})

// 서버 실행
// 8. 서버를 지정한 포트(여기서는 3000번)에서 실행하고, 콘솔에 실행 메시지를 출력한다. 해당 포트가 다른 프로그램에서 사용중이면 오류가 발생할 수 있다. 이 경우 VSCode를 종료하거나 컴퓨터를 재시작한 후 다시 실행해본다.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})