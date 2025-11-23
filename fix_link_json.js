const fs = require('fs');
const path = 'source/_data/link.json';

try {
    const rawData = fs.readFileSync(path, 'utf8');
    const data = JSON.parse(rawData);

    if (Array.isArray(data) && data[0].link_list) {
        console.log('link.json already in correct format.');
        process.exit(0);
    }

    const friendsList = data.friends || [];
    const newLinkList = friendsList.map(item => {
        return {
            name: item[0],
            link: item[1],
            avatar: item[2],
            descr: "" // Adding empty description as it might be required or useful
        };
    });

    const newStructure = [
        {
            class_name: "友情链接",
            class_desc: "那些人，那些事",
            link_list: newLinkList
        }
    ];

    fs.writeFileSync(path, JSON.stringify(newStructure, null, 2));
    console.log('Successfully converted link.json to new format.');

} catch (error) {
    console.error('Error processing link.json:', error);
    process.exit(1);
}
