// Importing React 
const React = require('react');
const Products = require('../models/coffee')

const myBody = {
    // backgroundColor: "#A3CCAB",
    backgroundImage: "url('https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80')",

    margin: "30px",
    backgroundSize: "cover"
    // padding: "30px"
}

const head = {
    backgroundColor: "#34675C",
    color: "white",
    textAlign: "center",
    padding: "30px",
    border: "4px #14140F",
    borderStyle: "double",
}
const text = {
    color: "#14140F",
    fontSize: "25px",
    textDecoration: "underline #34675C"

}
const proText = {
    color: "white",
    fontSize: "25px",
    textDecoration: "underline #34675C"

}

const secText = {
    color: "#14140F",
    float: "right",
    fontSize: "18px",
    border: "double 4px white",
    padding: "10px",
    borderRadius: "10px"
}

const rdText = {
    color: "#14140F",
    fontSize: "18px",
    border: "double 4px white",
    padding: "10px",
    borderRadius: "10px",
    
}

const myProd = {
        display: "flex",
        justifyContent: "center",
        border: "4px #F26800",
        borderStyle: "double",
        borderRadius: "25px",
        width: "50%",
        backgroundColor: "#053D38",
        color: "white",
}

const myFooter = {
    backgroundColor: "#14140F",
    color: "white",
    textAlign: "center",
    padding: "40px",
    marginTop: "20px",
    fontWeight: "bold"
}

class Index extends React.Component{

    render() {
        const {Products} = this.props;
      
        return(

                <div>
                    <body style={myBody}>
                        
                  
                        <h1 style={head}> Welcome Coffee Lover!</h1>
                        <a style={secText} href='/'>Back</a>
                        <h3 style={text}>Choose Item Below</h3>
                            <ul >
                            
                                {Products.map(( Products, i) => {
                                    return (
                                            <li style={myProd}>
                                                    <a style={proText} href={`/product/${i}`}><h3>{Products.name}</h3></a><h4><br /><br />Price:{' '}${Products.price}</h4> <br /> 
                                                    <br />
                                                    
                                                   
                                            </li>
                                                    
                                    );
                                    
                                })}
                               
                            </ul>
                            <h3 style={text}>Add New Product to Menu</h3>
                        <nav>
                            <a style={rdText} href='/home/new'>Create New Product</a>
                        </nav>
                                <div style={myFooter}>
                                <footer >Made By : Euris Gonzalez™</footer>
                                </div>
                            </body>
                </div>

        );




    }


};


module.exports = Index;