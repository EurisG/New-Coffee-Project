// Importing react 
const React = require('react')
// const Products = require('../models/coffee');

const myBody = {
    // backgroundColor: "#A3CCAB",
    backgroundImage: "url('https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80')",
    margin: "30px",
    backgroundSize: "cover"
    // padding: "30px"
}

const myPic = {
    width: "40%",
    height: "40%",
    border: "solid 6px white"
}

const secText = {
    color: "#14140F",
    float: "right",
    fontSize: "18px",
    border: "double 6px white",
    padding: "10px",
    borderRadius: "10px",
    fontWeight: "bold",
    // fontFamily: "'Fredericka the Great', cursive",
}
const rdText = {
    color: "#14140F",
    fontSize: "18px",
    border: "double 6px white",
    padding: "10px",
    borderRadius: "10px",
    fontWeight: "bold",
    marginTop: "10px",
    float: "right"
    // width: "30%"
}


const text = {
    color: "#14140F",
    fontSize: "45px",
    textDecoration: "underline #34675C",

}
const myProd = {
    display: "flex",
    justifyContent: "center",
    border: "4px #F26800",
    borderStyle: "double",
    borderRadius: "25px",
    width: "40%",
    backgroundColor: "#053D38",
    color: "white",
    padding: "10px"
}


const myFooter = {
    backgroundColor: "#14140F",
    color: "white",
    textAlign: "center",
    padding: "40px",
    marginTop: "100px",
    fontWeight: "bold"
}
class Show extends React.Component {
    render() {
        const Products = this.props.Products;
        console.log(Products);
        Products.img.includes('.jpg'),('.jpeg')? Products.img: Products.img += '.jpg';
        console.log(Products.img)
        return (
            <div>
                <body style={myBody}>
                <a style={secText}href='/home'>Home</a>
                <h1 style={text}>{Products.name}</h1>
               
                <br />
                
                <br />
                <img style={myPic} src={Products.img}></img>
                <br />
                <h3 style={myProd}>The {Products.name}{' '}cost: {' '} ${Products.price}</h3>
                <div  >
                <a  style={rdText} href='/home/:id/edit'>Edit {Products.name} </a>
                {' '}
                <a  style={rdText} href='/product/:id/delete'>Delete {Products.name} from menu</a>
                </div>
                <div style={myFooter}>
                                <footer >Made By : Euris Gonzalez™</footer>
                                </div>
                    </body>
            </div>

        );
    }
    
}


module.exports = Show;