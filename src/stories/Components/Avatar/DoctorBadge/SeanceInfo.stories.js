import React from 'react';

import  SeanceInfo  from '../../../../Components/DoctorBadge/SeanceInfo';

export default {
  title: 'psyPlatforme/DoctorBadge/sceneInfo',
  component: SeanceInfo,

};

const Template = ({Info , ...args}) => <SeanceInfo info={Info} {...args} />;
export const LoggedIn = Template.bind({});
LoggedIn.args = {
  Info : {price : 100,
    time : 60     
}
};