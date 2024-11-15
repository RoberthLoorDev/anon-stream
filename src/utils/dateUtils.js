export const formatDate = (date) => {
     const options = { year: "numeric", month: "long", day: "numeric" };
     const formatedDate = new Date(date);

     // Formatear la fecha en español
     return formatedDate.toLocaleDateString("es-ES", options);
};
