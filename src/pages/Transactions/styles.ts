import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    margin: 2rem auto;
  }
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  tr {
    @media (max-width: 768px) {
      padding: 0.8rem 0.8rem;
      font-size: 0.7rem;
    }
  }

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    @media (max-width: 768px) {
      padding: 0.8rem 0.4rem;
      font-size: 0.775rem;
    }

    &:first-child {
      padding: 0.8rem 0.4rem 0.8rem 0.8rem;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    p {
      font-size: 0.6rem;
      opacity: 0.8;
      margin-bottom: 5px;
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const LinkCode = styled.a`
   position: fixed;
    bottom: 20px;
    right: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;
    background-color: #30363d;
    border: 1px solid #505152;
    border-radius: 8px;
    color: #ffffff;
    padding: 10px;

    transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }


  svg {
    font-size: 1rem;
  }
`