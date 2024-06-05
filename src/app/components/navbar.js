"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (search.trim() !== '') {
            router.push(`blog/${search}`);
        }
    };

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Vernite badge mentora</a>
            </div>
            <div className="flex-none gap-2">
                <form onSubmit={handleSearchSubmit} className="form-control flex-row">
                    <input
                        type="number"
                        placeholder="Search by id"
                        className="input input-bordered w-24 md:w-auto"
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <button type="submit" className="btn btn-primary">
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Navbar;
