import React from 'react'

export default function Navbar2({toggle2}) {
  return (
    <div>
  
            <div className="singlog-leftright">
              <div style={{ paddingTop: "13px", paddingLeft: "15px" }}>
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item" onClick={()=>toggle2(false)}>
                      <a className="page-link" href="#" aria-label="Previous">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          class="bi bi-caret-left"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
                        </svg>
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          class="bi bi-caret-right"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="signlog">
                  <div className="search-bar">
                    <input type="text" />
                  </div>
              
                <button className="login get-spotify">Log in</button>
              </div>
            </div>
          </div>
         
            
  )
}
