"use client"

import { siteRoutes } from '@/app/utils/commonUtils';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
    const pathname = usePathname();
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex gap-x-5 text-white text-sm">
                {siteRoutes?.map((siteRoute) => (
                    <li key={siteRoute.href}>
                        <a
                            href={siteRoute.href}
                            className={`transition ${pathname === siteRoute.href ? "text-yellow-300" : "text-gray-300"
                                }`}
                        >
                            {siteRoute.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Header;
