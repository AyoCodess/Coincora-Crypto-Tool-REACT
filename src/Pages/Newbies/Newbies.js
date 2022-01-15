import { React, useState } from 'react';
import SortButton from '../../components/Buttons/SortButton';
import Modal from '../../components/Modal/Modal';
import NewbiesSort from './NewbiesSort';

import itemData from './NewbiesData';

export default function Newbies({
  open,
  setOpen,
  title,
  setTitle,
  info,
  setInfo,
  link,
  setLink,
}) {
  const [mustHave, setMustHave] = useState(false);
  const [optional, setOptional] = useState(false);

  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between overflow-x-hidden '>
        <h2 className='font-medium md:text-3xl  text-2xl mb-3'>Get Started</h2>
        <div className='flex items-center mb-8  lg:mb-5'>
          <div className='mr-5 text-xl '>Sort by:</div>
          <div className='flex  gap-3 text-xl'>
            <SortButton
              setMustHave={setMustHave}
              setOptional={setOptional}
              text={'Must have'}
              onClick={() => {
                setMustHave(true);
                setOptional(false);
              }}
            />
            <SortButton
              setMustHave={setMustHave}
              setOptional={setOptional}
              text={'Optional'}
              onClick={() => {
                setMustHave(false);
                setOptional(true);
              }}
            />
            <SortButton
              setMustHave={setMustHave}
              setOptional={setOptional}
              text={'All'}
              onClick={() => {
                setMustHave(false);
                setOptional(false);
              }}
            />
          </div>
        </div>
      </div>
      <p className='text-xl mb-6'>
        Get best start in crypto today by tooling up the right way.
      </p>
      <NewbiesSort
        mustHave={mustHave}
        optional={optional}
        itemData={itemData}
        setInfo={setInfo}
        setLink={setLink}
        setTitle={setTitle}
        setOpen={setOpen}
      />
      <Modal
        title={title}
        set={setTitle}
        info={info}
        setInfo={setInfo}
        open={open}
        setOpen={setOpen}
        link={link}
      />
    </>
  );
}
