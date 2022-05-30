const React = require('react');

class New extends React.Component{

    render() {

        return(
            <>
           <form action="/home" method='POST'>
               name: <input type="text" name='name'></input><br />
               price: <input type="number" name="price"></input>
               <input type="submit" name='' value="Create Product"/>
           </form>
    
             </>
        )
    }

}

module.exports = New

// <form action="/new" method="POST">
// name: <input type="text" name="name" placeholder='POST'/><br/>
// price: <input type="text" name="price" placeholder='add' /><br/>
// {/* Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/> */}
// <input type="submit" name="" value="Create Product"/>
// </form>