import { createSlice } from "@reduxjs/toolkit";

// قبل التولكت كانت ميمعة لأنه بدنا نكتب كل أكشن بفايل بس هسه مع التولكت كل الاكشنز بفايل واحد

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [{}],
    localStorageItem: [],
    // totalQuantity:0;
  },

  // في الكود التالي سنقوم بأضافة الأفعال (الأكشنز) التي نريد حدوثها إضافة أعضاء أو الغاء عضوية
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      //   state.totalQuantity++;
    },
    removeFromCart: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeItem;
    },
  },
});

export default cartSlice.reducer;

// هنا سوف نقوم بتصدير الأفعال التي نريد أستخدامها
export const { addToCart, removeFromCart } = cartSlice.actions;
