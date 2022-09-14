import classNames from "classnames"

const Button = ({text, inputData, setInputData, value}) => {
  return (
    <button onClick={() => setInputData({...inputData, tip:value})} className={classNames({
        'tip-button':true,
        'tip-button-active': inputData.tip === value
      })}>{text}</button>
  )
}

export default Button