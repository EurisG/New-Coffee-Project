const React = require('react')
// const Products = require('../models/coffee');

class Show extends React.Component {
    render() {
        const Products = this.props.Products;

        return (
            <div>
                <h1>Show Page</h1>

                The {Products.name}{' '}cost: {' '} {Products.price}

                <a href='/home'>Back</a>
            </div>

        );
    }
}

module.exports = Show;