
import './Nav.css'; //stylesheet

const Nav=({page,changePage})=>{
    return(
        <div className='nav'>
            <button className='button-searchLotery'>Search Lotery</button>
            <h1 className='title'>English Lotery</h1>
            <button className='button-createLotery' onClick={changePage} >{page.template?'Create Lotery':'Check Template'}</button>
        </div>
    )
}

export default Nav;
