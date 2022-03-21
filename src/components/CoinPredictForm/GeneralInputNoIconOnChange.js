import Tooltip from '../Tooltip/Tooltip';
export default function GeneralInputNoIconOnChange({
  title,
  message,
  value,
  onChange,
}) {
  return (
    <div>
      <label
        htmlFor={title}
        className='block text-lg font-medium text-white-700'>
        <Tooltip message={message} title={title} />
      </label>

      <div className='mt-1 relative rounded-md shadow-sm '>
        <input
          type='number'
          onChange={onChange}
          min={0}
          value={value}
          onWheel={(e) => e.target.blur()}
          name='name'
          id='name'
          className='block w-full p-0 text-white placeholder-appBlue bg-white focus:ring-0 sm:text-sm border-white border-[0.1rem] rounded-md px-3 py-2'
          placeholder='000,000'
        />
      </div>
    </div>
  );
}
