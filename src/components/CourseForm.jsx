import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeDescription, changeCost } from '../store/slice/formSlice';
import { addCourse } from '../store/slice/courseSlice';

function CourseForm() {
  const dispatch = useDispatch();
  const { name, description, cost } = useSelector((state) => state.form);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCourse({ name, description, cost }));
  };

  return (
    <div className='courseForm panel'>
      <h4 className='subtitle is-3'>Kurs Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
          <div className="field">
            <label className='label'>Ad</label>
            <input type="text" className='input is-expanded' required onChange={(event) => { dispatch(changeName(event.target.value)) }} value={name} />
          </div>
          <div className="field">
            <label className='label'>Açıklama</label>
            <textarea className='input is-expanded' required onChange={(event) => { dispatch(changeDescription(event.target.value)) }} value={description} />
          </div>
          <div className="field">
            <label className='label'>Fiyat</label>
            <input type="number" className='input is-expanded' required onChange={(event) => { dispatch(changeCost(parseInt(event.target.value))) }} value={cost} />
          </div>
        </div>
        <div className="field">
          <button className='button is-primary'>Ekle</button>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
