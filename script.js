let fruits = [
    "orange", "pomme", "citron", "raisin", "kiwi"
];

let users = [
    {
        firstname: "Jean",
        lastname: "Dupont",
        age: "22"
    },
    {
        firstname: "Paul",
        lastname: "Dubois",
        age: "35"
    }
]

const app = {
    data() {
        return {
            title: "Hello World",
            message: "Voici ma première application Vue.js",
            width: 500,
            height: 200,
            fruits: fruits,
            lien: "https://alphorm.com",
            image: "chien.jfif",
            animal: "Chien",
            done: false,
            textHTML: "<p class='text-danger'>Attention</p>",
            km: 0,
            finish: 5,
            users: users,
            newUser: {

            },
            errors: []
        }
    },
    methods: {
        bonjour: function () {
            return "Bonjour tout le monde";
        },
        calculSquareSurface: function (side) {
            return side * side;
        },
        calculRectangleSurface: function () {
            return this.width * this.height;
        },
        redButton: function () {
            return alert("Tu as cliqué sur le bouton rouge !");
        },
        blueButton: function() {
            return alert("Tu as cliqué sur le bouton bleu");
        },
        blackButton: function() {
            return alert("La souris est sorti du bouton noir");
        },
        drive: function () {
            setInterval(() => {
                this.km++;
            }, 1000)
        },
        addUser: function () {
            this.errors =  [];

            if (!this.newUser.firstname) {
                this.errors.push("Firstname requis.")
            }

            if (!this.newUser.lastname) {
                this.errors.push("Lastname requis.")
            }

            if (!this.newUser.age || !Number.isInteger(this.newUser.age) || this.newUser.age < 15) {
                this.errors.push("Vous devez avoir au moins 15 ans !")
            }

            if (this.errors.length) {
                return false;
            }

            this.users.push(this.newUser);
            this.newUser = {};
            this.errors = [];
        }
    },
    // watch
    // watch: {
    //     km: function () {
    //         if (this.km === this.finish) {
    //             this.km = 0;
    //             alert("Tu es arrivé");
    //         }
    //     }
    // },
    // beforeCreate() {
    //     console.log(this.km);
    // },
    // created() {
    //     this.drive();
    // }
}

// life cycle hooks
// avec la méthod drive, beforeCreate() et created()

Vue.createApp(app).mount("#app");