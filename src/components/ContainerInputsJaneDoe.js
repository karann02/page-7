import { useMemo } from "react";
import "./ContainerInputsJaneDoe.css";

const ContainerInputsJaneDoe = ({ groupDivAlignSelf, groupDivFlex }) => {
  const groupDivStyle = useMemo(() => {
    return {
      alignSelf: groupDivAlignSelf,
      flex: groupDivFlex,
    };
  }, [groupDivAlignSelf, groupDivFlex]);

  return (
    <div className="rectangle-parent21" style={groupDivStyle}>
      <div className="frame-child14" />
      <div className="skin-club-logo-logotype-white5">
        <img
          className="skinclublogo-logotype-white-2-icon1"
          loading="lazy"
          alt=""
          src="/skinclublogo-logotype-white-2@2x.png"
        />
        <div className="summary">
          <div className="summery1">SUMMERY</div>
          <img className="frames-icon1" loading="lazy" alt="" />
        </div>
      </div>
      <div className="frames1">
        <div className="dr-vihang-jane-doe2">
          <div className="dr-vihang1">Dr. Vihang</div>
          <div className="jane-doe1">Jane Doe</div>
        </div>
      </div>
      <div className="frames2">
        <div className="frames-child" />
        <div className="rectangle-parent22">
          <div className="frame-child15" />
          <div className="item-frame">
            <div className="item1">item</div>
          </div>
          <div className="rate1">Rate</div>
          <div className="qty1">Qty</div>
          <div className="amount1">Amount</div>
        </div>
        <div className="vitamin-a-night-serum-frame1">
          <div className="vitamin-a-night-serum-parent1">
            <div className="vitamin-a-night3">Vitamin A Night Serum</div>
            <div className="frames-parent">
              <div className="frames3">$90</div>
              <div className="frames4">2</div>
              <div className="frames5">$180</div>
            </div>
          </div>
        </div>
        <div className="vitamin-a-night-serum-frame2">
          <div className="vitamin-a-night-serum-parent2">
            <div className="vitamin-a-night4">Vitamin A Night Serum</div>
            <div className="parent">
              <div className="div46">$90</div>
              <div className="div47">2</div>
              <div className="div48">$180</div>
            </div>
          </div>
        </div>
        <div className="vitamin-a-night-serum-frame3">
          <div className="vitamin-a-night-serum-parent3">
            <div className="vitamin-a-night5">Vitamin A Night Serum</div>
            <div className="container">
              <div className="div49">$90</div>
              <div className="div50">2</div>
              <div className="div51">$180</div>
            </div>
          </div>
        </div>
      </div>
      <div className="subtotal-frame">
        <div className="frames6">
          <div className="notes-terms">
            <div className="subtotal2">
              <div className="subtotal3">Subtotal</div>
              <div className="tax-51">tax 5%</div>
              <div className="discount-101">Discount 10%</div>
            </div>
            <div className="subtotal4">
              <div className="div52">$540.00</div>
              <div className="div53">$00.00</div>
              <div className="div54">$00.00</div>
            </div>
          </div>
        </div>
        <div className="total-frame-parent">
          <div className="total-frame1">
            <div className="line-separator" />
            <div className="summary-frame1">
              <div className="total-label">
                <div className="total2">total</div>
                <div className="total-value">$540.00</div>
              </div>
            </div>
          </div>
          <div className="rectangle-parent23">
            <div className="frame-child16" />
            <div className="notes-terms-frame">
              <div className="notesterms1">Notes/Terms</div>
            </div>
            <input
              className="lorem-ipsum-dolor1"
              placeholder="Lorem ipsum dolor sit amet. Sit eaque assumenda qui."
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerInputsJaneDoe;
