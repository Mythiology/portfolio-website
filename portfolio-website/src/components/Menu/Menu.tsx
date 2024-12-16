'use client';

import { SyntheticEvent, useState } from 'react';
import { Divider, Tab, Tabs } from '@mui/material';

export const Menu = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='flex justify-center'>
        <Tabs value={value} onChange={handleChange}>
          <Tab key={0} label={'test 1'} />
          <Tab key={1} label={'test 2'} />
          <Tab key={2} label={'test 3'} />
        </Tabs>
      </div>
      <Divider
        variant='fullWidth'
        orientation='horizontal'
        sx={{ backgroundColor: '#444444', height: '1px' }}
      />
    </>
  );
};
