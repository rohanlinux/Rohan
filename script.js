const userProfile = {
    name: '𝙍𝙊𝙃𝘼𝙉 𝙊𝙂• ',
    classSchool: ' Class: Padhai Choddia | School: IDK ',
    role: '~ Carder~',
    skills: '• IGCC | FBCC | SHOPIFY •',
    telegramLink: 'https://t.me/Smiyq',
    bitcoinLink: 'https://t.me/Smiyq'
};

document.getElementById('name').innerText = userProfile.name;
document.getElementById('class-school').innerText = userProfile.classSchool;
document.getElementById('role').innerText = userProfile.role;
document.getElementById('skills').innerText = userProfile.skills;
document.getElementById('telegram-link').href = userProfile.telegramLink;
document.getElementById('bitcoin-link').href = userProfile.bitcoinLink;
