import "./Navbar.css"

function Navbar(){
    return (
<div>
        <div id="navbar_Container">
            <h2>V Solutions</h2>
        <input type="text" Placeholder="Search"/>
            <div>
              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
              <p>Services</p>
              </div>  
        
             <div>
                <span>Login</span>
                <span>Signup</span>

            </div>
            </div>
             <h2><center>Welcome to V Solutions</center></h2> 
             <div>
             <p style={{textAlign:"center"}}>V Solutions Global provides total business solutions to mid-sized companies 
                aiming to enter Asian markets.Their services include sourcing,supply chain management, market entry, business development, and engineering, with a strong presence in countries like China, India, Japan, Korea </p>
             <img src="https://media.licdn.com/dms/image/v2/C4D0BAQHqVo7AXy8xpQ/company-logo_200_200/company-logo_200_200/0/1668969855922?e=2147483647&v=beta&t=pQyphDU_boofTbvZD5USWFRqok8ZVZR2_HWrOJCuv3c" alt=""
               style={{textAlign:"center",marginInlineStart:"500px" }}/>

            

             
              </div>


</div>
)

    
    
}
export default Navbar
