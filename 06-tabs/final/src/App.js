import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
//URL
const url = 'https://course-api.com/react-tabs-project';

//FUNCTION
function App() {

  //useState
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  //fetch data
  const fetchInfos = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setLoading(false);
    } catch(error) {
      setLoading(false);
      console.log(error, 'ERROR');
    }
  }

  useEffect(() => {
    fetchInfos();
  }, [])

  //components
  if(loading){
    return (
      <section className='section loading'>
        <h2>Loading...</h2>
      </section>
    );
  } 
  /*
  if (!jobs[value]) {
    return null
  }
  */
  const { company, dates, duties, title } = jobs[value];
  return (
    <main>
      <section className='section'>
        <div className='title'>
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
      <div className="jobs-center">
        {/* BTN CONTAINER */}
        <div className='btn-container'>
        {
          jobs.map((item, index) => {
            return (
              <button className={`job-btn ${index === value && 'active-btn'}`} key={item.id} onClick={() => setValue(index)}>{item.company}</button>
            )
          })
        }
        </div>
        {/* JOB INFOS */}
        <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <div className="job-date">{dates}</div>
            {duties.map((duty, index)=> {
              return (
                <div className="job-desc" key={index}>
                  <FaAngleDoubleRight className='job-icon'/>
                  <p>{duty}</p>
                </div>
              )
            })}
        </article>
      </div>
      </section>
    </main>
  )
}

export default App
