export const email_validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const name_validator = /^[a-zA-Z ]+$/;

export const password_validator = /(?=.*[!@#$%^&*])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,}/;

export const address_validator = /^[a-zA-Z0-9\s,'-]*$/;

export const getSelectedItem = (data) => {
    let array = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].selected === true) {
            array.push(data[i]);
        }
    }
    return array;
};

export const getSelectedItemArr = (data) => {
    let array = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].selected === true) {
            array.push(data[i].value);
        }
    }
    return array;
};

export const getObjectSize = (obj) => {
    let size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};