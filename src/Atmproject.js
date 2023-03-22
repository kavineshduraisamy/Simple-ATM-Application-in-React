import {useState} from 'react';
export default function App(){
  const[Depos,setDepos]=useState()
  const[value,setValue]=useState()
  const[amount,setAmount]=useState(0)

  const Deposit=()=>{
    if(value>0) setAmount(Number(value)+amount)
    alert(`Deposite Amount ${value}`)
    alert(`Total Amount ${(Number(value)+amount)}`)
  }
  const cashback=()=>{
   if(value<amount)setAmount(amount-Number(value))
   alert(`Withdraw Amount ${value}`)
   alert(`Total Amount ${(amount-Number(value))}`)
  }
  return(
   <><form>
    <p>Refresh here to see your changes</p>
       <h1>Account Balance $ {amount}</h1>
       <p>Select an action below to continue</p>
    <select onChange={(event)=>{
      setDepos(event.target.value)
    }}>
      <option></option>
      <option value="Deposit">Deposit</option>
      <option value="Cash Back">Cash Back</option>
      </select><br/><br/>
      {Depos==='Deposit' ?(
        <label><h1>{Depos}</h1>{}
        <input type="number" onChange={(e)=>setValue(e.target.value)}/>
        <input type="button" value="submit" disabled={!value} onClick={Deposit}/>
        </label>
      ):null}
      {Depos==='Cash Back' ?(
        <label><h1>{Depos}</h1>{}
        <input type="number" onChange={(e)=>setValue(e.target.value)}/>
        <input type="button" value="submit" disabled={!value} onClick={cashback}/>
        </label>
      ):null}
      </form> 
    </>
  )
}
