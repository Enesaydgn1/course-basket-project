import { useSelector } from 'react-redux'

function CourseValue() {
  const totalCost = useSelector(({ courses: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) => course.name.toLowerCase().includes(searchTerm.toLowerCase()))
    let cost = 0;
    for (let course of filteredCourses) {
      cost += course.cost;
    }
    return cost;
  })

  return (
    <div className='coursePrice'>Toplam Fiyat: {totalCost}₺</div>
  )
}

export default CourseValue