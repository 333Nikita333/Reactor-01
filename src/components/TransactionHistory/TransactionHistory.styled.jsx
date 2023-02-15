import styled from '@emotion/styled';

const TransactionTable = styled.table`
  color: #000000;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  border-collapse: collapse;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 2px -3px 37px -3px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);

  & thead {
    & tr {
      color: #000000;
      background-color: rgb(37, 169, 213);

      & th {
        font-size: 15px;
        font-weight: 700;
        color: #ffffff;
        padding: 15px;
        border-style: solid;
        border-width: 0 1px 1px 0;
        border-color: white;
      }
    }
  }
`;
const TransactionHistoryList = styled.tbody`
  color: #000000;
`;
const TransactionItem = styled.tr`
  color: #000000;

  & td {
    color: grey;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }
`;

export { TransactionTable, TransactionHistoryList, TransactionItem };
