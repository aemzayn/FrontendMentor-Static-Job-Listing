import React, { useEffect, useState } from 'react'
import { Filter, Job } from './components'
import { data } from './components/data'

const App = () => {
  const [jobs, setJobs] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {
    if (tags) {
      const filteredJobs = data.filter(job => {
        return tags.every(tag => {
          return (
            job.role === tag ||
            job.level === tag ||
            job.languages.includes(tag) ||
            job.tools.includes(tag)
          )
        })
      })
      setJobs(filteredJobs)
    } else {
      setJobs(data)
    }
  }, [tags])

  const addTags = tag => {
    if (!tags.includes(tag)) setTags(prevTags => [...prevTags, tag])
  }

  const clearTags = () => {
    setTags([])
  }

  const removeTag = name => {
    const newTags = tags.filter(tag => tag !== name)
    setTags(newTags)
  }

  return (
    <div className='container main'>
      <div className='header' />
      <div className='container'>
        {!!tags.length && (
          <Filter tags={tags} clearTags={clearTags} removeTag={removeTag} />
        )}
      </div>
      {jobs?.map(job => (
        <Job job={job} key={job.id} addTags={addTags} />
      ))}
    </div>
  )
}

export default App
