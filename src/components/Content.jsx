import Total from './totales/Total'
import SecondTotal from './totales/SecondTotal'
import { CourseDatas1 } from './courseData/CourseDatas1'
import { CourseDatas2 } from './courseData/CourseDatas2'


const Content = ({courses}) => {
  
  if (!courses || courses.length < 2) {
    return <p>Cargando cursos…</p>
  }

  return (

    <>
      <CourseDatas1 courses={courses}/>
      <Total  courses={courses}/> 
      <CourseDatas2 courses={courses}/>
      <SecondTotal courses={courses}/>
    </>

  )
}

export default Content