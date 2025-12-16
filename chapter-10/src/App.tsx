//import Input from './components/Input'
//import Mount from './components/Mount'
//import { useState } from 'react'
//import Unmount from './components/Unmount'
//import Update from './components/Update'
//import LifeCycle from "./components/LifeCycle"
//import FetchUser from "./components/FetchUser"
//import Timer from "./components/Timer"
//import ScrollTracker from "./components/ScrollTracker"
//import AutoSaveForm from "./components/AutoSaveForm"
import WebSocketComponent from "./components/WebSocketComponent"
/* Unmount
export default function App() {
    const [show, setShow] = useState(true)
    // show라는 상태 값을 정의한다.
    return (
        <>
            {show && <Unmount/>}
            show 값이 true일 때만 Unmount 컴포넌트를 렌더링한다. 처음 실행하면 show의 초깃값이 true 이므로 Unmount 컴포넌트가 화면에 표시된다. 이때  <StrictMode>가 적용되기 때문에 useEffect 훅이 두 번 실행되고 콘솔에는 'Unmounted' 메시지가 한 번 출력된 상태이다.
            <button onClick={() => setShow(!show)}>Toggle</button>
            [Toggle] 버튼을 클릭해 show 값을 false로 변경하면 Unmount 컴포넌트가 화면에서 제거(언마운트)된다. 이 시점에 useEffect 훅의 설정 함수에서 반환한 클린업 함수가 실행되고 콘솔에는 다시 'Unmounted' 메시지가 출력된다.
        </>
    )
}
*/
export default function App() {
    return (
        <>
            <WebSocketComponent/>
        </>
    )
}