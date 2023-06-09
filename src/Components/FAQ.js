import React from 'react'

import '../css/FAQ.scss'
function FAQ({frequent}) {
	



	return (

        <div>
			        <h1 class="firsth text-capitalize font-weight-bold"><span style={{color: "#9B5DE5"}}>Question #{frequent.index}</span></h1>

            <div class="container my-5">
  <div class="text-center mb-5">
    {/* <span class="text-secondary text-uppercase">Questions</span> */}
   
  </div>

  <div class="col-md-8 mx-auto">
    <div class="mb-5">
      <div class="d-sm-flex align-items-start mb-4">
        <div class="d-none d-sm-flex flex-column align-items-center mr-4">
          <div class="p-3 bg-light rounded-circle">
            <svg fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"/><circle cx="12" cy="19" r="1"/></g></g></svg>
          </div>
          <small class="text-secondary text-uppercase mt-2">Question</small>
        </div>
        <div class="p-4 rounded bg-light text-dark" id={`question${frequent.index}`}>
          <p class="quest mb-0" >{frequent.question}</p>
        </div>
      </div>
      <div class="d-flex align-items-start">
        <div class="p-4 rounded text-white" id={`answer${frequent.index}`} style={{backgroundColor: "#9B5DE5"}}>
          <p class="answ mb-0" >{frequent.answers}</p>
        </div>
        <div class="d-none d-sm-flex flex-column align-items-center ml-4">
          <div class="p-3 bg-light rounded-circle">
            <svg width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 414.594 414.594" 
	 xmlSpace="preserve">
<g>
	<g>
		<g>
			<path d="M357.594,298.009l-84.891-33.848l-19.881-16.748c-5.25-4.438-13.004-4.11-17.873,0.73l-27.64,27.481l-27.717-27.492
				c-4.874-4.832-12.618-5.146-17.864-0.722l-19.879,16.748l-84.895,33.854C29.622,308.9,29.644,405.708,27.297,414.594h360
				C384.955,405.73,384.941,308.885,357.594,298.009z"/>
			<path d="M314.002,87.668C308.106,38.434,262.505,0,207.297,0s-100.81,38.434-106.705,87.668
				c-4.898,3.137-8.153,8.613-8.153,14.859v39.996c0,9.743,7.899,17.646,17.646,17.646l15.942-0.04
				c9.848,51.453,44.795,80.728,81.27,80.728c36.475,0,57.666-17.339,71.719-49.293c-10.729,8.416-26.324,16.114-48.134,17.704
				c-2.004,2.985-5.411,4.951-9.276,4.951h-10.189c-6.167,0-11.167-4.999-11.167-11.167s5-11.167,11.167-11.167h10.189
				c3.611,0,6.813,1.723,8.854,4.383c35.067-2.815,51.558-24.083,58.134-36.091l15.916-0.006c9.746,0,17.646-7.903,17.646-17.646
				v-39.996C322.154,96.281,318.899,90.805,314.002,87.668z M287.961,89.47c-10.407-32.854-40.473-52.385-80.664-52.385
				c-40.192,0-70.276,19.519-80.694,52.357c-1.612-1.456-3.49-2.616-5.559-3.401C127.705,48.656,163.845,20,207.297,20
				s79.591,28.656,86.253,66.041C291.468,86.832,289.58,88,287.961,89.47z"/>
		</g>
	</g>
</g>
</svg>

          </div>
          <small class="text-secondary text-uppercase mt-2">Answer</small>
        </div>
        
      </div>
    </div>
  </div>
  
  
</div>
          
		  

        </div>
    )
}

export default FAQ
