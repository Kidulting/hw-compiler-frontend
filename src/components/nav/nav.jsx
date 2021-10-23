import styled from 'styled-components'

function Nav () {
    return <Wrapper>네비게이션 바입니다</Wrapper>;
}

const Wrapper = styled.div`
    width: 200px;
    height: 100%;
    // 임시 테두리, 추후 삭제 필요
    border: red 1px solid;
`

export default Nav;