import { Dialog, Transition } from '@headlessui/react';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import { Fragment } from 'react';
import { ReactComponent as MyAlgo } from "./../icons/myalgo.svg";

const ConnectWalletModal = ({isOpen, setIsOpen, setWalletAddress})=>{
//   let [] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const connectWallet = async()=>{
    const myAlgoConnect = new MyAlgoConnect();

    const accountsSharedByUser = await myAlgoConnect.connect();
    console.log(accountsSharedByUser[0].address);

    setIsOpen(false);

    //Show wallet address at top
    setWalletAddress(accountsSharedByUser[0].address)
  };

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
                    Select Wallet
                  </Dialog.Title>
                  {/* <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div> */}

                  <div className="mt-4 flex flex-col px-5">
                    <button
                      type="button"
                      className="justify-center items-center mt-3 rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 text-lg"
                      onClick={()=>connectWallet()}
                    >
                        <MyAlgo className='inline-flex mx-3'/>
                        MyAlgo
                    </button>
                    <button
                      type="button"
                      className="justify-center my-3 rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 text-lg"
                      onClick={closeModal}
                    >
                        Algo Signer
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

export default ConnectWalletModal;