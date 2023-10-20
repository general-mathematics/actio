
interface ITicket {
    id: number;
    title: string;
    priority: string;
    user_email: string;
}
export default async function About() {
    async function getTickets(){
    const res = await fetch ('http://localhost:4000/tickets', {
        next: {
            revalidate: 30
        }
    }
    )
    console.log("What is res, it is " + typeof(res));
    // console.log(res.text);
    return res.json()

}
    const tickets = await getTickets()
    // console.log("This is an " + typeof(tickets));
    // let ticketKey = Object.keys(tickets);
    // console.log(ticketKey);
    // let ticketValues = Object.entries(tickets);
    // console.log(ticketValues);
    // console.log("This is an an an " + typeof(ticketKey));

  return (
    <>
        {tickets.map((element:ITicket)=> (

            <div key={element.id}>
                <h2>{element.id}</h2>
                <h3>{element.title}</h3>
                <p>Ticket Priority: {element.priority}</p>
                <p>User Email: {element.user_email}</p>
            </div>
        ))}
    </>
  )
}
