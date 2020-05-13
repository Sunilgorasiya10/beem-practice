export const email_validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const name_validator = /^[a-zA-Z ]+$/;

export const password_validator = /(?=.*[!@#$%^&*])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,}/;

export const address_validator = /^[a-zA-Z0-9\s,'-]*$/;