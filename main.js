let user_data = [
    {
        img: "profil.png",
        nickname: "Musa",
        username: "muhsya03@gmail.com",
        password: "@Syahid2004",
        date: "28 Februari 2004",
        gender: "Male",
        point: 500,
        code: 1
    },
    {
        img: "profil.png",
        nickname: "Dimas",
        username: "dimas@gmail.com",
        password: "dimdimas123",
        date: "1 Juni 2005",
        gender: "Male",
        point: 0,
        code: 2
    }
];
let user_code = 1;
let img, nickname, username, password, date, gender, point, code;

for (let i = 0; i < user_data.length; i++) {
    if (user_code === user_data[i].code) {
        img = user_data[i].img;
        nickname = user_data[i].nickname;
        username = user_data[i].username;
        password = user_data[i].password;
        date = user_data[i].date;
        gender = user_data[i].gender;
        point = user_data[i].point;
        code = user_data[i].code;
        break; // Exit loop once the user is found
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let nameElement = document.querySelector('.name');
    if (nameElement) {
        nameElement.textContent = nickname;
    }
    
    let profilImgElement = document.getElementById('profil-img');
    if (profilImgElement) {
        profilImgElement.src = img;
    }

    let role;

    if (point < 120) {
        role = "Beginner";
    } else if (point < 300) {
        role = "Inquiro";
    } else if (point < 700) {
        role = "Erudite";    
    } else if (point < 1500) {
        role = "The Esperto";
    } else if (point < 3000) {
        role = "The Luminary";
    } else if (point < 7000) {
        role = "The Doctor";
    } else if (point < 15000) {
        role = "The Professor";
    } else {
        role = "Sage";
    }

    let roleElement = document.querySelector('.a_kiri');
    if (roleElement) {
        roleElement.textContent = role;
    }
});

let list_data = [
    {
        soal : 1,
        pertanyaan : "4-2(8-11)+6 = 4-2(-3)+6",
        pesan : "yuk jawab...",
        bidang : "Matematika",
        materi : "Kalkulus",
        isbn : 9789797410117,
        list_chapter : "1.1",
        kode_user : 1
    },
    {
        soal : 2,
        pertanyaan : "3[2-4(7-12)] = 3[2-4(-5)]",
        pesan : "nomor 2 materi 1 doang bisa lah...",
        bidang : "Matematika",
        materi : "Kalkulus",
        isbn : 9789797410117,
        list_chapter : "1.1",
        kode_user : 1
    },
    {
        soal : 3,
        pertanyaan : "Jelaskan bagaimana pandangan agama menurut ahli sosiologi agama dan antropologi budaya!",
        pesan : " ",
        bidang : "Agama",
        materi : "random",
        isbn : 9786238035052,
        list_chapter : "1",
        kode_user : 2
    }
]

materi_main = []