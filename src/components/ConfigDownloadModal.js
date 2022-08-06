import { Dialog, Transition } from '@headlessui/react';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import { Fragment } from 'react';
import { ReactComponent as MyAlgo } from "./../icons/myalgo.svg";

const ConfigDownloadModal = ({isOpen, setIsOpen, url, setUrlToFile})=>{

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Download the <code className='code'>metadata.json</code> by clicking the link below
                    <br/>
                    Afterwhich you are to upload it and paste the link to the metadata file in the text field below.
                    <br/> 
                    We will verify the link provided.
                  </Dialog.Title>
                  {/* <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div> */}

                  <div className="mt-4 flex flex-col px-5 items-center">
                    <a href={url} download="metadata.json" className="justify-center items-center mt-3 rounded-lg border border-transparent bg-blue-100 px-4 w-36 py-2 font-medium text-blue-900 hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 text-lg">
                    <button
                      type="button">
                        Download
                    </button>
                    </a>

                    <label htmlFor="title" className="mt-5 block font-medium text-sm text-gray-700 w-full">Book Title</label>
                    <input type="text" name="title"  onChange={(e)=>{ setUrlToFile(values => e.target.value) }}
                        class="bg-white hover:bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mb-5 w-full p-2.5"
                        placeholder="Book Title" required/>

                    <button
                      type="button"
                      className="justify-center my-3 rounded-md border border-transparent w-full bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 text-lg"
                      onClick={closeModal}
                    >
                        DONE
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
};

export default ConfigDownloadModal;