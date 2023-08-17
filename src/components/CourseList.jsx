import { useSelector, useDispatch } from 'react-redux'
import { removeCourse } from '../store/slice/courseSlice';

function CourseList() {
  const dispatch = useDispatch();
  const courses = useSelector(({ courses:{data,searchTerm}}) => {
    const filteredCourses = data.filter((course) => course.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return filteredCourses;
   
  })

  const renderedCourses = courses.map((course) => {
    return (
      <div key={course.id} className='panel'>
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.cost}₺</p>
        <button className='button is-danger' onClick={()=>{
          dispatch(removeCourse(course.id))}}>Sil</button>
      </div>
    )
  })

  return (
    <div className='courseList'>
      {renderedCourses}
    </div>
  )
}

export default CourseList