import "./SummaryFrame.css";

const SummaryFrame = () => {
  return (
    <div className="summary-frame">
      <div className="appointments1">Appointments</div>
      <div className="payment-details-container">
        <div className="history1">History</div>
        <div className="credit-debit-card-symbol">
          <div className="background-ellipse">
            <div className="videos1">Videos</div>
            <div className="videos-library1">Videos Library</div>
          </div>
        </div>
      </div>
      <div className="messages1">Messages</div>
      <div className="payment-details-container1">
        <div className="support1">Support</div>
        <div className="payment-details-container-inner">
          <div className="faqs-parent">
            <div className="faqs1">FAQ’s</div>
            <div className="procedure-information1">Procedure Information</div>
          </div>
        </div>
      </div>
      <div className="payment-details-container2">
        <div className="aftercare1">Aftercare</div>
        <div className="payment-details-container-child">
          <div className="quizzes-parent">
            <div className="quizzes1">Quizzes</div>
            <div className="health-skin1">{`Health & Skin Assesment`}</div>
          </div>
        </div>
      </div>
      <div className="finances1">Finances</div>
      <div className="bank-mobile-email-input">
        <div className="amount-paid-transaction-i-d">
          <div className="h-d-f-c-logo-frame" />
          <div className="heroiconsolidgift-frame" />
        </div>
        <div className="virtual-consultation1">Virtual Consultation</div>
      </div>
    </div>
  );
};

export default SummaryFrame;
