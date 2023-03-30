import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-blue-400 rounded">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Movie Zone</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;