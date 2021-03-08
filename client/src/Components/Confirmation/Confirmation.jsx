import React, { useContext } from 'react';
import './Confirmation.css';

import login_img from '../../assets/login_img.png';
import logo from '../../assets/pixsy_logo.png';
import { StateContext } from '../../globals/globalStore.reducer';
import { sendEmailAgain } from '../../ApiServices/ApiClientRegister';
import Modal from '../Modal/Modal';
import NewEmailForm from '../NewEmailForm/NewEmailForm';

const Confirmation = () => {
  const { state } = useContext(StateContext);

  const toggleNewEmail = () => {
    !document.querySelector('.newEmail').classList.contains('toggle_email') &&
      document.querySelector('.newEmail').classList.add('toggle_email');
  };

  const toggleModal = () => {
    !document.querySelector('.modal').classList.contains('toggle_modal') &&
      document.querySelector('.modal').classList.add('toggle_modal');
  };

  return (
    <>
      <Modal />
      <div className='login_wrapper'>
        <div className='image'>
          <img src={login_img} alt='login pixsy' id='login_img' />
        </div>
        <div className='login_form'>
          <div className='logo'>
            <img src={logo} alt='pixsy logo' />
          </div>
          <div className='action_call'>
            <h1>Confirm to start.</h1>
            <h3>
              We sent an email to <strong>{state.user?.email}</strong> - click
              the validation button in the first message to start protecting
              your first image.
            </h3>
            <ul className='helper_msg'>
              <li>
                <p>Haven't you received our email?</p>
                <button
                  onClick={() =>
                    sendEmailAgain(window.localStorage.getItem('token'))
                  }
                >
                  Send again
                </button>
              </li>
              <li>
                <p>Missspelled your email address?</p>
                <button onClick={toggleNewEmail}>Edit email</button>
              </li>
              <li>
                <p>Still not working?</p>
                <button onClick={toggleModal}>Ckick here</button>
              </li>
            </ul>
          </div>
        </div>
        <NewEmailForm />
      </div>
    </>
  );
};

export default Confirmation;
