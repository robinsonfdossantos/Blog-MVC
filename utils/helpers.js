
module.exports = {
  format_date: (date) => {
    if (!date || isNaN(new Date(date))) {
      return ''; 
    }
    return new Date(date).toLocaleDateString();
  },
};
