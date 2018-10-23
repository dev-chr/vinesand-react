import React from 'react'
import './css/FilterForm.css'

const FilterForm = () => (
  <div className="filter">
    <form>
      <header className="sub-header">
        <h2>Filter by:</h2>
      </header>
      <label htmlFor="province">Province</label>
      <input type="text" size="10" name="province" placeholder="British Columbia" />
      <label htmlFor="city">City</label>
      <input type="text" size="10" name="city" placeholder="Kamploops" />
      <label htmlFor="postal">Postal Code</label>
      <input type="text" size="10" name="postal" placeholder="H0H 0H0" />
      <a className="newButton">
        Filter
      </a>
    </form>
  </div>
)

export default FilterForm
