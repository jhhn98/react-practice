// main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 생성한 스토어 객체를 불러온다.
import { store } from '../../chapter-12-redux/src/store/store.ts'
// react-redux 패키지에서 제공하는 Provider 컴포넌트를 불러온다. 이 컴포넌트는 리액트 애플리케이션에 Redux 스토어를 연결하는 역할을 한다.
import { Provider } from 'react-redux'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* App 컴포넌트를 Provider로 감싸고, store 속성으로 스토어를 전달한다. 이렇게 하면 App 컴포넌트와 그 하위에 있는 모든 컴포넌트에서 스토어에 접근할 수 있다. */}
    <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>,
)