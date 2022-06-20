import styled from "styled-components"
const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const Left = styled.div`
    flex : 1;
`
const Center= styled.div`
    flex : 1;
`
const Right = styled.div`
    flex : 1;
`

const Footer  = () =>{
    return(
        <Container>
            <Left>
                <Logo></Logo>
            </Left>
            <Center></Center>
            <Right></Right>
        </Container>
    )
}
export default Footer