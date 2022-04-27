import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from './features/job/JobSlice'
import { Job } from './features/job/Job'
import { SummaryJob } from './features/job/SummaryJob'
import { JobHighlights } from './features/job/JobHighlights'
import { JobTechnologies } from './features/job/JobTechnologies'
import PeekAtCode from './PeekAtCode'
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
            <div className="icon-sm print-icon no-print">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                 x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enableBackground="new 0 0 1000 1000"
              >
                <g>
                  <path d="M783.3,317.9c-15.4,0-28,12.5-28,28c0,15.5,12.5,28,28,28c15.5,0,28-12.5,28-28C811.3,330.5,798.8,317.9,783.3,317.9z M672,208.2H328.1v79.9H672L672,208.2z M246,563h40.8v-79.8h41.2v133.2c1.8,64.8,143.3,30.4,143.3,30.4s-29.5,145.1,31.8,145.1H672V483.2h41.2v81.5H754V424.2H246V563z M386.5,488.9h236.8v41.2l-236.8,0V488.9z M386.5,569.7h236.8v41.2l-236.8,0V569.7z M500,10C229.3,10,10,229.3,10,500s219.3,490,490,490c270.7,0,490-219.3,490-490S770.7,10,500,10z M713.2,621.8V833H449.2L286.9,670.8v-50.6H140.7V323.1c0-19.3,15.7-35,35-35h111.3V166.9h426.4v121.1h111.1c19.3,0,35,15.7,35,35v298.8H713.2z" />
                </g>
              </svg>
            </div>
          </span>
        </div>
      </div>
    </React.Fragment>
  )
}

/* Here is our main application, in charge of managing state of the filter */

function App() {
  const dispatch = useDispatch()
  const [techFilter, setTechFilter] = useState('')
  const onFilterChange = (val) => {
    setTechFilter(val)
    dispatch(setFilter(val))
  }

  return (
    <div className="container">
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <h1 className="name">George McKenzie</h1>
            <h6 className="sub-title">Full Stack Software Developer</h6>
          </div>
          <div className="contact">
            <div className="text-end">
              <div>
                <a className={'tele-link'} href="tel:18059109220">
                  <div className="icon-sm phone-icon">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 1000 1000"
                      enableBackground="new 0 0 1000 1000"
                    >
                      <g>
                        <path d="M500,8.8C230.3,8.8,10,229.7,10,500c0,270.3,220.3,491.2,490,491.2c269.7,0,490-220.8,490-491.2C990,229.7,770.9,8.8,500,8.8L500,8.8z M500,942.9C256.8,942.9,58.2,745,58.2,500S256.8,57.1,500,57.1c243.2,0,441.8,199.1,441.8,442.9C941.8,743.8,744.4,942.9,500,942.9L500,942.9z" />
                        <path d="M655.9,187.5H344.1c-28.7,0-52,23.3-52,52.1v520.9c0,28.8,23.3,52.1,52,52.1h311.8c28.7,0,52-23.3,52-52.1V239.5C707.9,210.8,684.6,187.5,655.9,187.5L655.9,187.5z M500,760.5c-28.7,0-52-23.3-52-52.1c0-28.8,23.3-52.1,52-52.1c28.7,0,52,23.3,52,52.1C552,737.1,528.7,760.5,500,760.5L500,760.5z M655.9,604.2H344.1V239.5h311.8V604.2L655.9,604.2z" />
                      </g>
                    </svg>
                  </div>{' '}
                  (805) 910 9220
                </a>
              </div>
              <div>
                <a className={'tele-link'} href="mailto:george@yesdocs.com">
                  <div className="icon-sm phone-icon">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 1000 1000"
                      enableBackground="new 0 0 1000 1000"
                    >
                      <g>
                        <path d="M549.5,435.7c-3.8-6.3-9.1-11.5-15.8-15.5c-6.6-4-14.8-6.1-24.5-6.1c-12.3,0-23.1,3.5-32.4,10.6c-9.2,7.1-17.1,16-23.5,27c-6.4,10.9-11.2,23-14.7,36.1c-3.3,13.1-5.1,25.9-5.1,38c0,6.1,0.6,12.5,1.9,19.5c1.3,6.8,3.8,13.1,7.7,19.1c3.8,5.8,8.8,10.6,15,14.4c6.2,3.8,14.4,5.7,24.6,5.7c13.9,0,25.7-3.4,35.4-10.2c9.7-6.8,17.7-15.4,23.9-25.9c6.2-10.4,10.6-21.7,13.5-33.9c2.8-12.1,4.2-23.4,4.2-33.5c0-8.1-0.8-16-2.3-24C556.1,449.2,553.5,442.1,549.5,435.7z" />
                        <path d="M500,10C229.4,10,10,229.4,10,500s219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M770.4,541.7c-8.5,23.4-19.7,42.8-33.9,58.6c-14.2,15.8-30.2,27.5-48.4,35.4s-37.3,11.8-57.2,11.8c-20.5,0-36.9-4.8-49.3-14.4c-12.3-9.6-18.5-21.9-18.5-36.5h-3.8c-7.7,12.1-19.5,23.8-35.4,34.6c-15.9,10.9-35.4,16.4-58.5,16.4c-34.9,0-61.8-11.4-80.7-34.2c-19-22.9-28.4-52.4-28.4-89.1c0-21.4,3.5-42.3,10.7-63.2c7.2-20.8,17.4-39.3,30.7-55.6c13.3-16.2,29.2-29.3,47.6-39.2c18.5-9.9,38.9-14.8,61.5-14.8c19.5,0,35.9,4,49.3,12.1c13.3,8.1,22,18.1,26.2,29.7h0.8l6.2-30.5h68.5l-30.2,143.9c-1,7.1-2.4,14.9-4.2,23.6c-1.8,8.6-2.7,16.7-2.7,24.4c0,8.6,1.6,15.8,5.1,21.7c3.3,5.8,9.9,8.7,19.6,8.7c20,0,36.5-10.6,49.7-32c13-21.4,19.6-49.9,19.6-85.9c0-30.5-5.2-57.5-15.4-81c-10.2-23.6-24.5-43.3-42.7-59.4c-18.2-15.9-39.9-28.1-65-36.1c-25.1-8.1-52.6-12.1-82.3-12.1c-32.3,0-61.9,5.7-88.8,17.1c-26.9,11.4-49.9,27.2-68.9,47.1c-19,20.1-33.7,43.6-44.2,70.8c-10.6,27-15.9,56.4-15.9,87.8c0,33.5,5.6,63.7,16.6,90.6c11,26.9,26.5,49.8,46.5,68.9c20,19.1,43.9,33.6,71.5,43.7c27.7,10.1,58.3,15.2,91.5,15.2c41.6,0,77.3-6.6,107.3-19.8c29.9-13.1,57.5-31.5,82.6-54.8l42.5,45.7c-30.2,32-66.1,55.3-107.7,70c-41.6,14.8-85.4,22.1-131.5,22.1c-44.1,0-84.3-7-120.4-21c-36.1-13.9-67.1-33.4-92.6-58.3c-25.7-24.9-45.5-54.7-59.6-89.5c-14.2-34.8-21.1-72.7-21.1-113.7c0-40.6,7.7-78.1,23.1-112.6c15.4-34.5,36.4-64.4,63.1-89.8c26.7-25.4,57.8-45.2,93.5-59.8c35.5-14.3,73.7-21.5,114.1-21.5c34.9,0,68.7,5.1,101.5,15.2c32.9,10.1,61.9,25.4,87.3,45.6c25.4,20.3,45.6,45.6,60.8,76.1c15.2,30.5,22.7,66.2,22.7,107.3C783.1,491.5,778.9,518.4,770.4,541.7z" />
                      </g>
                    </svg>
                  </div>{' '}
                  george@yesdocs.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="row m-2">
        <div className="col-xs-12 col-sm-3">
          <div className="d-none d-sm-block">
            <EducationAndTech
              techFilter={techFilter}
              onFilterChange={onFilterChange}
            />
            <PeekAtCode />
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
