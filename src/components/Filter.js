import React from 'react'

const Filter = ({ tags, clearTags, removeTag }) => {
  return (
    <div className='filter'>
      {tags.map((tag, i) => (
        <FilterTag key={i} name={tag} removeTag={removeTag} />
      ))}
      <button className='clear-btn' onClick={clearTags}>
        Clear
      </button>
    </div>
  )
}

export default Filter

const FilterTag = ({ name, removeTag }) => (
  <div className='filter-tag'>
    <div className='name'>{name}</div>
    <button className='remove-btn'>
      <img
        src={require('../images/icon-remove.svg')}
        alt='Remove tag button'
        onClick={() => removeTag(name)}
      />
    </button>
  </div>
)
