import React, { useState } from 'react'

const Statistics = ({good, neutral, bad, total, points}) => {
  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>no feedback given</p>
      </div>
    )
  }
  
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
        <StatisticLine text='good' value={good}/> 
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='all' value={total}/>
        <StatisticLine text='average' value={points / total}/>
        <StatisticLine text='positive' value={((good / total)*100)}/>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  if (text === 'positive') {
    return (
      <tr>
        <td height="15">
          {text}
        </td>
        <td>
          {value} %
        </td>
      </tr>
    )
  }
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </tr>
  )
}


const Button = ({text, func}) => {
  return (
      <button onClick={func}>
        {text}
      </button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [points, setPoints] = useState(0)

  const increaseGoodByOne = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setPoints(points + 1)
  }

  const increaseNeutralByOne = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    setPoints(points + 0)
  }

  const increaseBadByOne = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setPoints(points - 1)
  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button text='good' func={increaseGoodByOne}/>
        <Button text='neutral' func={increaseNeutralByOne}/>
        <Button text='bad' func={increaseBadByOne}/>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} points={points}/>
    </div>
  )
}

export default App