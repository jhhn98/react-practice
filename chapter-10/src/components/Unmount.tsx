import { useEffect } from 'react'

export default function Unmount() {
    useEffect(() => {
        return () => {
            console.log('Unmounted')
        }
    }, [])
    return (
        <>
            <div>UnMount</div>
        </>
    )
}