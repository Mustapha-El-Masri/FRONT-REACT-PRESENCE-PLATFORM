import React from "react";
import Head from "next/head";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import RightSidebar from "../../components/RightSidebar";

import UserListContent from "../../components/UserListContent";
import Pagination from "../../components/Pagination";

import { requirePageAuth } from "../../utils/auth";


function UserList({ token, id }) {
  return (
    <div className="flex">
      <Head>
        <title>PFE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Sidebar id={id} />
      <div className="bg-myColors-100 h-screen w-7/12 relative">
        <Navbar navBarTitle_1="Users" navBarTitle_2="User List" />
        <UserListContent token={token} />
        <div className="px-8 absolute top-[114px] pt-6 left-0 right-0 rounded-2xl bg-myColors-200">
          <div className="flex text-white">
            <h4 className="w-1/12"></h4>
            <h4 className="w-4/12">Name</h4>
            <h4 className="w-3/12">Designation</h4>
            <h4 className="w-2/12">Team</h4>
            <h4 className="w-2/12 pl-6">Actions</h4>
          </div>
          <div className="h-[1px] w-full bg-white"></div>
        </div>
        <div className="absolute left-0 right-0 bottom-8 rounded-2xl px-8 bg-myColors-200 py-4">
          <Pagination />
        </div>
      </div>
      <RightSidebar />

    </div>
  );
}

export const getServerSideProps = requirePageAuth;

export default UserList;