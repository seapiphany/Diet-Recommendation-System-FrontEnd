import React from 'react';
import "./Input.css";

const Input = () => {
  return (
    <div className='input'>
      <div className='input-text'>
        <h1>Input</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        <form method="post">
          <div className='formLeft'>
          <label htmlFor="weight">Weight:</label>
          <input type="text" id="weight" name="weight" /><br />

          <label htmlFor="height">Height:</label>
          <input type="text" id="height" name="height" /><br />

          <label htmlFor="gender">Gender:</label>
          <fieldset>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </fieldset><br />
          </div>

          <div className='formRight'>
            <label htmlFor="currentCondition">Current Condition:</label>
            <select id="currentCondition" name="currentCondition">
              <option value="ccOne">None</option>
              <option value="ccTwo">cCTwo</option>
              <option value="ccThree">ccThree</option>
            </select><br />

            <label htmlFor="activityLevel">Activity Level:</label>
            <select id="activityLevel" name="activityLevel">
              <option value="sedentary">None</option>
              <option value="active">Active</option>
              <option value="veryActive">Very Active</option>
            </select><br />

            <label htmlFor="allergies">Allergies:</label>
            <select id="allergies" name="allergies">
              <option value="allergyoOne">None</option>
              <option value="allergyoTwo">Two</option>
              <option value="allergyoThree">Three</option>
            </select><br />
          </div>
          
          <button type="submit">Generate Meal</button>
        </form>
      </div>
    </div>
  );
}

export default Input;
