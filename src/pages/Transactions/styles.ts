import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
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
   position: absolute;
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