import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const Document = (props: Props) => {
  return (
    <div>
      <Header>
        <div className='flex w-fit items-center justify-center gap-2'>
          <p className='document-title'>This is a Fake document title</p>
        </div>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </Header>
      <Editor/>
    </div>
  )
}

export default Document