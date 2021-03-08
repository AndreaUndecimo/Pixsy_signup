import React, { useState, useContext } from 'react';
import { StateContext } from '../../globals/globalStore.reducer';
import { sendEmailAgain } from '../../ApiServices/ApiClientRegister';

const NewEmailForm = () => {
  const { state, dispatch } = useContext(StateContext);
  const [newEmail, setNewEmail] = useState('');

  const changeEmail = (e) => {
    e.preventDefault();
    try {
      sendEmailAgain({ newEmail, oldEmail: state.user.email }).then((res) =>
        console.log(res.data)
      );
      dispatch({ type: 'user', payload: { email: newEmail } });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className='newEmail' onSubmit={changeEmail}>
      <input
        type='email'
        name=''
        id=''
        placeholder='Enter your new email here'
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <button type='submit'>Change email</button>
    </form>
  );
};

export default NewEmailForm;
