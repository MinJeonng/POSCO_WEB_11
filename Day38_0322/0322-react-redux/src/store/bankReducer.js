const DEPOSIT = 'account/DEPOSIT';
const WITHDRAW = 'account/WITHDRAW';

export const deposit = (amount) => ({ type: DEPOSIT, payload: amount });
export const withdraw = (amount) => ({ type: WITHDRAW, payload: amount });

const initialState = {
  balance: 0,
};
const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return { balance: state.balance + action.payload };
    case WITHDRAW:
      return { balance: state.balance - action.payload };
    default:
      return state;
  }
};

export default bankReducer;
