import React from 'react'

export const ResponsivePage = () => {
  return (
    <div className='p-2'>
        <div className='flex justify-center items-center bg-red-500 w-1/4 ml-auto m-2 h-[2.5rem] web:w-full web:bg-red-500 tablet:w-full' >
            merah
        </div>
        <div class='flex flex-col gap-2 web:flex-row tablet:flex-col-reverse'>
            <div class='flex justify-center items-center w-full bg-purple-500 text-center h-[8rem] web:w-1/4 tablet:w-full web:h-[auto] '>
                ungu
            </div>
            <div class='flex flex-col-reverse gap-2 web:flex-col web:w-3/4 tablet:flex-col mobile:flex-col-reverse'>
                <div class='flex justify-center items-center w-full bg-green-500 text-center w-full h-[8rem] tablet:w-full'>
                    hijau
                </div>
                <div class='flex flex-row-reverse gap-2 web:flex tablet:flex-row'>
                    <div class='flex justify-center items-center w-2/4 bg-blue-500 text-center h-[8rem] web:w-2/4 web:bg-blue-500 tablet:bg-pink-500  '>biru</div>
                    <div class='flex justify-center items-center w-2/4 h-[8rem] web:w-2/4 bg-pink-500 text-center'>pink</div>

                </div>
              
            </div>

        </div>

    </div>


  )
}
