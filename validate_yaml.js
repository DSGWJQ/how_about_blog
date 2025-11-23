const fs = require('fs');
const yaml = require('js-yaml');
const path = 'd:/My_Project/person_blog/hexo_blog/_config.anzhiyu.yml';
try {
    const file = fs.readFileSync(path, 'utf8');
    yaml.load(file);
    console.log('YAML is valid');
} catch (e) {
    console.error('YAML error:', e.message);
    console.error('Line:', e.mark ? e.mark.line + 1 : 'unknown');
}
