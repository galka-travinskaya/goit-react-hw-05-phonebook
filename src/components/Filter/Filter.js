import React from 'react'
import s from './Filter.module.css'
import PropTypes from 'prop-types'

const Filter = ({value, onChange}) => {
    return (
        <label className={s.filter}>
          <span>Find contacts by name</span> 
          <input className={s.filter__input} type="text" value={value} onChange={onChange}/>
        </label>
    )
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Filter;