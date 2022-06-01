const React = require('react');

const myBody = {
    // backgroundColor: "#A3CCAB",
    backgroundImage: "url('https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80')",

    margin: "30px",
    // backgroundSize: "cover"
    padding: "30px"
}
class New extends React.Component{

    render() {

        return(
            <>
                <body style={myBody}>
                    
                
            <nav><br />
                <a href="/home">Home</a><br /><br />
            </nav>
           <form action="/home" method='POST'>
               Product Name: <input type="text" name='name' placeholder='type..'></input><br /><br />
               Product Price: <input type="text" name="price" placeholder='cost ?..'></input><br /><br />
               <input type="submit" name='' value="Create Product"/>
           </form>
            </body>
             </>
        )
    }

}

module.exports = New

