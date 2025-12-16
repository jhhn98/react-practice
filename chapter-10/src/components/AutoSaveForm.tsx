import { useEffect, useState } from 'react'

export default function AutoSaveForm() {
    const [formData, setFormData] = useState('')
    // 컴포넌트가 처음 마운트될 때 한 번만 실행된다. 로컬 저장소(localStorage)에 저장된 값이 있다면 불러와서 formData 상태에 설정한다.
    useEffect(() => {
        const savedData = localStorage.getItem('savedFormData')
        if (savedData) {
            setFormData(savedData)
        }
    }, [])
    // formData 상태가 변경될 때마다 실행된다. 입력 값이 변경되면 1초 뒤에 localStorage에 자동으로 저장되도록 setTimeout()을 사용한다. 그리고 저장 직전에 이전 타이머를 clearTimeout()으로 제거해 불필요한 중복 저장을 방지한다.
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            localStorage.setItem('savedFormData', formData)
        }, 1000)
        return () => clearTimeout(timeoutId)
    }, [formData])
    return (
        <>
            <textarea value={formData} onChange={(e) => setFormData(e.target.value)} placeholder='입력한 내용을 자동으로 저장합니다'></textarea>
        </>
    )
}