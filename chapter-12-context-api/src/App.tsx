// App.tsx
/* import Auth from './components/Auth'
import Count from './components/Count'
import AuthProvider from './providers/AuthProvider'
import CountOutsideDisplay from './components/CountOutsideDisplay'
import CountProvider from './providers/CountProvider'

export default function App() {
    console.log('App rendering')
    return (
        <>
            <AuthProvider>
                <CountProvider>
                    <Count />
                    <CountOutsideDisplay />
                    <Auth />
                </CountProvider>
            </AuthProvider>
        </>
    )
} */
// App.tsx 12.2.7 Context API 사용 시 주의사항
import Auth from './components/Auth'
import Count from './components/Count'
import AuthProvider from './providers/AuthProvider'
import CountOutsideDisplay from './components/CountOutsideDisplay'
import CountProvider from './providers/CountProvider'

export default function App() {
    console.log('App rendering')
    return (
        <>
            <AuthProvider>
                <CountProvider>
                    <Count />
                    <Auth />
                </CountProvider>
                <CountOutsideDisplay />
            </AuthProvider>
        </>
    )
}