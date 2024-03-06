import { useState } from "react";
import ContainerInputsJaneDoe from "./ContainerInputsJaneDoe";
import "./ClaimRewardPointsText.css";

const ClaimRewardPointsText = () => {
  const [discountLabelIconChecked, setDiscountLabelIconChecked] =
    useState(true);
  return (
    <div className="claim-reward-points-text">
      <div className="skin-club-logo-logotype-white3">
        <div className="summary-group">
          <div className="dr-vihang-jane-doe-name-frame">
            <div className="product-frame">
              <div className="subtotaltax-discount-frame">
                <div className="subtotal-label">
                  <div className="tax-label" />
                  <input
                    className="discount-label"
                    checked={discountLabelIconChecked}
                    type="checkbox"
                    onChange={(event) =>
                      setDiscountLabelIconChecked(event.target.checked)
                    }
                  />
                </div>
                <div className="shipping1">Shipping</div>
                <div className="payment-form1">
                  <div className="add-details-frame" />
                </div>
              </div>
              <div className="payment-type-group">2</div>
              <div className="credit-debit-card">
                <div className="billing1">Billing</div>
                <div className="ellipse-shape">
                  <div className="agree-checkbox" />
                </div>
              </div>
            </div>
            <div className="group-frame">
              <div className="vector-icon8">3</div>
              <div className="confirmation1">Confirmation</div>
            </div>
            <div className="claim-points-btn">
              <div className="preview-invoice5">Preview Invoice</div>
            </div>
          </div>
          <div className="dr-jane-doe-frame">
            <div className="vitamin-a-serum-frame">
              <div className="rate-qty-amount1" />
              <img
                className="subtotal-tax-discount"
                alt=""
                src="/vector-1.svg"
              />
            </div>
            <div className="vitamin-a-serum-frame1">
              <div className="vitamin-a-serum-frame-child" />
              <img className="vector-icon9" alt="" src="/vector2.svg" />
            </div>
          </div>
        </div>
        <div className="line-shape">
          <div className="total-frame">
            <form className="notes-terms-text">
              <div className="payment-method1">Payment Method</div>
              <div className="enter-name-on1">Enter Name on Card</div>
              <div className="card-number1">Card Number</div>
              <div className="expiry-mmyy1">Expiry (MM/YY)</div>
              <div className="parent-payment">
                <div className="add-details" />
                <div className="payment-method2" />
              </div>
              <button className="rectangle-parent18">
                <div className="frame-child11" />
                <div className="save2">Save</div>
              </button>
              <div className="success-frame">
                <div className="net-banking2" />
                <div className="add-payment-details1">Add Payment Details</div>
                <input className="order-i-d" type="text" />
                <input className="order-i-d1" type="text" />
                <input className="order-i-d2" type="text" />
                <div className="creditdebit-card1">Credit/Debit card</div>
                <div className="ellipse-shape1" />
                <div className="by-clicking-on-container1">
                  <p className="by-clicking-on">
                    By Clicking on ‘Confirm Payment’ I agree
                  </p>
                  <p className="with-the-terms">
                    with the terms and conditions of the Company.
                  </p>
                </div>
                <div className="parent-group">
                  <div className="parent-group-child" />
                  <img
                    className="parent-group-item"
                    loading="lazy"
                    alt=""
                    src="/group-173.svg"
                  />
                  <div className="net-banking-frame">
                    <h1 className="payment-successful">Payment Successful</h1>
                    <div className="amount-i-d">
                      <div className="order-id-7864">Order ID #7864</div>
                    </div>
                  </div>
                  <div className="h-d-f-c-frame">
                    <div className="payment-type-group1">
                      <div className="payment-type">Payment Type:</div>
                      <div className="net-banking3">Net Banking</div>
                    </div>
                    <div className="payment-type-net-banking">
                      <div className="bank-mobile-email">
                        <div className="amount-paid-transaction-i-d1">
                          <div className="bank">Bank:</div>
                          <div className="mobile">Mobile:</div>
                          <div className="email">Email</div>
                        </div>
                        <div className="dr-vihang-jane-doe1">
                          <div className="amount-paid">Amount Paid</div>
                          <div className="transaction-id">Transaction ID</div>
                        </div>
                      </div>
                      <div className="parent-rectangle">
                        <div className="h-d-f-c-parent">
                          <div className="h-d-f-c">
                            <div className="hdfc">HDFC</div>
                          </div>
                          <div className="h-d-f-c1">
                            <div className="div45">+91 12345 67890</div>
                          </div>
                          <div className="bdebashis182gmailcom">
                            <span className="bdebashis182">bdebashis182</span>
                            <span className="span">@</span>
                            <span className="gmailcom">gmail.com</span>
                          </div>
                        </div>
                        <div className="group1">
                          <div className="heroiconssolidgift-parent">
                            <div className="heroiconssolidgift">$180.00</div>
                            <div className="heroiconssolidgift1">
                              #123456789065432
                            </div>
                            <button className="points">
                              <img
                                className="heroicons-solidgift"
                                alt=""
                                src="/heroiconssolidgift.svg"
                              />
                              <div className="points1">480Points</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-frame">
                    <div className="frame-parent6">
                      <button className="rectangle-parent19">
                        <div className="frame-child12" />
                        <img
                          className="rate-qty-amount2"
                          alt=""
                          src="/vector-3.svg"
                        />
                        <div className="send-to-mail">Send to mail</div>
                      </button>
                      <button className="rectangle-parent20">
                        <div className="frame-child13" />
                        <div className="claim-reward-points">
                          Claim Reward points
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="frame-vitamin-a-serum">
            <div className="skin-club-logo-frame" />
            <ContainerInputsJaneDoe
              groupDivAlignSelf="unset"
              groupDivFlex="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimRewardPointsText;
