import React from 'react';
import { MDBTypography } from 'mdbreact'

const Title = ({texto}) => (
  <>
    <div className="mx-auto"  >
      <MDBTypography tag='h2'  >
          <strong >{texto} </strong>

        {/* <small className="text-muted">with faded 
        secondary text</small> */}

      </MDBTypography>
    </div>
  </>
);

export default Title;