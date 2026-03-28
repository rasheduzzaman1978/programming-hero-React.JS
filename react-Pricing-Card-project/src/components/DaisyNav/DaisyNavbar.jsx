import React from 'react';

const DaisyNavbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">

      {/* LEFT */}
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex gap-6">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.pravatar.cc/40" />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default DaisyNavbar;