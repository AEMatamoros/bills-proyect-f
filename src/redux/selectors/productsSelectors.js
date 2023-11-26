import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = (state) => state.task.products;
export const selectFilter = (state) => state.filterStatus.filter;

export const selectProductsFiltered = createSelector(
  [selectProducts, selectFilter],
  (products, filter) => {
    let filteredProducts = products.filter((task) => {
      if (filter === "all") {
        return true;
      } else if (filter === "completed") {
        return task.completed;
      } else if (filter === "incomplete") {
        return !task.completed;
      }
      return true;
    });
    return filteredProducts;
  }
);

export const selectProductsCount = (state) => {
  return state.task.products.length;
};

export const selectProductsStatus = (state) => {
  return state.task.products.reduce(
    (prev, act) => {
      if (act.completed) {
        prev.completed += 1;
      } else {
        prev.incomplete += 1;
      }
      return prev;
    },
    {
      incomplete: 0,
      completed: 0,
    }
  );
};

export const selectProductsStatusMemo = createSelector(
  [selectProducts],
  (products) => {
    //   console.log("Calculando compkletas e incompletad");
    return products.reduce(
      (prev, act) => {
        if (act.completed) {
          prev.completed += 1;
        } else {
          prev.incomplete += 1;
        }
        return prev;
      },
      {
        incomplete: 0,
        completed: 0,
      }
    );
  }
);
