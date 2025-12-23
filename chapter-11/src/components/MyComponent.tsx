import { prefetchDNS, preconnect, preload, preinit } from 'react-dom'

function MyComponent() {
    preinit('https://.../path/to/some/script.js', { as: 'script' }) // 외부 스크립트 미리 실행
    preload('https://.../path/to/font.woff2', { as: 'font' }) // 웹 폰트 미리 로드
    preload('https://.../path/to/stylesheet.css', { as: 'style' }) // 스타일시트 미리 로드
    prefetchDNS('https://...') // DNS 조회 사전 수행
    preconnect('https://...') // 서버와 사전 연결 설정

}

