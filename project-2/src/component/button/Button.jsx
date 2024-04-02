
import style from './button.module.css'
const Button = (props) => {
  return (
    <>
    <button className={style.primary_btn}>

    {props.icon}{props.text}
    </button>
    </>
  )
}

export default Button