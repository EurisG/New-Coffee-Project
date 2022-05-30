const React = require('react');

class New extends React.Component{

    render() {

        return(
            <>
            
            <nav><br />
                <a href="/home">Home</a><br /><br />
            </nav>
           <form action="/home" method='POST'>
               Product Name: <input type="text" name='name' placeholder='type..'></input><br /><br />
               Product Price: <input type="text" name="price" placeholder='cost ?..'></input><br /><br />
               <input type="submit" name='' value="Create Product"/>
           </form>
    
             </>
        )
    }

}

module.exports = New

