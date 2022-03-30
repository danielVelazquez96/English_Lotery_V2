
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

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
const PageLink=styled(NavLink)`   
    font-family: 'Lato';
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    text-decoration:none;
    color:#eee;
    font-weight: 400;
    border-radius: 5px;
    transition: all 0.2s ease;
    font-size: 20px;
    margin: 1px 5px;
     
    &:hover{
        background-color: rgb(256,256,256,0.3); 
        color: #fff;
    }
    &[aria-current="page"]{
        background-color: rgb(256,256,256,0.4); 
        color: #555;
    }
`

const Link= ({page}) => { 
    return(
        <PageLink to={`/${page}`}>{page}</PageLink>  
    )
 }



// Coponent
const Nav=()=>{
    return(
        <NavContainer primary>
            <NavTitle>English Lotery</NavTitle>
            
            <PagesContainer>
                <Link  page={'Search'}/>
                <Link  page={'Template'}/>
                <Link  page={'Create-A-Lotery'}/>
            </PagesContainer>
            
        </NavContainer>
    )
}

export default Nav; 
