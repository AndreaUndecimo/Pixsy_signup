import React, { useContext } from 'react';
import { StateContext } from '../../globals/globalStore.reducer';
import { handleLogout } from '../../ApiServices/ApiClientRegister';
import moment from 'moment';
import { Link } from '@reach/router';

const Modal = () => {
  const { state } = useContext(StateContext);
  const closeModal = (e) => {
    if (
      e.target.classList.contains('modal') ||
      e.target.classList.contains('toggle_modal')
    ) {
      document.querySelector('.modal').classList.remove('show');
    }
  };
  return (
    <div onClick={closeModal} className='modal'>
      <div className='info_box'>
        <div className='info_title'>
          <h1>
            Not receiving <br /> any emails from us?
          </h1>
        </div>
        <div className='delivery'>
          <div style={{ marginBottom: '10px' }}>
            {' '}
            <h3>Delivery</h3>
          </div>
          <div className='info_delivery'>
            <p>
              Delivered to {state.user?.email} on{' '}
              {moment(state.user?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
            </p>
            <p style={{ marginTop: '10px', fontWeight: '300' }}>
              Our system indicates that our email was deluvered successfully.
            </p>
          </div>
        </div>
        <div className='next_steps'>
          <div className='next_steps_box'>
            <h1>Next steps</h1>
            <div className='email_steps'>
              <p>
                Check your spam folder for emails from{' '}
                <strong>account@pixsy.com</strong>
              </p>
              <p>
                Add <strong>account@pixsy.com</strong>
                to your contacts
              </p>
            </div>
            <div className='options' style={{ marginTop: '10px' }}>
              <h1>Options</h1>
              <div className='links' style={{ marginTop: '10px' }}>
                <Link
                  to='/'
                  style={{ fontSize: '1rem' }}
                  onClick={() => handleLogout}
                >
                  Choose a different email address
                </Link>
                <Link to='/' style={{ fontSize: '1rem' }}>
                  Contact support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
