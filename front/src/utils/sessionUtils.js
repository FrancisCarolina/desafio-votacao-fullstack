export const setSessionStorageItem = (key, value) => {
  sessionStorage.setItem(key, value);
  const event = new Event("storageChange");
  window.dispatchEvent(event);
};

export const removeSessionStorageItem = (key) => {
  sessionStorage.removeItem(key);
  const event = new Event("storageChange");
  window.dispatchEvent(event);
};
