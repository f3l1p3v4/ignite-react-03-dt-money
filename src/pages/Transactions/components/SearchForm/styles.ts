import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      padding: 0.8rem 0.8rem;
    }

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: ${(props) => props.theme['green-500']};
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      padding: 0.8rem 0.8rem;

      svg {
        font-size: 0d.8rem;
      }
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: transparent;
      border: 1px solid ${(props) => props.theme['green-300']};
      color: ${(props) => props.theme['green-300']};
      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }
  }
`
