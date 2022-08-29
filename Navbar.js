import React from 'react'


const Navbar = () => {
  return (
    <div>
        <nav>
             <ul>
                <li> <a className="active" href="/">Home</a> </li>
                <li> <a href="About">About</a> </li>
                <li> <a href="Table">Table</a> </li>
                <li> <a href="Output">Output Snapshot</a> </li>
             </ul>  
        </nav>
       
    </div>
  )
}
export default Navbar
