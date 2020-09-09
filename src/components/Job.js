import React from 'react'

const Job = ({ job, addTags }) => {
  const tags = [job.role, job.level, ...job.languages, ...job.tools]

  return (
    <div className={job.featured ? 'job-list featured' : 'job-list'}>
      <img
        src={require(`../images/${job.logo}`)}
        alt={job.company}
        className='logo'
      />

      <div className='job-desc'>
        <div className='top-desc'>
          <h4>{job.company}</h4>
          {job.isNew && <span className='new-job'>NEW!</span>}
          {job.featured && <span className='featured-job'>FEATURED</span>}
        </div>

        <h2 className='mid-desc'>{job.position}</h2>

        <div className='bottom-desc'>
          <span>{job.postedAt}</span>
          <span>{job.contract}</span>
          <span>{job.location}</span>
        </div>
      </div>

      <div className='tags'>
        {tags.map((tag, i) => (
          <div key={i} className='tag' onClick={() => addTags(tag)}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Job
