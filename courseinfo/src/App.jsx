const Header = ({course}) => {
  return (
      <h1>{course.name}</h1>
  )

}

const Part = ({name, exercises}) => {
  return (
    <>
      <p>
      {name} {exercises}
      </p>
    </>
  )
}

const Content = ({course}) => {
  const parts = course.parts
  return (
    <div>
      {parts.map((parts, index) => (
        <Part key={index} name={parts.name} exercises={parts.exercises} />)
        )}
    </div>
  );
};

const Total = ({course}) => {
  const parts = course.parts
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
  return(
  <p>Number of exercises {totalExercises}</p>)
}

const App = () => {
  const course ={
    name :'Half Stack application development',
    parts: [
    {
    name: 'Fundamentals of react',
    exercises : 10
  }, 
  {
    name : 'Using props to pass data',
    exercises : 7}, 
    {
    name : 'State of a component',
    exercises : 14}
  ]
}


  return (
    <div>
      <Header course ={course} />
      <Content course = {course}/>
      <Total course = {course} />
    </div>
  )
  
}

export default App
