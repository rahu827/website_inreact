import React from 'react'
import "./service.css"
function Services() {
    return (
        <div className='awesome_services'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='custom_col'>
                            <h1>my awesome <br/> <span>services</span></h1>
                            
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a docu</p>
                            <button>download cv</button>
                       <div className='blur'></div>
                       <div className='blur_custom1'></div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='row'>
                            <div className='col-lg-12 cust mt-5'>
                                <div className='col_custom'>
                                    <img src='img/emoji.png' alt='emoji' className='img_custom'/>
                               <h3>Webdesign</h3>
                               <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space whic</p>                                </div>
                            </div>
                            <div className='col-lg-6 mt-9 relative'>
                                <div className='col_custom'>
                                    <img src='img/emoji.png' alt='emoji' className='img_custom'/>
                               <h3>development</h3>
                               <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space whic</p>
                                </div>
                            </div>
                            <div className='col-lg-6 relative'>
                                <div className='col_custom'>
                                    <img src='img/emoji.png' alt='emoji' className='img_custom'/>
                               <h3>development</h3>
                               <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space whic</p>                                </div>
                            </div>
                        </div>
                        <div className='blur_custom'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services