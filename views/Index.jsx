// Importing React 
const React = require('react');
const Products = require('../models/coffee')

const myBody = {
    background: "rgb(251,126,63)",
    margin: "30px",
    // padding: "30px"
}

const myProd = {
        display: "flex",
        justifyContent: "center",
        border: "solid 2px black",
        width: "50%"
}


class Index extends React.Component{

    render() {
        const {Products} = this.props;
      
        return(

                <div>
                    <body style={myBody}>
                        
                  
                        <h1> Welcome Coffee Lover!</h1>
                        <a href='/'>Back</a>
                        <h3>Choose Item Below</h3>
                            <ul >
                            
                                {Products.map(( Products, i) => {
                                    return (
                                            <li style={myProd}>
                                                    <a href={`/product/${i}`}><h3>{Products.name}</h3></a><h4><br />Price:{' '}${Products.price}</h4> <br /> 
                                                    <br />
                                                    
                                                   
                                            </li>

                                    );
                                })}
                                
                            </ul>
                            <h3>Add New Product to Menu</h3>
                        <nav>
                            <a href='/home/new'>Create New Product</a>
                        </nav>
                            </body>
                </div>

        );




    }


};


module.exports = Index;