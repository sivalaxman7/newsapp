import Link from "next/link";
import react from "react";

const Navbar =()=>{

  const date = new Date();
  const showTime = date.getHours() 
      + ':' + date.getMinutes() 
      + ":" + date.getSeconds();

  const current = new Date();  
  const date1 = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
    return(<nav>

      <div>
        <h4 align="center"> 🕐 {showTime}</h4>
        <h4>Day: {date1}</h4>
      </div>

        <h2 className="toptitle">Cogo News Application</h2>
        <ul>
          <Link href={'blogview/form'}><a>Add Article</a></Link>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>)
}
export default Navbar