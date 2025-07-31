import Nav from '../../components/nav'
export default function Home() {
  return (<>
  <div className=''><Nav/>
 <div className="min-h-screen bg-zinc-900 text-white flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl font-bold text-sky-400 mb-4 animate-fade-in">
        Welcome to the Admin Panel 👋
      </h1>
      <p className="text-lg max-w-xl mb-8 animate-fade-in delay-100">
        To get started, create your first <strong>Organization</strong>
      </p>
  <h2>Step:1<span> Click on the your account and create a orgnization</span></h2>
   <h2>Step:2<span>Now again click your organization and Post some blogs</span></h2>
   <h2>Step:3<span>Now on the blog section u get ur own orgnization url by our domain and where you can see ur all blogs</span></h2>
    </div></div>


  </>)
}
