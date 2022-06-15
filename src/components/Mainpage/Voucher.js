import React, { useState } from 'react';
import './css/mainpage.css';
import './css/voucher.css';
import { Button, Collapse } from 'react-bootstrap';

function Voucher() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="redeem-wrapper">
                <section className="redeem-section">
                    <div className="img-wrapper">
                        <img className='voucherbg' src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_08CCDEC1-415A-42B9-90C1-9F1AA6AE9D1D_2022-5-30-T11-0-51.jpg?s=1440x679&t=bgbannermesh" alt="redeembg" />
                    </div>

                    <div className="container mainvoucher">
                        <div className="voucher-wrapper">
                            <div className="redeem-content">
                                <h1 className="redeem-title">Redeem your Voucher</h1>
                                <p className="redeem-text">Enter your voucher code below:</p>
                                <div className="input-wrapper">
                                    <input type="text" className='redeem-input' maxLength='12' placeholder='Enter your voucher code' autoComplete='off' />
                                    <Button variant="primary" className='redeembutton'>Redeem</Button>
                                </div>

                                <div className="vouchertext-wrapper">
                                    <div className="voucher-item">
                                        <h3 className="voucher-text">Sky Store Vouchers</h3>
                                        <div className="voucher-para">
                                            <p>Got a Sky Store Voucher? Simply enter your voucher code to get started.</p>
                                            <p>Buy & Keep all the latest movies direct from the cinema and TV shows too. Straight to your TV*, on your devices and the DVD or box set in the post.</p>
                                        </div>
                                    </div>
                                    <div className="faq-link">
                                        <a href="">Frequently Asked Questions</a>
                                    </div>

                                    <div className="require-link">
                                        <p>*Requires <a href=''>compatible Sky box or NOW TV box</a> connected to broadband.</p>
                                    </div>
                                </div>
                                <div className="termbtn-wrapper">
                                    <Button
                                        className='termsbutton'
                                        onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}
                                    > <div className="arrow-wrapper">
                                            <p>Terms and Conditions for Sky Store Vouchers</p>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#78b6fa" class="bi bi-chevron-down terms-arrow" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </div>
                                    </Button>
                                    <Collapse in={open}>
                                        <div id="example-collapse-text" className='collapse-text'>
                                            <p className='termtext first-tc'>These Terms and Conditions were last updated in May 2017 in relation to clause 3 by adding a new voucher type.</p>
                                            <p className='termtext second-tc'>Vouchers are issued in the UK by Sky UK Limited and in the Republic of Ireland by Sky Ireland Limited (collectively "<b>Sky</b>").</p>
                                            <p className='termtext third-tc'>By redeeming your Voucher, you agree to the following conditions:</p>
                                            <ol>
                                                <li>Unless stated otherwise, Vouchers may only be redeemed and spent on either the Sky Store website located at<a href='' className='cond-link'>skystore.com</a>(the "Website") or the Sky Store app on your compatible Roku box or Android device. Vouchers cannot be used for purchases made on a Sky+HD box or a Sky Q box. However, Buy & Keep purchases made using redeemed Vouchers can be sent to the box.</li>
                                                <li><b>Eligibility</b>: To redeem a Voucher you must have a SkyiD account and have accepted the Sky Store terms and conditions. These terms apply in addition to the Sky Store terms and conditions and in the event of any conflict, these terms prevail.</li>
                                                <li><b>Redemption</b>: Vouchers are either assigned a fixed monetary value ("<b>Monetary Vouchers</b>") , or a percentage or monetary value off the purchase price ("<b>Discount Vouchers</b>") or permit access to a particular title ("<b>Content Vouchers</b>", collectively with Monetary Vouchers and Discount Vouchers, the "<b>Vouchers</b>"). Depending on your Voucher type, we'll either reduce the price of your next purchase by the amount stated on your Discount Voucher, add the title or amount of credit your Voucher entitles you to, to your Sky Store account on the Website when you redeem the Voucher. </li>
                                                <li>Vouchers must be redeemed by the expiry date specified on the Voucher or in accompanying materials.</li>
                                                <li>When redeemed, Monetary Vouchers will credit your account with a value in the local currency and all purchases will be with that currency. When you make a purchase, the cost will be deducted from the value held in your account and if there is any difference between the cost of the purchase and the value in your account, you will need to pay this amount.</li>
                                                <li>Once added to your account, for any Vouchers issued from 16th December 2016, you will have 12 months in which to use your credit balance before the balance is removed from your account. For Vouchers issued prior to this date you will have 36 months in which to use your credit balance before it is removed from your account. </li>
                                                <li>Any unused balances are not redeemable for cash or transferable and will not be returned to you (unless we are required to by law).</li>
                                                <li>Content Vouchers can only be used in relation to the title or content for which they are issued and set out either on the Voucher itself or within the accompanying materials.</li>
                                                <li>You can't re-load or top-up Vouchers.</li>
                                                <li>Vouchers are for your own personal non-commercial use and not for resale.</li>
                                                <li>If you received a Voucher because you placed another order with Sky and you subsequently cancel that other order (for example, if you exercise your cooling off rights in respect to it) we reserve the right to cancel the voucher and/or remove the voucher balance from your Sky Store account. subsequently cancel that other order (for example, if you exercise your cooling off rights in respect to it) we reserve the right to cancel the voucher and/or remove the voucher balance from your Sky Store account.</li>
                                                <li>Sky is not responsible for any Vouchers that are lost, stolen, destroyed or used without your permission.</li>
                                                <li>If a valid Voucher cannot be redeemed as expected because it is faulty we'll replace it.</li>
                                                <li>A Voucher is not a credit, debit or charge card. A Voucher cannot be exchanged for other Vouchers and is not refundable (for cash or otherwise), except to the extent required by law.</li>
                                                <li>We may update or amend these terms and conditions from time to time to improve the Sky Store service or as new products and features become available. The latest version of the terms and conditions will be available on the Website.</li>
                                            </ol>
                                        </div>
                                    </Collapse>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Voucher