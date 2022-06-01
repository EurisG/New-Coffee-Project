const React = require('react')
// const Products = require('../models/coffee');

class Show extends React.Component {
    render() {
        const Products = this.props.Products;
        console.log(Products);
        return (
            <div>
                <h1>{Products.name}</h1>
               
                <a href='/home'>Back</a>
                <br />
                <br />
                <h3>The {Products.name}{' '}cost: {' '} ${Products.price}</h3>
                <br />
                
                <br />
                <a href='/home/:id/delete'>Delete from menu</a>
            </div>

        );
    }
}

module.exports = Show;