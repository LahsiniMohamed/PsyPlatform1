/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import  FormSignUp  from '../../../Components/SignUp/FormSignUp';

export default {
  title: 'psyPlatforme/FormSignUp',
  component: FormSignUp,
  argTypes : {
    types : {
      defaultValue: 'normal',
      control : {

      }
    }
  }
};

const Template = () => <FormSignUp />;
export const LoggedIn = Template.bind({});
LoggedIn.args = {

};