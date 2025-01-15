export type Transaction = {
  amount: number;
  currency: string;
  cardholder: string;
  statusId: string;
  statusDescription: string;
  created: string;
};

const transactions: Transaction[] = [
  {
    amount: 100.50,
    currency: "EUR",
    cardholder: "Ahmed Khalid",
    statusId: "TXN_SUCCESS",
    statusDescription: "Succeeded",
    created: "2015-03-25T12:00:00Z"
  },
  {
    amount: 750.00,
    currency: "EUR",
    cardholder: "Sarah Ibrahim",
    statusId: "TXN_PENDING",
    statusDescription: "Pending",
    created: "2016-06-15T09:30:00Z"
  },
  {
    amount: 8603.00,
    currency: "EUR",
    cardholder: "Omar Hassan",
    statusId: "TXN_CANCELED",
    statusDescription: "Canceled",
    created: "2017-08-10T14:20:00Z"
  },
  {
    amount: 9000.00,
    currency: "EUR",
    cardholder: "Lina Ahmed",
    statusId: "TXN_FAILED",
    statusDescription: "Failed",
    created: "2018-02-05T18:45:00Z"
  },
  {
    amount: 10000.00,
    currency: "EUR",
    cardholder: "Noah Williams",
    statusId: "TXN_REFUNDED",
    statusDescription: "Refunded",
    created: "2019-11-12T10:15:00Z"
  },
  {
    amount: 7493.00,
    currency: "EUR",
    cardholder: "Sophia Garcia",
    statusId: "TXN_DISPUTED",
    statusDescription: "Disputed",
    created: "2020-01-30T16:30:00Z"
  },
  {
    amount: 400.00,
    currency: "EUR",
    cardholder: "Emma Thompson",
    statusId: "TXN_SUCCESS",
    statusDescription: "Succeeded",
    created: "2021-05-20T11:00:00Z"
  },
  {
    amount: 600.00,
    currency: "EUR",
    cardholder: "Liam Johnson",
    statusId: "TXN_SUCCESS",
    statusDescription: "Succeeded",
    created: "2015-07-14T13:40:00Z"
  },
  {
    amount: 700.00,
    currency: "EUR",
    cardholder: "Hana Youssef",
    statusId: "TXN_PENDING",
    statusDescription: "Pending",
    created: "2016-12-01T08:20:00Z"
  },
  {
    amount: 300.00,
    currency: "EUR",
    cardholder: "Yousef Ali",
    statusId: "TXN_SUCCESS",
    statusDescription: "Succeeded",
    created: "2018-09-10T15:10:00Z"
  },
  {
    amount: 1500.00,
    currency: "EUR",
    cardholder: "Amelia Brown",
    statusId: "TXN_CANCELED",
    statusDescription: "Canceled",
    created: "2019-03-05T12:50:00Z"
  },
  {
    amount: 2340.00,
    currency: "EUR",
    cardholder: "Olivia Davis",
    statusId: "TXN_REFUNDED",
    statusDescription: "Refunded",
    created: "2020-10-22T17:00:00Z"
  },
  {
    amount: 500.00,
    currency: "EUR",
    cardholder: "Mariam Scott",
    statusId: "TXN_DISPUTED",
    statusDescription: "Disputed",
    created: "2021-02-15T14:25:00Z"
  },
  {
    amount: 890.00,
    currency: "EUR",
    cardholder: "Ali Hussain",
    statusId: "TXN_FAILED",
    statusDescription: "Failed",
    created: "2017-04-10T09:10:00Z"
  },
  {
    amount: 2500.00,
    currency: "EUR",
    cardholder: "Layla Carter",
    statusId: "TXN_SUCCESS",
    statusDescription: "Succeeded",
    created: "2018-06-15T20:00:00Z"
  }
];

export default transactions;
