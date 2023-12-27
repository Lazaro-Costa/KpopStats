import React from 'react';
import Head from '../Helper/Head';
import UpdateCompany from './UpdateCompany';
import DropdownSelect from '../Dropdown/Dropdown';
import UpdateGroup from './UpdateGroup';
import UpdateIdol from './UpdateIdol';

const UpdateProvider = () => {
  const [state, setState] = React.useState(null);
  const options = [
    {
      id: 1,
      name: 'company',
    },
    {
      id: 2,
      name: 'group',
    },
    {
      id: 3,
      name: 'idol',
    },
  ];
  return (
    <div
      className={`glass border-glass-full container h-full w-full flex flex-col p-4 gap-4`}
    >
      <Head title="Update" description="Update Info" />
      <h1 className="text-3xl text-slate-200">Update</h1>
      <section className="grid grid-flow-col gap-6 w-full p-4 justify-center">
        {state === null ? (
          <DropdownSelect
            options={options}
            onSelect={op => setState(op)}
            handleLoad={() => null}
          />
        ) : state.id === 1 ? (
          <UpdateCompany />
        ) : state.id === 2 ? (
          <UpdateGroup />
        ) : <UpdateIdol />}
      </section>
    </div>
  );
};

export default UpdateProvider;
