const handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
      const sortType = field === sort.column ? sort.type : 'default';

      const icons = {
        default: 'bi bi-filter',
        asc: 'bi bi-sort-up',
        desc: 'bi bi-sort-down'
      };

      const types = {
        default: 'desc',
        asc: 'desc',
        desc: 'asc'
      };

      const icon = icons[sortType];
      const type = types[sortType];

      // bao ve an toan cho nguoi dung bang cach escape cac ky tu nguy hiem 
        // nhu <, >, &, ... 
        // vi du: <script>alert('You are Hacked')</script>
      const href = handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);

      const output = `<a href="${href}">
                    <i class="${icon}"></i>
                </a>`;
        
                // tra ve 1 chuoi html an toan 
        return new handlebars.SafeString(output);
    }
  }