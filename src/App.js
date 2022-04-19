import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from './features/job/JobSlice'
import { Job } from './features/job/Job'
import { SummaryJob } from './features/job/SummaryJob'
import { JobHighlights } from './features/job/JobHighlights'
import { JobTechnologies } from './features/job/JobTechnologies'
import printIcon from './print.svg'
import emailIcon from './email.svg'
import phoneIcon from './phone.svg'
import './App.css'

function EducationAndTech({ techFilter, onFilterChange }) {
  return (
    <React.Fragment>
      <div className="mt-1 row">
        <div className="col">
          <h4 className="sideHeading">Education</h4>
          <h6 className="sideDegree">B.S. PHYSICS</h6>
          <h6 className="sideSchool">California Lutheran University</h6>
          <h6 className="sideSchoolLocation">
            <em>Thousand Oaks, CA</em>
          </h6>
          <ul className="sidePoints">
            <li>Minor in Mathematics</li>
            <li>Everett Thykson Science Scholarship</li>
            <li>Football Scholarship</li>
          </ul>
        </div>
      </div>
      <JobTechnologies onSetFilter={onFilterChange} />
      <form className="d-flex no-print search-box">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Find..."
          aria-label="Find a technology"
          value={techFilter}
          onChange={(e) => {
            onFilterChange(e.target.value)
          }}
        />
      </form>
      <div className="row">
        <div className="col">
          <span
            onClick={(e) => {
              window.scrollTo(0, 0)
              window.print()
            }}
          >
            <img src={printIcon} alt="print" className="icon print-icon no-print" />
          </span>
        </div>
      </div>
      
    </React.Fragment>
  )
}

function App() {
  const dispatch = useDispatch()
  const [techFilter, setTechFilter] = useState('')
  const onFilterChange = (val) => {
    setTechFilter(val)
    dispatch(setFilter(val))
  }

  return (
    <div className="container">
      <nav className="navbar sticky-top navbar-light navbar-expand-lg bg-white">
        <div className="container">
          <div className="navbar-brand">
            <h1>George McKenzie</h1>
            <h6 className="sub-title">Full Stack Software Developer</h6>
          </div>
          <div className="contact">
            <figure className="text-end">
              <blockquote className="blockquote">
                <p>
                  <a className={'tele-link'} href="tel:18059109220">
                  <img src={phoneIcon} className="icon-sm phone-icon" alt="email" />{' '} (805) 910 9220
                  </a>
                </p>
              </blockquote>
              <figcaption className="blockquote email-quote">
                <a className={'tele-link'} href="mailto:george@yesdocs.com">
                  <img src={emailIcon} className="icon-sm email-icon" alt="email" />{' '}
                  george@yesdocs.com
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </nav>
      <div className="row m-2">
        <div className="col-xs-12 col-sm-3">
          <div className="d-none d-sm-block" >
            <EducationAndTech
              techFilter={techFilter}
              onFilterChange={onFilterChange}
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-9">
          <SummaryJob />
          <JobHighlights />
          <Job />
        </div>
        <div className="col-xs-12 col-sm-3">
          <div className="d-block d-sm-none">
            <EducationAndTech
              techFilter={techFilter}
              onFilterChange={onFilterChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
