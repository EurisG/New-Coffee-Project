const React = require('react')
// const Products = require('../models/coffee');

const myPic = {
    width: "40%",
    height: "40%",
    border: "solid 2px red"
}
class Show extends React.Component {
    render() {
        const Products = this.props.Products;
        console.log(Products);
        Products.img.includes('.jpg'),('.jpeg')? Products.img: Products.img += '.jpg';
        console.log(Products.img)
        return (
            <div>
                <h1>{Products.name}</h1>
               
                <a href='/home'>Back</a>
                <br />
                <br />
                <h3>The {Products.name}{' '}cost: {' '} ${Products.price}</h3>
                <br />
                <img style={myPic} src={Products.img}></img>
                <br />
                <a href='/home/:id/delete'>Delete from menu</a>
            </div>

        );
    }
}

module.exports = Show;