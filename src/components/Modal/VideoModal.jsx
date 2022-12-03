import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { BsPlayCircleFill } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';

const VideoModal = ({
    images,
    videourl
}) => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  
    return (
      <>
        <div className="">
          <button
            type="button"
            onClick={openModal}
            className=" bg-opacity-50 relative hover:bg-opacity-20 focus:outline-none "
          >
            <BsPlayCircleFill  fontSize={100} className={`text-red-600 top-[40%] left-[40%] -scalex-y-[50%]  -scalex-x-[50%]   transition-all  duration-100 ease-in absolute`}/>
            <img src={images} alt="video images" height={315} width={645} />
              
          </button>
        </div>
  
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
  
            <div className="fixed right-2 left-2 bottom-4  overflow-y-auto">
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
                  <Dialog.Panel className="transform overflow-hidden align-middle   shadow-xl transition-all">
                    <div className="mt-2">
                      <iframe src={videourl} frameborder="0" title='this is modal iframe' height={450} width={860} allowfullscreen></iframe>
                    </div>
  
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex absolute top-4 right-1 justify-center focus:outline-none"
                        onClick={closeModal}
                      >
                        <CgClose />
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
}

export default VideoModal