import { useState, useEffect } from "react";
import FloatingButton from "./FloatingButton";

const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: 10000,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        qty: 0,
        totalHarga: 0
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: 20000,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        qty: 0,
        totalHarga: 0
    },
    {
        id: 3,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: 15000,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        qty: 0,
        totalHarga: 0
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: 5000,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        qty: 0,
        totalHarga: 0
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: 12000,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        qty: 0,
        totalHarga: 0
    },
    {
        id: 6,
        name: 'Earthen Bottle',
        href: '#',
        price: 10000,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        qty: 0,
        totalHarga: 0
    },
    {
        id: 7,
        name: 'Nomad Tumbler',
        href: '#',
        price: 20000,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        qty: 0,
        totalHarga: 0
    },
    {
        id: 8,
        name: 'Earthen Bottle',
        href: '#',
        price: 10000,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        qty: 0,
        totalHarga: 0
    },
    {
        id: 9,
        name: 'Nomad Tumbler',
        href: '#',
        price: 20000,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        qty: 0,
        totalHarga: 0
    },
    {
        id: 10,
        name: 'Earthen Bottle',
        href: '#',
        price: 10000,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        qty: 0,
        totalHarga: 0
    },
    {
        id: 11,
        name: 'Nomad Tumbler',
        href: '#',
        price: 20000,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        qty: 0,
        totalHarga: 0
    },
    {
        id: 12,
        name: 'Earthen Bottle',
        href: '#',
        price: 10000,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        qty: 0,
        totalHarga: 0
    },
    {
        id: 13,
        name: 'Nomad Tumbler',
        href: '#',
        price: 20000,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        qty: 0,
        totalHarga: 0
    },
    // More products...
]
const profile = [
    {
        namaToko: 'PT. Si Paling Mung Rugi',
        alamat: 'Jl. Laswi Ciparay No. 1',
        telp: '0123456789'
    }
]

export default function Products() {
    const [bayar, setBayar] = useState(0);
    const [total, setTotal] = useState({});
    const [qty, setQty] = useState(0);
    const [animate, setAnimate] = useState(false);

    const handleIncrement = (index, e) => {
        e.preventDefault();
        setAnimate(true);
        const newTotal = [...products];
        newTotal[index].qty++;
        newTotal[index].totalHarga = newTotal[index].price * newTotal[index].qty;
        const newQty = newTotal.reduce((acc, curr) => acc + curr.qty, 0);
        const newBayar = newTotal.reduce((acc, curr) => acc + curr.totalHarga, 0);
        setTotal(newTotal);
        setBayar(newBayar);
        setQty(newQty);
        e.target.classList.add('animate-bounce');
        setTimeout(() => {
            e.target.classList.remove('animate-bounce');
        }, 100);
    };

    const handleDecrement = (index, e) => {
        e.preventDefault();
        const newTotal = [...products];
        if (newTotal[index].qty > 0 && bayar > 0) {
            newTotal[index].qty--;
            newTotal[index].totalHarga = newTotal[index].price * newTotal[index].qty;
            const newQty = newTotal.reduce((acc, curr) => acc + curr.qty, 0);
            const newBayar = newTotal.reduce((acc, curr) => acc + curr.totalHarga, 0);
            setTotal(newTotal);
            setBayar(newBayar);
            setQty(newQty);
            e.target.classList.add('animate-bounce');
            setTimeout(() => {
                e.target.classList.remove('animate-bounce');
            }, 100);
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setAnimate(false);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [animate]);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product, index) => (
                        <a key={product.id} href={product.href} className="group shadow-xl">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="m-2 text-base text-gray-700 lg:text-xl">{product.name}</h3>
                            <div className="flex justify-between pr-2">
                                <p className="m-2 text-lg font-medium text-red-500 lg:text-xl lg:mx-4 ">Rp.{product.price.toLocaleString()}</p>
                                <div className='flex items-center gap-2 h-5 lg:h-8 lg:translate-y-1 border-2 translate-y-4 border-slate-300 rounded-md'>
                                    <button className='flex items-center lg:h-7 bg-slate-50 border-2 border-slate-300 hover:bg-slate-500 text-slate-700 hover:text-white font-bold h-1/2 p-2 rounded' onClick={(e) => handleIncrement(index, e)}>+</button>
                                    <p>{product.qty}</p>
                                    <button className='flex items-center lg:h-7 bg-slate-50 border-2 border-slate-300 hover:bg-slate-500 text-slate-700 hover:text-white font-bold h-1/2 p-2 rounded' onClick={(e) => handleDecrement(index, e)}>-</button>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div
                className={`ml-1 text-lime-400 font-extrabold text-lg ${animate ? "animate-bounce" : ""
                    }`}></div>
            <FloatingButton qty={qty} profile={profile} total={total} animate={animate} bayar={bayar.toLocaleString()} />
        </div>
    )
}
