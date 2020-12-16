import { useState } from "react";
import axios from "axios"

function App() {

  const [formData, setFormData] = useState({
    todo: ''
  })

  const { todo } = formData

  const onChange = e => {setFormData({
    ...formData, [e.target.name]: e.target.value 
  })}

  const onSubmit = async e => {
    e.preventDefault()
    const res = await axios.post( '/todo', {todo} )
    setFormData({ ...formData, todo: '', })
    alert(`server res: ${res.data.todo}` )
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} name="todo" placeholder="input" required /> <br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
