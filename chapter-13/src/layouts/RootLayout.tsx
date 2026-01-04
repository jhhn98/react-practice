// RootLayout.tsx
import { useEffect } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router'

export default function RootLayout() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/about')
        }, 3000)
    }, [navigate])
    return (
        <>
            <header>Header</header>
            <nav>
                {/* <Link> 컴포넌트는 페이지 이동만 처리하고 현재 경로가 일치하는지 여부는 알 수 없다*/}
                <Link to='/'>Home</Link>
                <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
                <NavLink to='/my/dashboard' style={({ isActive }) => ({ color: isActive ? 'red' : 'black'})}>Dashboard</NavLink>
                <NavLink to='/my/dashboard/settings'>
                {({ isActive }) => <span>settings({isActive && 'selected'})</span>}
                </NavLink>
            </nav>
            <Outlet />
            <footer>Footer</footer>
        </>
    )
}