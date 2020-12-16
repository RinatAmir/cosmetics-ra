import React from 'react';
import './contact.scss';
import gigi from '../../images/gigilogo.jpg';

const Contact = () => {
  return (
    <div className='contactContainer'>
      <div className='details'>
        <h1>גם לגוף שלך מגיע להתפנק...</h1>
        <h4>
          קליניקה לטיפולי קוסמטיקה רפואית מתקדמת לאזור הפנים ובשילוב עיסוי שוודי
          לגוף
        </h4>
        <p>
          <span> עיסוי עם אבנים חמות </span>|<span> פיגמנטציה </span>|
          <span> מזותרפיה </span>|<span> טיפול באקנה </span>|
          <span> טיפולי פנים אנטי אייג'ינג </span>
        </p>
        <p>
          <span> מעל 5 שנות נסיון </span>|
          <span> שימוש במוצרים איכותיים מבית GIGI </span>
        </p>
        <img src={gigi} className='gigiImage' alt='GIGI' />
      </div>

      <div className='formContainer'>
        <h4>ליעוץ והתאמת טיפול אישי:</h4>
        <form className='form'>
          <label>
            שם:{' '}
            <input type='text' name='name' />
          </label>
          <label>
            נייד:{' '} 
            <input type='text' name='phone' />
          </label>
          <label htmlFor='tretment'>
            סוג הטיפול:{' '} 
            <select type='text' name='tretment' id='tretment'>
              <option value='face'>טיפול פנים</option>
              <option value='face'>עיסוי בשילוב אבנים חמות</option>
              <option value='face'>טיפול משולב: פנים ועיסוי</option>
            </select>
          </label>
            <a href='/' type='submit' className='button'>שלחי</a>
        </form>
        <h5>* הטיפול לנשים בלבד</h5>
      </div>
    </div>
  );
};

export default Contact;
