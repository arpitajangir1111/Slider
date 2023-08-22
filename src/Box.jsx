import React ,{useState} from 'react'

function Box() {
  const [height, setHeight]=useState('')
  const [width, setWidth]=useState('')
  const [backgroundColor, setBackgroundColor]= useState('')
  const [styles,setCustomStyle] = useState("");

  function setStyles(){
    const obj = {width: width+"px", height: height + "px",backgroundColor: backgroundColor}
    setCustomStyle(obj)
  }
  return (
    <div>
<input type="text" value={width}onChange={(e)=>setWidth(e.target.value)} />
<input type="text" value={height}onChange={(e)=>setHeight(e.target.value)} />
<input type="text" value={backgroundColor}onChange={(e)=>setBackgroundColor(e.target.value)} />
<button onClick={setStyles}>Create Box</button>
<div style={styles}></div>
    </div>
  )
}

export default Box