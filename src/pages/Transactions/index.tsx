import { useContextSelector } from 'use-context-selector'

import { GithubLogo } from '@phosphor-icons/react'

import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter } from '../../utils/formatter'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
  LinkCode
} from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>
                     <p>{dateFormatter.format(new Date(transaction.createdAt))}</p>
                     {transaction.description}
                  </td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {`${transaction.price}`}
                    </PriceHighlight>
                  </td>
                  <td>
                    {transaction.category}
                  </td>
                  {/* <td>
                    Ações
                  </td> */}
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
      <LinkCode href='https://github.com/f3l1p3v4/ignite-react-03-dt-money' >
        <GithubLogo />
        Ver Código
      </LinkCode>
    </div>
  )
}
