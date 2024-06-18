const transactions = [
  {
    id: "1",
    description: "Desenvolvimento de site",
    type: "income",
    category: "Venda",
    price: 14000,
    createdAt: "2022-07-29T19:36:44.505Z",
  },
  {
    id: "2",
    description: "Hambúrguer",
    type: "outcome",
    category: "Alimentação",
    price: 60,
    createdAt: "2022-07-29T19:30:44.505Z",
  },
  {
    id: "3",
    description: "Ignite Rocketseat",
    type: "outcome",
    category: "Educação",
    price: 1980,
    createdAt: "2022-07-29T19:24:44.505Z",
  },
  {
    description: "Desenvolvimento de app",
    price: 10000,
    category: "Venda",
    type: "income",
    createdAt: "2022-07-30T13:26:57.560Z",
    id: "4",
  },
  {
    description: "Pastel",
    price: 5,
    category: "Alimentação",
    type: "outcome",
    createdAt: "2022-07-30T13:30:57.560Z",
    id: "5",
  },
  {
    description: "Iogurte de Banana",
    price: 4,
    category: "Alimentação",
    type: "outcome",
    createdAt: "2022-07-30T13:38:57.560Z",
    id: "6",
  },
  {
    description: "salgado",
    price: 25,
    category: "Lanche",
    type: "outcome",
    createdAt: "2024-05-13T02:26:40.658Z",
    id: "M0J5s49",
  },
  {
    description: "Vale",
    price: 1400,
    category: "Salário",
    type: "income",
    createdAt: "2024-05-13T02:27:03.597Z",
    id: "dO53Am2",
  },
];

export default (req, res) => {
  res.status(200).json(transactions);
};