import { Suspense } from "react";
import { Await, Form, useFetcher, useLoaderData } from "react-router-dom";

// const contact = {
//   id: '1',
//   name: 'some name',
//   email: 'helo@emailcom',
//   favorite: true,
// };

// type ContactType = typeof contact;

export default function Contact() {

 const {contact} = useLoaderData() as { contact : User};
  return (
    <Suspense fallback={<div>Loading ... signle contact </div>}>
      <Await resolve={contact}>
    {
      (contact)=>{

        return   <div id="contact" className="flex gap-5">
        <div>
          <img
            key={'https://flagcdn.com/w20/ua.png'}
            src={'https://flagcdn.com/w20/ua.png'}
            className="w-[100px] h-[100px] object-cover"
          />
        </div>
  
        <div className="space-y-4">
          <h1 className="flex gap-4 text-3xl text-blue-400">
            {contact.name ? (
              <>
                {contact.name}
              </>
            ) : (
              <i>No Name</i>
            )}{" "}
            <Favorite contact={contact} />
          </h1>
  
          {/* {contact.twitter && (
            <p>
              <a
                target="_blank"
                href={`https://twitter.com/${contact.twitter}`}
                className="text-blue-300 font-2xl underline"
              >
                {contact.twitter}
              </a>
            </p>
          )}
  
          {contact.notes && <p>{contact.notes}</p>} */}
  
          <div className="flex gap-5">
            <Form action="edit">
              <button type="submit" className="border border-blue-400 py-1 px-4 rounded-md">Edit</button>
            </Form>
            <Form
              method="post"
              action="destroy"
              className="border border-red-400 py-1 px-4 rounded-md"
              onSubmit={(event) => {
                if (
                  !confirm(
                    "Please confirm you want to delete this record."
                  )
                ) {
                  event.preventDefault();
                }
              }}
            >
              <button type="submit">Delete</button>
            </Form>
          </div>
        </div>
      </div>
      }
    }
    </Await>
    </Suspense>
  );
}

function Favorite({ contact }: { contact: User }) {
  // yes, this is a `let` for later
  
  const fetcher = useFetcher()
  let favorite = contact?.favourite ;
  
   console.log('fetch', fetcher)

   const submitting = fetcher.state ==='submitting'

  return (
    <fetcher.Form method="PATCH">
      <button
        name="favourite"
        className="text-yellow-500"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
        {
          submitting && (
          <p>updating fav ....</p>
          )
        }
      </button>
    </fetcher.Form>
  );
}