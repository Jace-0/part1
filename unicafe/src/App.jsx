import { useState } from "react"

const Header = () => {
  return (
    <h1>give feedback</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick} >{props.text}</button>
  )
}

const Statistics = ({good, neutral, bad, total, average, positivePercentage}) => {
  if (total === 0){
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='all' value={total}/>
      <StatisticLine text='average' value={average}/>
      <StatisticLine text='positive' value={`${positivePercentage} %`}/>      
    </>
  )
}


const StatisticLine = ({text, value}) => {
  return (
    <div>
    <table>
      <tbody>
        <tr>
          <td>{text}</td> 
          <td>{value}</td>
        </tr>
        </tbody>
      </table>
      </div>

  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicks = () => {
    const updateGood = good + 1
    setGood(updateGood)
  }

  const handleNeutralClicks = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
  }

  const handleBadClicks = () => {
    const updateBad = bad + 1
    setBad(updateBad)
   
  }

  const total = good + neutral + bad;
  const average = (good*1 + neutral*0 + bad*-1) / total
  const positivePercentage = (good / total) * 100 || 0


  return (
    <div>
      <Header/>
      <Button handleClick= {handleGoodClicks} text = 'good'/>
      <Button handleClick= {handleNeutralClicks} text = 'neutral'/>
      <Button handleClick= {handleBadClicks} text = 'bad'/>

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad ={bad} total ={total} average ={average} positivePercentage ={positivePercentage}/>
      

      
    </div>
  )
}
export default App
