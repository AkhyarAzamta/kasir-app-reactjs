import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import GeneratePdf from './GeneratePdf';
import Time from './Time';

export default function MyModal(props) {
    let [isOpen, setIsOpen] = useState(false)
    const total = props.total;
    const qty = props.qty;
    const [disabled, setDisabled] = useState(false);
    const profile = props.profile;

    function closeModal() {
        setIsOpen(false)
        props.setIsVisible(true)
    }
    
    function openModal() {
        if (qty > 0) {
            setTimeout(() => props.setIsVisible(false), 100);
            setIsOpen(true)
            setDisabled(false);
        } else {
            window.alert('Qty must be greater than 0.')
            setIsOpen(false)
            setTimeout(() => props.setIsVisible(true), 1000);
        }
    }
    

    return (
        <>
            <div className="opacity-0 absolute flex justify-center items-center">
                
                <button 
                    disabled={disabled}
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black bg-opacity-20 px-7 py-3 -translate-y-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open dialog
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
                                <Dialog.Panel  className="w-full max-w-md lg:max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div id='pdf' className='mb-5'>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg lg:text-2xl font-medium leading-6 text-gray-900"
                                    >
                                        
                                        {
                                            isOpen && 
                                            profile.map((profile)=> (<div className=''>
                                                <p>{profile.namaToko}</p>
                                                <p className='text-sm lg:text-base text-slate-600'>Alamat: {profile.alamat}</p>
                                                <p className='text-sm lg:text-base text-slate-600'>No. Telp/WA: {profile.telp}</p>
                                            </div>
                                                
                                        ))}
                                            
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        {
                                            isOpen &&
                                            <table className="border-collapse w-full border border-slate-400">
                                                <thead>
                                                    <tr className='text-slate-700 lg:text-lg'>
                                                        <th className='p-2 mb- border border-slate-300'>Nama</th>
                                                        <th className='p-2 border border-slate-300'>Harga</th>
                                                        <th className='p-2 border border-slate-300'>Quantity</th>
                                                        <th className='p-2 border border-slate-300'>Jumlah</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {total.map((product) => (
                                                        product.qty > 0 && (
                                                            <tr key={product.id} className='text-sm lg:text-lg text-gray-700'>
                                                                <td className='border pb-2 border-slate-300'>{product.name}</td>
                                                                <td className='border pb-2 border-slate-300'>{product.price}</td>
                                                                <td className='border pb-2 pl-12 border-slate-300'>{product.qty}</td>
                                                                <td className='border pb-2 border-slate-300'>{product.totalHarga}</td>
                                                            </tr>
                                                        )
                                                    ))}
                                                </tbody>
                                            </table>}
                                            <Time />
                                            <div className='flex justify-between'>

                                            <p className='lg:text-xl'>Total Pembayaran</p> 
                                            <p className='font-bold text-lime-600 lg:text-xl'>Rp.{props.bayar}</p>
                                            </div>
                                    </div>

                                        </div>
                                    <div className="mt-4 gap-3 flex">
                                        <GeneratePdf />
                                        <button
                                            type="button"
                                            className="justify-center rounded-md border border-transparent hover:bg-red-400 px-4 py-2 text-white font-semibold lg:font-bold text-sm lg:text-lg bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                            >
                                            Cancel
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
