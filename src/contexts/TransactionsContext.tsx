import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

interface Transaction {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

const initialTransactions: Transaction[] = [
  {
    id: "1",
    description: "Desenvolvimento de site",
    type: "income",
    category: "🧑‍💻 Frella",
    price: 14000,
    createdAt: "2022-07-29T19:36:44.505Z",
  },
  {
    id: "2",
    description: "Hambúrguer",
    type: "outcome",
    category: "🍔 Lanche",
    price: 60,
    createdAt: "2022-07-29T19:30:44.505Z",
  },
  {
    id: "3",
    description: "Ignite Rocketseat",
    type: "outcome",
    category: "📚 Educação",
    price: 1980,
    createdAt: "2022-07-29T19:24:44.505Z",
  },
  {
    description: "Desenvolvimento de app",
    price: 10000,
    category: "🧑‍💻 Frella",
    type: "income",
    createdAt: "2022-07-30T13:26:57.560Z",
    id: "4",
  },
  {
    description: "Pastel",
    price: 5,
    category: "🍔 Lanche",
    type: "outcome",
    createdAt: "2022-07-30T13:30:57.560Z",
    id: "5",
  },
  {
    description: "Iogurte de Banana",
    price: 4,
    category: "🛒 Mercado",
    type: "outcome",
    createdAt: "2022-07-30T13:38:57.560Z",
    id: "6",
  },
  {
    description: "salgado",
    price: 25,
    category: "🍔 Lanche",
    type: "outcome",
    createdAt: "2024-05-13T02:26:40.658Z",
    id: "M0J5s49",
  },
  {
    description: "Vale",
    price: 1400,
    category: "💰 Salário",
    type: "income",
    createdAt: "2024-05-13T02:27:03.597Z",
    id: "dO53Am2",
  },
]

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions)

  const fetchTransactions = useCallback(async (query?: string) => {
    // Simulando um delay de busca
    await new Promise(resolve => setTimeout(resolve, 500))

    if (query) {
      console.log('Querying transactions for:', query) // Adicione este log
      const filteredTransactions = initialTransactions.filter(transaction =>
        transaction.description.toLowerCase().includes(query.toLowerCase())
      )
      console.log('Filtered transactions:', filteredTransactions) // Adicione este log
      setTransactions(filteredTransactions)
    } else {
      setTransactions(initialTransactions)
    }
  }, [])

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data

      const newTransaction: Transaction = {
        id: (transactions.length + 1).toString(),
        description,
        price,
        category,
        type,
        createdAt: new Date().toISOString(),
      }

      setTransactions((state) => [newTransaction, ...state])
    },
    [transactions],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

// import { ReactNode, useCallback, useEffect, useState } from 'react'
// import { createContext } from 'use-context-selector'
// import { api } from '../lib/axios'

// interface Transaction {
//   id: number
//   description: string
//   type: 'income' | 'outcome'
//   price: number
//   category: string
//   createdAt: string
// }

// interface CreateTransactionInput {
//   description: string
//   price: number
//   category: string
//   type: 'income' | 'outcome'
// }

// interface TransactionContextType {
//   transactions: Transaction[]
//   fetchTransactions: (query?: string) => Promise<void>
//   createTransaction: (data: CreateTransactionInput) => Promise<void>
// }

// interface TransactionsProviderProps {
//   children: ReactNode
// }

// export const TransactionsContext = createContext({} as TransactionContextType)

// export function TransactionsProvider({ children }: TransactionsProviderProps) {
//   const [transactions, setTransactions] = useState<Transaction[]>([])

//   const fetchTransactions = useCallback(async (query?: string) => {
//     const response = await api.get('transactions', {
//       params: {
//         _sort: 'createdAt',
//         _order: 'desc',
//         q: query,
//       },
//     })

//     setTransactions(response.data)
//   }, [])

//   const createTransaction = useCallback(
//     async (data: CreateTransactionInput) => {
//       const { description, price, category, type } = data

//       const response = await api.post('transactions', {
//         description,
//         price,
//         category,
//         type,
//         createdAt: new Date(),
//       })

//       setTransactions((state) => [response.data, ...state])
//     },
//     [],
//   )

//   useEffect(() => {
//     fetchTransactions()
//   }, [fetchTransactions])

//   return (
//     <TransactionsContext.Provider
//       value={{
//         transactions,
//         fetchTransactions,
//         createTransaction,
//       }}
//     >
//       {children}
//     </TransactionsContext.Provider>
//   )
// }
