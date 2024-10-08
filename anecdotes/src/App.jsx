import { useState } from 'react'

const Vote = ({voteCount}) => {
  return (
    <p>has {voteCount} votes</p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [array, setToArray] = useState(Array(anecdotes.length).fill(0))
  console.log(array)


  const randomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex)
  }

  const VoteAnecdote = () => {
    const newCopy = [...array]
    newCopy[selected] +=1
    setToArray(newCopy)

  }


  const Header = () => {
    return(
      <h1>Anecdote of the day</h1>
    )
  }

  const MostVoteAnecdote = () => {
    const mostVote = Math.max(...array)
    return(
      <>
        <p>{anecdotes[array.indexOf(mostVote)]}</p>
        <p>has {mostVote} votes</p>
      </>
    )
  }

  return (
    <div>
      <Header/>
      {anecdotes[selected]}
      <Vote voteCount={array[selected]} />
      <button onClick={VoteAnecdote}>vote</button>
      <button onClick={randomAnecdote}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <MostVoteAnecdote/>
      
    </div>
  )
}

export default App

