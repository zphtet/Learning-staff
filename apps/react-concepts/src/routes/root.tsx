import { Suspense, useEffect, useRef, useState } from "react";
import { Await, NavLink, useNavigation, useSubmit } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Form } from "react-router-dom";
import { useDebounce } from "use-debounce";

export default function Root() {
  const { data, q } = useLoaderData() as { data: User[], q: string };
  const submit = useSubmit()


  const [query, _] = useState(q);
  const [searchQuery] = useDebounce(query, 500)
  //  const previousQuery = usePrevious(searchQuery)

  //  const hasChanged = searchQuery === previousQuery

  const ref = useRef<HTMLInputElement>(null)

  const navigation = useNavigation();
  //  const submitting  = navigation.state === 'submitting'
  const loading = navigation.state === 'loading'
  const searching = navigation.location &&
    new URLSearchParams(navigation.location.search).has('q')


  useEffect(() => {
    // @ts-ignore
    submit(ref.current?.parentNode)
  }, [searchQuery])

  useEffect(() => {
    // client.query({
    //   query: gql`
    //        query Authors {
    //                     Authors {
    //                       id
    //                       name
    //                       verified
    //                     }
    //                  }
             
    //        `
    // }).then(data=> console.log(data.data))
  }, [])




  console.log(searching, 'searvhing')

  return (
    <div className="flex gap-5 p-5">
      <div id="sidebar" className=" max-w-[400px] space-y-5">
        <h1>React Router Contacts</h1>
        <div className="flex gap-5 pb-10 border-b border-blue-600">
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              ref={ref}
              defaultValue={query}
              onChange={(e) => {
                // setQuery(e.target.value)
                const isFirstSearch = q == null
                submit(e.currentTarget.form, {
                  replace: !isFirstSearch
                })
              }}
              className="border border-blue-500 outline-none px-2 py-2"
            />
            <div
              id="search-spinner"
              aria-hiddenwrre
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </Form>
          <Form method="post">
            <button type="submit" className="px-2 py-2 border border-blue-400 rounded-md">New</button>
          </Form>
        </div>
        <nav>
          {
            searching &&
            <div>Loading ... </div>
          }
          {
            !searching &&

            <ul className="space-y-2">
              {
                data.length > 0 &&
                data.map((user) => {
                  return <li key={user.id}>
                    <NavLink className={({ isActive, isPending }) => {
                      return isActive ? 'text-red-500' : isPending ? 'text-blue-500' : "text-black"
                    }} to={`contacts/${user.id}`}>{user.name}</NavLink>
                  </li>
                })
              }

            </ul>
          }
        </nav>
      </div>
      <div id="detail" className="relative flex-1">
        {/* {
            loading && 
             <div className="absolute inset-0 top-0 right-0 bg-teal-200 opacity-55">
                    
             </div>
          } */}


        <Outlet />

      </div>
    </div>
  );
}