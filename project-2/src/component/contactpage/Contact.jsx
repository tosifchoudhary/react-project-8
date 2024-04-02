import { FaRegMessage } from "react-icons/fa6";
import Button from '../button/Button'
import  style from './contact.module.css'
import { MdAddIcCall } from "react-icons/md";
import Buttonsec from "../buttonsec/Buttonsec";
import Email from "../emailform/Email";





const Contact = () => {
  return (
    <> 
    <div className={`section-p2 ${style.container}`}>
        <div className={style.left}>
            <div className={style.button}>
        <Button text='VIA SUPPORT CHAT' icon={<FaRegMessage fontSize="24px"/>}/>
        <Button text='VIA CALL' icon={<MdAddIcCall fontSize="24px"/>}/>
        </div>
        
       <Buttonsec/>
       <Email text1='name' text2='email' text3='text'/>
       <div className={style.cbtn}>
       <Button  text='Submit'/>
       </div>
       
        </div>
        <div className={style.right}>
        <img src="/image/contactpng.png"/>
            {/* <div className={style.img}></div> */}
          
        </div>
    
    </div>
    </>
  )
}

export default Contact