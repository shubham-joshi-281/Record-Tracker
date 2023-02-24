import logo from '../Images/logo.png'
function Header(){
    return(
        <>
        <div className='header'>
        <div className='left-section'>
        <div class="fa-solid fa-bars bar" title='Main-Menu'></div>
        <img src ={logo} className='logo' alt="logo" title='keep'/>
        <div className='heading' title='keep' >Keep</div>
        </div>
        <div className='middle-section'>
        <i class="fa-solid fa-magnifying-glass search" title='Search'></i>
            <input type="text" className='header-input' placeholder='search-bar'/>
        </div>
<div className='right-section'>
        <i class="fa-solid fa-rotate-right"></i>
        <i class="fa-solid fa-gear"></i>
        <i class="fa-solid fa-list"></i>
        <i class="fa-regular fa-user"></i>
</div>
        </div>
        </>
    )
}
export default Header