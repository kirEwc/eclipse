const TicketsDate = [
  {
    id: "1",
    aeroline: 'Avianca',
    from: 'Habana',
    to: 'Miami',
    date: [
      '2024-09-23',
      '2024-09-24',
      '2024-09-25',
      '2024-09-26',
      '2024-09-27'
    ],
    price: [
      ["USD", { value: 1100, string: "efectivo" }],
      ["Zelle", { value: 910, string: "zelle" }],
      ["MLC", { value: 2100, string: "mlc" }],
      ["R$", { value: 810, string: "real" }],
    ],
  },
  {
    id: "2",
    aeroline: 'Caribbean Airlines',
    from: 'New York',
    to: 'Los Angeles',
    date: [
      '2024-10-01',
      '2024-10-02',
      '2024-10-03',
      '2024-10-04',
      '2024-10-05'
    ],
    price: [
      ["USD", { value: 1010, string: "efectivo" }],
      ["Zelle", { value: 940, string: "zelle" }],
      ["MLC", { value: 2040, string: "mlc" }],
      ["R$", { value: 840, string: "real" }],
    ],
  },
  {
    id: "3",
    aeroline: 'Delta Airlines',
    from: 'Toronto',
    to: 'London',
    date: [
      '2024-11-10',
      '2024-11-11',
      '2024-11-12',
      '2024-11-13',
      '2024-11-14'
    ],
    price: [
      ["USD", { value: 4100, string: "efectivo" }],
      ["Zelle", { value: 940, string: "zelle" }],
      ["MLC", { value: 4000, string: "mlc" }],
      ["R$", { value: 804, string: "real" }],
    ],
  }
];

export default TicketsDate;
