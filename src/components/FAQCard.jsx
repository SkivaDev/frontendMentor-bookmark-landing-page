import React from 'react'

function FAQCard({ question, answer, iconUrl, isLastChild }) {
  return (
    <details className={`w-full self-auto border-very-dark-blue border-t ${isLastChild ? 'border-b' : ''}`}>
      <summary className='flex justify-between items-center pr-[1.3125rem] py-[1.1875rem] text-[18px] hover:cursor-pointer hover:text-soft-red'>
        <h3 className=''>{question}</h3>
        <span>
          <img src={iconUrl} alt="iconUrl" />
        </span>
      </summary>
      <p className='px-[1rem] py-[.75rem] text-very-dark-blue/50'>{answer}</p>
    </details>
  )
}

export default FAQCard