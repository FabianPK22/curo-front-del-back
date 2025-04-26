import SecondHeader from '../headers/SecondHeader'
import Part from '../Part'

export const CourseDatas2 = ({courses}) => {
  const course1 = courses[0]
  if (!course1) return null
    
  return (
    <div>
    <SecondHeader courses={courses}/>
    <ul>
      {courses[1].parts.map((part, index) => (
          <li key={index} data-index={index}>
            <Part name={part.name} exercises={part.exercises} /></li>
        ))}
    </ul>
    </div>
  )
}
