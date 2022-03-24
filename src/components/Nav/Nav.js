
import styled from 'styled-components'


// Styled components
const NavContainer=styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: radial-gradient(circle, #6b98d1, #5f92d6, #538cdb, #4885df, #3f7ee3, #3388ec, #2392f5, #009cfe, #00b8ff, #00d0ff, #00e7fc, #5ffbf1);;
    box-shadow: 1px 2px 10px rgb(0,0,0,0.3);
    border-radius: 0px 0 10px 10px ;
    position: sticky;
    top: 0;
    z-index: 2;
`
const NavTitle=styled.h1`
    text-align: center;
    color: white;
    font-size: 65px;
`
const PagesContainer=styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`
const PageButton=styled.button`    
    background-color: transparent;
    color: #fff;
    font-size: 18px;
    padding: 0 0 5px 0;
    border: none;
    font-weight: 500;
    transition: all 0.2s ease;
    width: 100%;
    border-radius: 10px;

    &:hover{
        background-color: rgb(256,256,256,0.15);
        color: rgb(0,0,0,.6);
    }
`

// Coponent
const Nav=({changePage})=>{
    return(
        <NavContainer primary>
            <NavTitle>English Lotery</NavTitle>
            
            <PagesContainer>
                <PageButton onClick={()=>changePage('SearchLotery')}>Search Lotery</PageButton>
                <PageButton onClick={()=>changePage('Template')}>Template</PageButton>
                <PageButton onClick={()=>changePage('CreateALotery')}>Create A Card</PageButton>
            </PagesContainer>
            
        </NavContainer>
    )
}

export default Nav; 
