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

  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  console.log({ active });

  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between overflow-x-hidden '>
        <h2 className='font-medium md:text-3xl  text-2xl mb-3'>Get Started</h2>

        <div className='flex items-center mb-6  lg:mb-5'>
          <div className='mr-5 text-xl '>Sort by:</div>
          <div className='flex  gap-3 text-xl'>
            <SortButton
              active={active}
              setMustHave={setMustHave}
              setOptional={setOptional}
              text={'Must have'}
              onClick={() => {
                setMustHave(true);
                setOptional(false);
                setActive(true);
                setActive2(false);
                setActive3(false);
              }}
            />
            <SortButton
              active={active2}
              setMustHave={setMustHave}
              setOptional={setOptional}
              text={'Optional'}
              onClick={() => {
                setMustHave(false);
                setOptional(true);
                setActive2(true);
                setActive(false);
                setActive3(false);
              }}
            />
            <SortButton
              active={active3}
              setMustHave={setMustHave}
              setOptional={setOptional}
              text={'All'}
              onClick={() => {
                setMustHave(false);
                setOptional(false);
                setActive3(true);
                setActive(false);
                setActive2(false);
              }}
            />
          </div>
        </div>
      </div>
      <p className='text-xl mb-2'>
        Get best start in crypto today by tooling up the right way.
      </p>
      <p className='text-sm border border-gray-200 p-2 rounded-md mb-4'>
        Disclaimer: Coincora is user-supported. When you buy or sign-up to
        products or services through links on our site, we may earn an affiliate
        commission.
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
