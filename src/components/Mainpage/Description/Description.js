import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../css/mainpage.css';
import '../css/voucher.css';
import Header from '../Header';

function Description() {

    return (
        <>
            <div className="card container rent">
                <section>
                    <div className="page">
                        <div className="background bgWrapper">
                            <Helmet>
                                <title>Sky Store – The Latest Movies Straight From The Cinema</title>
                            </Helmet>
                            {/* <header className="headerWrapper">
                        <Header onClick={getData} />
                    </header> */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Description