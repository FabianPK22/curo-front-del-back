import FirstHeader from '../headers/FirstHeader'
import Part from '../Part'

export const CourseDatas1 = ({courses}) => {


  return (
    <div>
<FirstHeader courses={courses}/>
<ul>
  {courses[0].parts.map((part, index) => (
      <li key={index} data-index={index}>
        <Part name={part.name} exercises={part.exercises} /></li>
    ))}
</ul>  
</div>
  )
}
