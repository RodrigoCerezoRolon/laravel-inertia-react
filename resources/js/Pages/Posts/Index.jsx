import InputError from "@/Components/InputError";
import Post from "@/Components/Post";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

const Index = ({auth,posts})=>{
    const {data,setData,post,processing,reset,errors}= useForm({
        title:'',
        body:''
    });
    const submit= (e)=>{
        e.preventDefault()
        console.log(data);
        post(route('posts.store'),{onSuccess:()=>reset()})
    }
   
    return (
       
        <AuthenticatedLayout user={auth}
        header={
            <div>
                Post                
           </div>
        }>
            <Head title="Post"/>
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <input 
                        value={data.title}
                        onChange={e=>setData('title',e.target.value)}
                        type="text"
                        placeholder="Title"
                        autoFocus
                        className="mb-3 block w-full border-gray-300 focus:boder-indigo-300 focus:ring "
                    ></input>
                    <InputError message={errors.title} className="mt-2"></InputError>
                    <textarea
                          value={data.body}
                          onChange={e=>setData('body',e.target.value)}
                          placeholder="Body"
                          className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                    ></textarea>
                    <InputError message={errors.body} className="mt-2"></InputError>
                    <PrimaryButton  className="mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Create</PrimaryButton>
                </form>
                <div className="mt-6 bg-indigo-400  rounded-lg divide-y-4 shadow-lg">
                    {
                        posts.map(post=>
                            <Post key={post.id} post={post}/>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
export default Index