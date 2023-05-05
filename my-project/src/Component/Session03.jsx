import React from 'react'

function Session03() {
  return (
    <>
      <div className="bg-[#19142A] w-screen h-screen flex flex-col">
        <div className="container mx-auto mt-28">
          <div className='flex flex-row'>
            <div className='w-[50%] flex flex-col'>
                <h1 className=''>Portifolio</h1>
                <p className='max-w-md text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde, dolore, nam ullam commodi laboriosam aliquid odit harum doloremque ex labore totam veniam quod assumenda, nulla earum rerum explicabo ipsa!</p>
            </div>
            <div className='w-[50%] flex flex-row justify-end '>
                <button className='mt-5 h-[50px] bg-[#19142A] text-white border border-white'>Projetos Pessoais</button>
                <button className='mt-5 h-[50px] bg-[#19142A] text-white border border-white ml-10'>Projetos Profissionais</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Session03