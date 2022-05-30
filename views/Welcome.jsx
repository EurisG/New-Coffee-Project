const React = require('react');

class Welcome extends React.Component {

    render() {

        return(

            <div>
                <h1>Welcome to Haba's Coffee Shop</h1>
                <h3>The best Coffee in Town!</h3><br />
                <h3>Click below to view all products :</h3>
                <a href='/home'>All Products</a>

            </div>


        );

    }




};

module.exports = Welcome;