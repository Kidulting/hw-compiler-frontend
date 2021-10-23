import styled from 'styled-components'
import Nav from '../../components/nav/Nav'


function Main(){
    return(
        <Wrapper>
            <Nav/>
            메인페이지 
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
    height: 100vh;
    width: 100vw;
`

export default Main;