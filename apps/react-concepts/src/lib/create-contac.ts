

const createContact = async () => {

    try {
        const res = await fetch('http://localhost:5000/contacts', {
             method : 'POST',
             body : JSON.stringify({
             name : 'hello world',
             email : 'hello@gmail.com'
             }),
             headers : {
                 
                'Content-Type': 'application/json'
             }
        })
        const data = await res.json()
        return data;
    } catch (e) {

    }
}
export default createContact