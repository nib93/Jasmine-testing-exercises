describe("Payments test:- setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 200;
      tipAmtInput.value = 40;
    });
  
    it('should be able to add a new payment to allPayments on submitPaymentInfo()', function () {
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('200');
      expect(allPayments['payment1'].tipAmt).toEqual('40');
      expect(allPayments['payment1'].tipPercent).toEqual(20);
    });
  
    it('should not be able to add a new payment on submitPaymentInfo() with empty input', function () {
      billAmtInput.value = '';
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  
    it('should payment update #paymentTable on appendPaymentTable()', function () {
      let currentPayment = createCurPayment();
      allPayments['payment1'] = currentPayment;
  
      appendPaymentTable(currentPayment);
  
      let currentTdList = document.querySelectorAll('#paymentTable tbody tr td');
  
      expect(currentTdList.length).toEqual(4);
      expect(currentTdList[0].innerText).toEqual('$200');
      expect(currentTdList[1].innerText).toEqual('$40');
      expect(currentTdList[2].innerText).toEqual('%20');
      expect(currentTdList[3].innerText).toEqual('X');
    });
  
    it('should create a new payment on createCurPayment()', function () {
      let expectedPayment = {
        billAmt: '200',
        tipAmt: '40',
        tipPercent: 20,
      }
  
      expect(createCurPayment()).toEqual(expectedPayment);
    });
  
    it('should not create payment with empty input on createCurPayment()', function () {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      let currentPayment = createCurPayment();
  
      expect(currentPayment).toEqual(undefined);
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      paymentId = 0;
      allPayments = {};
    });
  });