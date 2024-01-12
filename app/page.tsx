"use client"
import Image from 'next/image'
import React, { useCallback } from 'react'
import {BsBookmark, BsEnvelope, BsTwitter} from "react-icons/bs"
import {BiHomeCircle} from "react-icons/bi"
import {BiHash,BiUser} from "react-icons/bi"
import {BsBell} from "react-icons/bs"
import FeedCard from '@/components/FeedCard'
import { CredentialResponse, GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import  toast,{ Toaster } from 'react-hot-toast';
import { graphqlClient } from '@/clients/api'
import { verifyUserGoogleToken } from '@/graphql/query/user'
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Front from '@/components/Front'




const queryClient = new QueryClient()



 


export default function Home() {
  
  return (
    <QueryClientProvider client={queryClient} >
      < Toaster />
    <GoogleOAuthProvider clientId="144026281361-8d3v91a9g23edsu2qrm3vhe4cs2vgtss.apps.googleusercontent.com">
      <Front/>
    
    </GoogleOAuthProvider>
    <ReactQueryDevtools/>
 
    </QueryClientProvider>
    
  )
}
