import { React } from 'react';
import StandardButton from '../../components/Buttons/StandardButton';

export default function FeatureRequest() {
  return (
    <>
      <div>
        <form action='#' method='POST'>
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
                      <label
                        htmlFor='about'
                        className='block text-md font-medium text-gray-700'>
                        About
                      </label>
                      <div className='mt-1'>
                        <textarea
                          id='about'
                          name='about'
                          rows={3}
                          className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                          placeholder='you@example.com'
                          defaultValue={''}
                          required
                        />
                      </div>
                      <p className='mt-2 text-sm text-gray-500'>
                        Brief description for your profile. URLs are
                        hyperlinked.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-10'>
                <div className='md:grid  md:gap-6'>
                  <div className='px-4 sm:px-3'>
                    <h3 className='text-lg font-medium leading-6 text-gray-900'>
                      Do you want to help is build it?
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
                        <fieldset>
                          <div className='mt-0 space-y-4'>
                            <div className='flex items-start'>
                              <div className='flex items-center h-5'>
                                <input
                                  id='comments'
                                  name='comments'
                                  type='checkbox'
                                  className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                                />
                              </div>
                              <div className='ml-3 text-sm'>
                                <label
                                  htmlFor='comments'
                                  className='font-medium text-gray-700'>
                                  Yes
                                </label>
                              </div>
                            </div>
                            <div className='flex items-start'>
                              <div className='flex items-center h-5'>
                                <input
                                  id='candidates'
                                  name='candidates'
                                  type='checkbox'
                                  className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                                />
                              </div>
                              <div className='ml-3 text-sm'>
                                <label
                                  htmlFor='candidates'
                                  className='font-medium text-gray-700'>
                                  No
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>

                        <div className='grid grid-cols-3 gap-6'>
                          <div className='col-span-3 sm:col-span-2'>
                            <label
                              htmlFor='company-website'
                              className='block text-md font-medium text-gray-700'>
                              Website
                            </label>
                            <div className='mt-1 flex rounded-md shadow-sm'>
                              <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                                http://
                              </span>
                              <input
                                type='text'
                                name='company-website'
                                id='company-website'
                                className='focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300'
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
                    <fieldset>
                      <div className='mt-0 space-y-4'></div>
                    </fieldset>

                    <div className='col-span-3 sm:col-span-2'>
                      <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                        <div className='grid grid-cols-6 gap-6'>
                          <div className='col-span-6 sm:col-span-3'>
                            <label
                              htmlFor='first-name'
                              className='block text-nd font-medium text-gray-700'>
                              Name
                            </label>
                            <input
                              type='text'
                              name='first-name'
                              id='first-name'
                              autoComplete='given-name'
                              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                              required
                            />
                          </div>

                          <div className='col-span-6 sm:col-span-4'>
                            <label
                              htmlFor='email-address'
                              className='block text-md font-medium text-gray-700'
                              required>
                              Email address
                            </label>
                            <input
                              type='text'
                              name='email-address'
                              id='email-address'
                              autoComplete='email'
                              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
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
                          <fieldset>
                            <legend className='text-base font-medium text-gray-900'>
                              By Email
                            </legend>
                            <div className='mt-4 space-y-4'>
                              <div className='flex items-start'>
                                <div className='flex items-center h-5'>
                                  <input
                                    id='comments'
                                    name='comments'
                                    type='checkbox'
                                    className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                                  />
                                </div>
                                <div className='ml-3 text-sm'>
                                  <label
                                    htmlFor='comments'
                                    className='font-medium text-gray-700'>
                                    Email
                                  </label>
                                  <p className='text-gray-500'>
                                    Get notified when someones posts a comment
                                    on a posting.
                                  </p>
                                </div>
                              </div>
                              <div className='flex items-start'>
                                <div className='flex items-center h-5'>
                                  <input
                                    id='candidates'
                                    name='candidates'
                                    type='checkbox'
                                    className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                                  />
                                </div>
                                <div className='ml-3 text-sm'>
                                  <label
                                    htmlFor='candidates'
                                    className='font-medium text-gray-700'>
                                    None
                                  </label>
                                  <p className='text-gray-500'>
                                    Get notified when a candidate applies for a
                                    job.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </fieldset>
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
