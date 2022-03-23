import React from 'react'

const Reply = () => {
    return (
        <div className="flex flex-col pl-8">
            <div className="flex flex-row justify-between items-center px-5 space-x-12">
                <div className="flex flex-row space-x-5 ">
                    <img
                        className="rounded-full  object-cover h-12   w-12"
                        src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <div className="flex flex-col">
                        <h4 className="font-bold text-xl">Angela Stitt</h4>
                        <span className="text-gray-400 text-sm">@Anstit</span>
                    </div>
                </div>
                <span className="cursor-pointer font-bold text-blue-600">Reply</span>
            </div>
            <div className="flex flex-row px-7 pt-2">
                <span className="ml-14   text-gray-400 ">@johndoe Aborum deserunt enim exercitation cillum dolore Lorem. Esse amet eiusmod nulla ex mollit minim officia adipisicing do ad labore in aute eiusmod.</span>
            </div>
        </div>
    )
}

export default Reply
