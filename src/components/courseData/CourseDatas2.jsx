import SecondHeader from '../headers/SecondHeader'
import Part from '../Part'

export const CourseDatas2 = ({courses}) => {
   
    
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
