import SummaryFrame from "../components/SummaryFrame";
import ClaimRewardPointsText from "../components/ClaimRewardPointsText";
import "./PaymentSuccessfull.css";

const PaymentSuccessfull = () => {
  return (
    <div className="payment-successfull">
      <div className="icon-vector">
        <div className="label-text">
          <div className="sunday-20-august">Sunday, 20 August</div>
          <div className="pm">1:50 PM</div>
        </div>
      </div>
      <header className="message-box">
        <div className="circle-shape" />
        <img
          className="skinclublogo-logotype-white-1-icon"
          loading="lazy"
          alt=""
          src="/skinclublogo-logotype-white-1@2x.png"
        />
        <div className="message-box-child" />
        <img
          className="inner-layout-icon"
          loading="lazy"
          alt=""
          src="/vector3.svg"
        />
      </header>
      <div className="layout-group" />
      <div className="layout-group1" />
      <div className="cvv-code">CVV Code</div>
      <div className="payment-successfull-child" />
      <div className="net-banking">Net Banking</div>
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="confirm-payment">Confirm Payment</div>
      </div>
      <div className="payment-successfull-item" />
      <main className="logo-frame">
        <div className="icon-points">
          <div className="summary-box">
            <div className="overview">Overview</div>
            <div className="profile">Profile</div>
          </div>
          <div className="product-details">
            <div className="pricing-data">
              <h1 className="payment">Payment</h1>
              <h3 className="create-a-invoice">
                Create a invoice for your patients
              </h3>
            </div>
          </div>
        </div>
        <section className="tax-discount-frame">
          <SummaryFrame />
          <ClaimRewardPointsText />
        </section>
      </main>
    </div>
  );
};

export default PaymentSuccessfull;
