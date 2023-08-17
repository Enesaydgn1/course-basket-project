import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store/slice/courseSlice';

function CourseSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.courses.searchTerm
  })
  return (
    <div className='listHeader'>
      <h3 className='title is-3'>Kurslarım</h3>
      <div className="search field is-horizantal">
        <label className="label">Ara</label>
        <input type="text" className="input"
          onChange={(event) => {
            dispatch(changeSearchTerm(event.target.value))
          }}
          value={searchTerm}
        />
      </div>
    </div>
  )
}

export default CourseSearch