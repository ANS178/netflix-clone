import React, { useEffect, useState } from 'react'
import '../styles/Nav.css'

const Nav = () => {

    const [transition, setTransition] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                setTransition(true);
            }else{
                setTransition(false);
            }
        });
        return () => {
            console.log("done")
        };
    },[]);


  return (
    <div className={`nav ${transition && 'nav_scroll'}`}>
      <img
        className='nav_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158'
        alt='Netflix Logo'
      />
      <img
        className='nav_avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
        alt='Netflix Avatar'
      />
    </div>
  )
}

export default Nav
