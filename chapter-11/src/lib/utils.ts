// lib 폴더는 주로 로직 처리나 외부 유틸리티 관련 함수를 모아둘 때 사용한다.
export const initialItems = new Array(29_999_999).fill(0).map((_,i) => {
    return {
        id: i,
        selected: i === 29_999_998,
    }
})
