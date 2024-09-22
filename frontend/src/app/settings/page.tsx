
'use client'
import { useSession } from "next-auth/react"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


export default async  function Settings(){
    const {data: session, status} = useSession()
    console.log(status)
    // const session =await getServerSession()
    // console.log('session', session)
    // if(!session || !session.user){
        // redirect('/signin')
    // }
    return <h1>here comes the Settings</h1>
}