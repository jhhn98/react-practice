import { useRef, useEffect } from 'react'

export default function ScrollDivReact18() {
    const divRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleScroll = () => {
            if (divRef.current) {
                console.log('div scrollTop: ', divRef.current.scrollTop)
            }
        }
        const currentDiv = divRef.current
        currentDiv?.addEventListener('scroll', handleScroll)
        return () => {
            currentDiv?.removeEventListener('scroll', handleScroll)
        
        }
    }, [])
    return (
        <div ref={divRef} style={{border: '1px solid black', width: '200px', height: '100px', overflowY: 'scorll'}}>
            {[...Array(20).map((_, i) => (<p key={i}>Item {i + 1}</p>))]}
        </div>
    )
}