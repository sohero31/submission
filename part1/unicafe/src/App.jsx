/* eslint-disable react/prop-types */
import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <>
        <tr> 
            <td>{text} </td>
            <td>{value} </td>
          </tr>
    </>
  )
}
const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  let average = 0
  let positive = 0
  if (all !== 0) {
    average = (good*1 + neutral*0 + bad*(-1)) / all
    positive = good / all * 100

    return (
      <table>
        <tbody>
        <StatisticLine text = "good" value = {good} />
        <StatisticLine text = "neutral" value = {neutral} />
        <StatisticLine text = "bad" value = {bad} />
        <StatisticLine text = "all" value = {all} />
        <StatisticLine text = "average" value = {average} />
        <StatisticLine text = "positive" value = {positive + " %"} />
        </tbody>
      </table>
    )
  }
  return (
    <div>
      <h4>No feedback given</h4>
    </div>
  ) 
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGood = () => {
    const updatedGood = good + 1 
    setGood(updatedGood)
  }

  const handleNeutral = () => {
     const updatedNeutral = neutral + 1 
     setNeutral(updatedNeutral)
   }

   const handleBad = () => {
     const updatedBad = bad + 1 
     setBad(updatedBad)
   }

  return (
    <div>
      <h1>give feedback</h1>
      
      <Button handleClick= {handleGood} text = "good" />
      <Button handleClick= {handleNeutral} text = "neutral" />
      <Button handleClick= {handleBad} text = "bad" />
      
      <h1>statistics</h1>

      <Statistics good = {good} neutral = {neutral} bad = {bad} /> 
      

    </div>
  )
}

export default App