import React, { Component } from 'react'
import { Link } from 'react-router-dom';

 class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="single_form">
                    
                        <Link to={'/normal-form'}>Normal Form</Link>
                        <Link to={'/normal-form'}>
                        <img src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.0-9/s960x960/117398772_108076821012250_4643465392062145937_o.jpg?_nc_cat=100&_nc_sid=ca434c&_nc_eui2=AeFoAiRHRT4cOoit32aLpX4hwxj2TceBj0XDGPZNx4GPRb-dkT0brnKBGK1DCHX1Tr29QcT28Rwj8yWp9UuArGvK&_nc_ohc=YdIA1IcunNsAX_GSGyx&_nc_ht=scontent.fdac7-1.fna&_nc_tp=7&oh=5ab94fb1d44174921f5a81cd3b3ea7e7&oe=5F5EC92A" alt="" />

                        </Link>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="single_form">
                    
                        <Link to={'/signup-form'}>SignUp Form</Link>
                        <Link to={'/signup-form'}>
                        <img src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.0-9/s960x960/117398772_108076821012250_4643465392062145937_o.jpg?_nc_cat=100&_nc_sid=ca434c&_nc_eui2=AeFoAiRHRT4cOoit32aLpX4hwxj2TceBj0XDGPZNx4GPRb-dkT0brnKBGK1DCHX1Tr29QcT28Rwj8yWp9UuArGvK&_nc_ohc=YdIA1IcunNsAX_GSGyx&_nc_ht=scontent.fdac7-1.fna&_nc_tp=7&oh=5ab94fb1d44174921f5a81cd3b3ea7e7&oe=5F5EC92A" alt="" />

                        </Link>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Home;
