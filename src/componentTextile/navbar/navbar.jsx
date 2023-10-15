import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    {
        name: 'Products',
        imageUrl: 'https://media.discordapp.net/attachments/988883199209926710/1163208338205585509/mariana-beltran-ys3yCFDBbME-unsplash.jpg?ex=653ebd2f&is=652c482f&hm=ea98cb731039fb92e86af526e8d6f5752e5c3338365c58e9c7933034561db475&=&width=448&height=671',
        href: '#'
    },
    {
        name: 'Features',
        imageUrl: 'https://media.discordapp.net/attachments/988883199209926710/1163208343150665748/mansour-Ye7qY2c79iM-unsplash.jpg?ex=653ebd30&is=652c4830&hm=28fd3758adfe51e180c09261713a74276a997d296e51d43803db117d4047309f&=&width=720&height=484',
        href: '#'
    },
    {
        name: 'Marketplace',
        imageUrl: 'https://media.discordapp.net/attachments/988883199209926710/1163208339258351726/hermes-rivera-xhidC0wuEN8-unsplash.jpg?ex=653ebd2f&is=652c482f&hm=cf1e77fe425fa3a8dc1ffc18ede2e3ad653c993608053360cb59fe0312af66b1&=&width=720&height=411',
        href: '#'
    },
    {
        name: 'Company',
        imageUrl: 'https://media.discordapp.net/attachments/988883199209926710/1163208341389066260/steven-weeks-WWULen_ullA-unsplash.jpg?ex=653ebd2f&is=652c482f&hm=5b39fa24b37bdbc0331b47e224af0b55b5b32aa44cc67fdc78fdb457f597ffe3&=&width=720&height=480',
        href: '#'
    },
]

function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="navbar flex flex-col items-center justify-center">
            <header className="inset-x-0 top-0 sticky w-full z-50 h-20 bg-gradient-to-r from-orange-100 via-amber-600  to-orange-100">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
            <div className="inner-nav w-full m-10 flex items-center justify-center">
                <ul role="list" className="m-5 grid  gap-x-8 lg:grid-cols-4 sm:grid-cols-2 sm:gap-20 xl:col-span-12">
                    {navigation.map((nav) => (
                        <li key={nav.name} 
                        className='flex items-center gap-x-3'>
                            <div className='bg-gradient-to-r from-orange-100 via-amber-600  to-orange-100 h-28 w-28 rounded-full flex items-center justify-center'>
                                <div className="flex items-center justify-center gap-x-3 ">
                                <img className="h-24 w-24 object-cover hover:h-28 hover:w-28 rounded-full ease-in-out duration-300" src={nav.imageUrl} alt="" /> 
                            </div>
                            </div>
                            <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{nav.name}</h3>
                                </div>
                        </li>
                    ))}
                </ul>
            </div>


        </div>

    );
}
export default Navbar;