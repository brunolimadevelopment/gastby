import React from 'react'
import Layout from '../components/Layout'
import * as Styled from '../styles/pages/contactStyles'
import Seo from "../components/seo"


const Contact = () => {
    const text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';

    return (
        <Layout>
            <Seo title="Contact" lang="uk"/>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-4 mb-3">
                        <h1>Page Contact</h1>
                        <p>{ text }</p>
                    </div>
                    <div className="col-md-6 mb-3">
                    {
                    // /success redireciona para a pagina de sucesso apos o submit
                    /* <form name="contact" method="POST" data-netlify="true" action="/sucess"> */}
                    <form name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="form-group">
                            <input name="name" type="text" className="form-control" id="exampleInputName" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input name="email" type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail" />
                        </div>
                        <div className="form-group">
                            <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Textarea"></textarea>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item"><Styled.EmailWrapper danger/>teste@gmail.com</li>
                            <li className="list-group-item"><Styled.PhoneWrapper danger/>(00) 98765-4321</li>
                            <li className="list-group-item"><Styled.LocationOnWrapper danger/>Street 27, 133</li>
                            {/* <li className="list-group-item"><Styled. className="w-25 text-danger"/>Telefone</li>
                            <li className="list-group-item"><Icons.LocationOn className="w-25 text-danger"/>Localização</li> */}
                        </ul>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact