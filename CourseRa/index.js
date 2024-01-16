// function MainContent() {
//     return (
//         <h1>I'm Learning React!</h1>
//     )
// }


// ReactDOM.render(
//     <MainContent />,
//     document.getElementById("root")
//  )

/*Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

 const page = (
    <nav>
       <h1>Porcelain God</h1>
       <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
    </nav>
)

 console.log(page)

 ReactDOM.render(
     page,
     document.getElementById("root")
 )