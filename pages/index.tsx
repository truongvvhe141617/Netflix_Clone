import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"
import NavBar from '@/components/NavBar'
export async function getServerSideProps(context: NextPageContext){
        const session = await getSession(context);
       if(!session){
        return {
          redirect: {
          destination: '/auth',
          permanent: false
          }
        }
       } 
    return {
      props: {

      }
    }
}

export default function Home() {
  // const { data: user } = useCurrentUser();
  return (
    <>
    {/* <h1 className="text-xl text-red-600">Netlfix</h1>
    <p className="text-gray-500">Logged in as: {user?.name}</p>
    <button className="h-10 w-full bg-white" onClick={() => signOut()}>Logout</button> */}
    <NavBar/>
    </>
  )
}
