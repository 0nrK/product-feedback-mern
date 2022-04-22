import React from 'react'

const Reply = () => {
    return (
        <div className="flex flex-col px-5">
            <div className="flex flex-col mb-8">
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
                <div className="px-7 mx-10 pt-2">
                    <span className="inline-block text-blue-400">@johndoe </span>
                    <span className="ml-2 break-words text-gray-400">Incididunt Lorem eu est magna. Enim eiusmod proident dolor veniam nostrud mollit ut adipisicing est culpa sint cillum tempor eu. Reprehenderit consectetur duis Lorem tempor ut aliquip adipisicing sint aute. Cillum in aliquip anim velit minim qui deserunt incididunt adipisicing duis.</span>
                </div>
            </div>
            {/* <div className="flex flex-row space-between items-center w-full ">
                <div className="flex flex-row space-x-5">
                    <img
                        className="rounded-full  object-cover h-12   w-12"
                        src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <div className="flex flex-col">
                        <h4 className="font-bold text-xl">Angela Stitt</h4>
                        <span className="text-gray-400 text-sm">@Anstit</span>
                    </div>
                </div>
                <span className="cursor-pointer ml-auto font-bold text-blue-600">Reply</span>
            </div>
            <div className=" mt-2  break-words">
                <span className="inline-block text-blue-400">@johndoe </span>
                <span className="text-gray-400 "> Aborum deserunt enim exercitation cillum dolore Lorem. Esse amet eiusmod nulla ex mollit minim officia adipisicing do ad labore in aute eiusmod.</span>

            </div> */}

        </div>
    )
}

export default Reply
