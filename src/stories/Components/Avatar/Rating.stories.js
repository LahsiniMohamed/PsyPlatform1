import React from 'react';

import  ReadOnly  from '../../../Components/Rating/ReadOnly';

export default {
  title: 'psyPlatforme/ReadOnly',
  component: ReadOnly,

};

const Template = ({rating   , ...args}) => <ReadOnly rating ={rating } {...args} />;
export const LoggedIn = Template.bind({});
LoggedIn.args = {
    rating : 3 ,
};