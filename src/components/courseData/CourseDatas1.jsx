import FirstHeader from '../headers/FirstHeader'
import Part from '../Part'

export const CourseDatas1 = ({courses}) => {
  const course1 = courses[0]
  if (!course1) return <h1>Cargando</h1> 

  return (
    <div>
<FirstHeader courses={courses}/>
<ul>
  {course1.parts.map((part, index) => (
      <li key={index} data-index={index}>
        <Part name={part.name} exercises={part.exercises} /></li>
    ))}
</ul>  
</div>
  )
}
