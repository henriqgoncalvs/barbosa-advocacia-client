import { Fragment, useState } from 'react';
import { MdPlayCircleOutline } from 'react-icons/md';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

import { QuemSomosProps } from 'lib/types/api';

function WhoAreWe({ data }: { data: QuemSomosProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen((prev: boolean) => !prev);

  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 lg:mb-20 text-center">
          <h2 className="mt-8 mb-10 text-3xl font-semibold font-heading">
            {data?.title}
          </h2>
        </div>
        <div className="flex flex-wrap flex-col-reverse lg:flex-row -mx-4 items-center mb-12 lg:mb-20">
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <h2 className="mt-8 mb-10 text-5xl leading-tight font-semibold font-heading">
              {data?.name}
            </h2>
            <p className="text-xl text-gray-500 mb-10">{data?.description}</p>
            <button
              onClick={toggleModal}
              className="flex mt-8 w-max mr-auto text-primary-c-500 items-center font-bold justify-start hover:opacity-70 transition duration-200"
            >
              <MdPlayCircleOutline color="#2E3192" size={32} className="mr-2" />
              Assistir vídeo de apresentação
            </button>
          </div>
          <div className="relative mx-auto w-1/2 px-4 rounded-lg">
            <Image
              width={2700}
              height={2700}
              className="object-cover object-center"
              src="/images/perfil.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-primary-c-100 bg-opacity-40 transition duration-200"
          onClose={toggleModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md min-h-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Vídeo de apresentação
                </Dialog.Title>
                <div className="my-6">
                  <iframe
                    width="100%"
                    height="320px"
                    src={data?.presentation_video_url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    className="mx-auto btn-primary-filled"
                    onClick={toggleModal}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}

export default WhoAreWe;
