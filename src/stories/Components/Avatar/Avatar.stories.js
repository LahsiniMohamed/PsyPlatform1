import React from 'react';

import  Avatar  from '../../../Components/Avatar/Avatar';

export default {
  title: 'psyPlatforme/Avatar',
  component: Avatar,
  argTypes : {
    types : {
      defaultValue: 'big',
      control : {
        type : 'inline-radio',
        options : ["big" , "small" , "normal"]
      }
    }
  }
};

const Template = ({types , ...args}) => <Avatar type={types} {...args} />;
export const LoggedIn = Template.bind({});
LoggedIn.args = {
  image : "https://coach-coaching-maroc.com/wp-content/uploads/2019/12/laarabi-boutbouklte-psychologue-rabat.jpg"
};