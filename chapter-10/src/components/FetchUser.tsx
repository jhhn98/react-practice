import { useEffect } from 'react'

export default function FetchUser() {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')// 외부 API에 GET 요청
        .then((response) => response.json())// 응답을 JSON 형식으로 파싱
        .then((data) => console.log(data))// 받아온 데이터는 콘솔에 출력
    }, [])
    return (
        <>
            <div>FetchUser</div>
        </>
    )
}