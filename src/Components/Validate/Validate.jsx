export const validate = (name, value) => {
    let error = "";

    switch (name) {
        case "title":
            if (!value.trim()) {
                error = "campo obligatorio";
            }
            break;
        case "price":
            if (!value.trim()) {
                error = "campo obligatorio";
            }
            break;
        case "description":
            if (!value.trim()) {
                error = "campo obligatorio";
            }
            break;
        case "brand":
            if (!value.trim()) {
                error = "campo obligatorio";
            }
            break;
        case "image":
            if (!value.trim()) {
                error = "imagen obligatorio";
            }
            break;
        case "count":
            if (!value.trim()) {
                error = "campo obligatorio";
            }
            break;
        default:
            break;
    }
    return error;
};
