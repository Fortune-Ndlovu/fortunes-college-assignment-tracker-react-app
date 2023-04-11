import React from 'react';
import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

const Footer = () => {
  return (
    <footer>
      <CDBBox  className="footer">
        <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a href="/" className="d-flex align-items-center text-dark">
                <span className="h5 font-weight-bold">Module Tracker</span>
              </a>
              <p className="my-3" style={{ width: '250px' }}>
                We are helping folks manage their college modules more efficiently.
              </p>
              <CDBBox display="flex" className="mt-4" id="footer-icons">
                <CDBBtn flat color="dark">
                  <CDBIcon fab icon="facebook-f" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="mx-3">
                  <CDBIcon fab icon="twitter" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="p-2">
                  <CDBIcon fab icon="instagram" />
                </CDBBtn>
              </CDBBox>
            </CDBBox>
            </CDBBox>
          <small className="text-center mt-5">&copy; Module Tracker, 2023. All rights reserved.</small>
        </CDBBox>
      </CDBBox >
    </footer>
  );
};

export default Footer;