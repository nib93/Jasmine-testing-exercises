
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 10,
    rate: 6.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('112.03');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 10000,
    years: 6,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('166.67');
});

/// etc
