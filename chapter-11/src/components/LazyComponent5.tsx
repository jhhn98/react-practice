export default function LazyComponent5() {
    const random = Math.floor(Math.random() * 2) + 1
    if (random === 1) {
        throw new Error('random number is 1')
    }
    return <div>LazyComponent5</div>
}