// App.tsx
import { Navigate, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Summary from './pages/Summary'
import Settings from './pages/Settings'
import RootLayout from './layouts/RootLayout'
import Team from './pages/Team'
import NotFound from './pages/NotFound'

export default function App() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/team/:teamId/group/:groupId' element={<Team />} />
                <Route path='my'>
                    <Route path='dashboard' element={<Dashboard />}>
                        {/* index 속성은 부모 경로의 기본 자식 컴포넌트를 지정할 때 사용한다. /dashboard 경로로 접근하면 Dashboard와 함께 Summary도 렌더링된다. */}
                        <Route index element={<Summary />} />
                        <Route path='settings' element={<Settings />} />
                    </Route>
                </Route>
            </Route>
            {/* /not-found 경로에 접속하면 NotFound 컴포넌트가 렌더링되도록 한다. */}
            <Route path='/not-found' element={<NotFound />} />
            {/* 일치하는 path가 없으면 Navigate 컴포넌트를 사용해 /not-found 경로로 이동하도록 지정한다. */}
            <Route path='*' element={<Navigate to='/not-found' />} />
        </Routes>
    )
}