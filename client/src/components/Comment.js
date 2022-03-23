import React from 'react'
import Reply from './Reply'

const Comment = ({ props }) => {
    console.log(props);
    return (
        <div className="space-y-3  pt-8">
            <div className="flex flex-col mb-8">
                <div className="flex flex-row justify-between items-center px-5 space-x-12">
                    <div className="flex flex-row space-x-5 ">
                        <img
                            className="rounded-full  object-cover h-12   w-12"
                            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        <div className="flex flex-col">
                            <h4 className="font-bold text-xl">John Doe</h4>
                            <span className="text-gray-400 text-sm">@johndoe</span>
                        </div>
                    </div>
                    <span className="cursor-pointer font-bold text-blue-600">Reply</span>
                </div>
                <div className="px-7 pt-2">
                    <p className="ml-14 break-words text-gray-400">Officia ad amet sit exercitation ipsum Lorem cupidatat laborum et qui ut tempor. Amet nisi consequat esse amet ipsum officia fugiat ad duis. Cupidatat commodo nulla esse adipisicing duis consectetur et cillum consectetur est cillum nulla enim. Do voluptate proident ipsum cillum aliqua adipisicing consequat aliqua velit voluptate.</p>
                </div>
            </div>
            <Reply />
        </div>
    )
}

export default Comment
