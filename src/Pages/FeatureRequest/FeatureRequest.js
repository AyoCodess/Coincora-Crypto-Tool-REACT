import { React } from 'react';
import StandardButton from '../../components/Buttons/StandardButton';

export default function FeatureRequest() {
  return (
    <>
      <div>
        <form
          action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSdhI7TxH8Igv3frjtBkybWknIZik8GA9APxpmDtQ3G-xyvPiQ/formResponse'
          method='POST'>
          <div className='md:grid  md:gap-6'>
            <div className='md:col-span-1'>
              <div className='px-4 sm:px-3'>
                <h3 className='text-xl font-medium leading-6 text-gray-900'>
                  Tell us about the feature
                </h3>
                <p className='mt-1 text-sm text-gray-600'>
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>

              <div className='shadow overflow-hidden sm:rounded-md'>
                <div className='px-0 py-5 bg-white space-y-6 sm:p-6'>
                  <div className='px-4 sm:px-0'>
                    <div className='mt-4'>
                      <label className='block text-md font-medium text-gray-700'>
                        Feature Description
                      </label>
                      <div className='mt-1'>
                        <textarea
                          id='about'
                          name='entry.1633164053'
                          rows={3}
                          className='p-1 shadow-sm focus:ring-appBlue focus:border-appBlue mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                          placeholder='Describe the feature in some detail'
                          defaultValue={''}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-10'>
                <div className='md:grid  md:gap-6'>
                  <div className='px-4 sm:px-3'>
                    <h3 className='text-lg font-medium leading-6 text-gray-900'>
                      Do you want to help us build it?
                    </h3>
                    <p className='mt-1 text-sm text-gray-600'>
                      If you a web developer we would love for you to
                      collaborate with us if the feature is successfully passes
                      our
                    </p>
                  </div>

                  <div className='mt-5 md:mt-0 md:col-span-2'>
                    <div className='shadow overflow-hidden sm:rounded-md'>
                      <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                        <div className='mt-0 space-y-4'>
                          <div className='flex items-start'>
                            <div className='flex items-center h-5'>
                              <input
                                required
                                id='helpBuildYes'
                                name='entry.1285439103'
                                value='Yes'
                                type='radio'
                                className='p-1 focus:ring-appBlue h-4 w-4 text-appBlue border-gray-300 rounded'
                              />
                            </div>
                            <div className='ml-3 text-sm'>
                              <label className='font-medium text-gray-700'>
                                Yes
                              </label>
                            </div>
                          </div>
                          <div className='flex items-start'>
                            <div className='flex items-center h-5'>
                              <input
                                required
                                id='helpBuildNo'
                                name='entry.1285439103'
                                value='No'
                                type='radio'
                                className=' p-1 focus:ring-appBlue h-4 w-4 text-appBlue border-gray-300 rounded'
                              />
                            </div>
                            <div className='ml-3 text-sm'>
                              <label className='font-medium text-gray-700'>
                                No
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className='grid grid-cols-3 gap-6'>
                          <div className='col-span-3 sm:col-span-2'>
                            <label className='block text-md font-medium text-gray-700'>
                              Website
                            </label>
                            <div className='mt-1 flex rounded-md shadow-sm'>
                              <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                                http://
                              </span>
                              <input
                                type='text'
                                name='entry.2001534315'
                                id='website'
                                className='p-1 focus:ring-appBlue focus:border-appBlue flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300'
                                placeholder='www.example.com'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-5 md:mt-0 md:col-span-2'>
                <div className='shadow overflow-hidden sm:rounded-md'>
                  <div className='px-4 py- bg-white space-y-6 sm:p-2'>
                    <div className='mt-0 space-y-4'></div>

                    <div className='col-span-3 sm:col-span-2'>
                      <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                        <div className='grid grid-cols-6 gap-6'>
                          <div className='col-span-6 sm:col-span-3'>
                            <label className='block text-nd font-medium text-gray-700'>
                              Name
                            </label>
                            <input
                              type='text'
                              name='entry.894728480'
                              id='name'
                              autoComplete='given-name'
                              className=' p-1 mt-1 focus:ring-appBlue focus:border-appBlue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                              required
                            />
                          </div>

                          <div className='col-span-6 sm:col-span-4'>
                            <label
                              className='block text-md font-medium text-gray-700'
                              required>
                              Email address
                            </label>
                            <input
                              required
                              type='email'
                              name='emailAddress'
                              id='emailAddress'
                              autoComplete='email'
                              className='p-1 mt-1 focus:ring-appBlue focus:border-appBlue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-5 md:mt-0 md:col-span-2'>
                <div className='mt-10'>
                  <div className='md:grid  md:gap-6'>
                    <div className='px-4 sm:px-3'>
                      <h3 className='text-lg font-medium leading-6 text-gray-900'>
                        Notifications
                      </h3>
                      <p className='mt-1 text-sm text-gray-600'>
                        Decide which communications you'd like to receive and
                        how.
                      </p>
                    </div>

                    <div className='mt-5 md:mt-0 md:col-span-2'>
                      <div className='shadow overflow-hidden sm:rounded-md'>
                        <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                          <legend className='text-base font-medium text-gray-900'>
                            By Email
                          </legend>
                          <div className='mt-4 space-y-4'>
                            <div className='flex items-start'>
                              <div className='flex items-center h-5'>
                                <input
                                  required
                                  id='email'
                                  name='entry.392137457'
                                  value='Email'
                                  type='radio'
                                  className=' p-1 focus:ring-appBlue h-4 w-4 text-appBlue border-gray-300 rounded'
                                />
                              </div>
                              <div className='ml-3 text-sm'>
                                <label className='font-medium text-gray-700'>
                                  Email
                                </label>
                                <p className='text-gray-500'>
                                  Yes, i want to receive updates about the
                                  status of my feature request.
                                </p>
                              </div>
                            </div>
                            <div className='flex items-start'>
                              <div className='flex items-center h-5'>
                                <input
                                  required
                                  id='none'
                                  name='entry.392137457'
                                  value='None'
                                  type='radio'
                                  className='p-1 focus:ring-appBlue h-4 w-4 text-appBlue border-gray-300 rounded'
                                />
                              </div>
                              <div className='ml-3 text-sm'>
                                <label className='font-medium text-gray-700'>
                                  None
                                </label>
                                <p className='text-gray-500'>
                                  I don't want to receive emails.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='shadow sm:rounded-md sm:overflow-hidden'>
                  <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                    <StandardButton text={'Submit'} color={'bg-appBlue'} />
                  </div>

                  <div className='mt-5 md:mt-0 md:col-span-2'>
                    <div className='shadow overflow-hidden sm:rounded-md'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
