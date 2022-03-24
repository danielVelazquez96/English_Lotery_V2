
import './Nav.css'; //stylesheet

const Nav=({page,changePage})=>{
    return(
        <nav className='nav'>
            <button className='button-searchLotery'>Search Lotery</button>
            <h1 className='title'>English Lotery</h1>
            <button className='button-createLotery' onClick={() => { changePage('CreateALotery') } } >{page=='CreateALotery'?'Check Template':'Create Lotery'}</button>
        </nav>
    )
}

export default Nav; 
