 // Importing react 
const { Cursor } = require('mongoose');
const React = require('react');
const Products = require('../models/coffee')

const myBody = {
    // backgroundColor: "#A3CCAB",
    backgroundImage: "url('https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80')",

    margin: "30px",
    // backgroundSize: "cover",
    padding: "30px"
}

const text = {
    color: "#14140F",
    fontSize: "25px",
    textDecoration: "underline #34675C",
    // fontFamily: "'Fredericka the Great', cursive",

}
const myForm = {
    border: "double 6px #F26800 ",
    padding: "15px",
    width: "40%",
    marginTop: "50px",
    webkitBoxShadow: "0px 0px 0px 8px #000000, 0px 0px 0px 16px #4B4C4B, 0px 0px 0px 24px #828482, 0px 0px 0px 31px #B2B5B2, 0px 0px 0px 39px #DADDDA, 5px 5px 15px 5px rgba(0,0,0,0)", 
    boxShadow: "0px 0px 0px 8px #000000, 0px 0px 0px 16px #4B4C4B, 0px 0px 0px 24px #828482, 0px 0px 0px 31px #B2B5B2, 0px 0px 0px 39px #DADDDA, 5px 5px 15px 5px rgba(0,0,0,0)"
   
}
const inside = {
    padding: "10px",
    width: "50%",
    height: "50%",
   fontWeight: "bold"
}
const rdText = {
    color: "#14140F",
    fontSize: "18px",
    border: "double 6px white",
    padding: "10px",
    borderRadius: "10px",
    fontWeight: "bold",
    float: "right"
}

const button = {
    padding: "5px",
    backgroundColor: "#A3CCAB",
    cursor: "pointer"

}

class New extends React.Component{

    render() {

        return(
            <>
                <body style={myBody}>
                    
                
            <nav><br />
                <a style={rdText} href="/home">Home</a><br /><br />
            </nav>
            <h3 style={text}>Add New Product to Menu</h3>
           <form  style={myForm} action="/home" method='POST'>
               <div style={inside}>
               Product Name: <input type="text" name='name' placeholder='type..' value={Products.name}></input><br /><br />
               Product Price: <input type="text" name="price" placeholder='cost..' value={Products.price}></input><br /><br />
               Product Image: <textarea type="text" name="img" placeholder='paste img address..' value={Products.img}></textarea><br /><br />
               <input type="submit" name='' value="Create Product" style={button}/>
               </div>
           </form>
       
            </body>
             </>
        )
    }

}

module.exports = New

