export const debounceHandler = (fn, delayTime) => {
  let timer;

  return function () {
    let context = this;
    let args = arguments;

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delayTime);
  };
};
