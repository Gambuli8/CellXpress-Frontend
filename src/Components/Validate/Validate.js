export const validate = (name, value) => {
    let error = "";

    switch (name) {
        case "name":
            if (!value.trim()) {
                error = "El nombre es obligatorio";
            }
            break;
        case "lastname":
            if (!value.trim()) {
                error = "El apellido es obligatorio";
            } 
            break;
        case "email":
            if (!value.trim()) {
                error = "El email es obligatorio";
            } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                error =
                    "Debe registrar un email valido";
            }
            break;
        case "password":
            if (!value.trim()) {
                error = "El password es obligatorio";
            } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20}/.test(value)) {
                error =
                    "Debe colocar una contraseña de 6 a 20 caracteres, un dígito numérico, una letra mayúscula , una letra minúscula y un digito especial";
            }
            break;
        default:
            break;
    }

    return error;
};